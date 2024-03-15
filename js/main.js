window.addEventListener('load', init);

// Global variables
let characterGallery;
const indexPhp = 'webservice-start/index.php';
let closeButton;
let favorites = [];
let characterData = {};
let popupContainer;
let popupContent;
let favoritesModalContainer;
let favoritesModalContent;
let headerTitle;


function init() {
    characterGallery = document.getElementById('characters-gallery');
    ajaxRequest(indexPhp, createCharacterCards);

    headerTitle = document.getElementById('header-h1');
    const favoritesListButton = document.createElement('button');
    favoritesListButton.textContent = 'Show Favorites';
    document.body.appendChild(favoritesListButton);
    favoritesListButton.classList.add('show-favorites-button');
    favoritesListButton.addEventListener('click', favoritesListClickHandler)
}

function ajaxRequest(url, successHandler) {
    fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error (${response.status}): ${response.statusText}`);
            }
            return response.json();
        })
        .then(successHandler)
        .catch(getCharacterDataErrorHandler);
}

function getCharacterDataErrorHandler(error) {
    console.log(error);
}
function createCharacterCards(data) {
    for (const character of data) {
        const characterCard = document.createElement('div');
        characterCard.classList.add('character-card');

        // Set custom data attribute to store character ID
        characterCard.dataset.id = character.id;
        characterCard.dataset.name = character.name;
        characterCard.dataset.age = character.age;


        characterGallery.appendChild(characterCard);

        fillCharacterCard(character, characterCard);
        createFavoriteButton(characterCard, character.id);

        // Attach event listener directly to the characterCard element
        characterCard.addEventListener('click', characterCardClickHandler);
        characterData[character.id] = character;
    }
}

function fillCharacterCard(characterData, characterCard) {
    const nameHeader = document.createElement('h2');
    nameHeader.textContent = characterData.name;
    characterCard.appendChild(nameHeader);

    const image = document.createElement('img');
    image.src = characterData.img;
    image.classList.add('img');
    characterCard.appendChild(image);
}


function characterCardClickHandler(e) {
    const clickedItemClosest = e.target.closest('.character-card');
    const clickedItem = e.target;

    // Check if the clicked item or its parent is a .character-card element
    if (clickedItemClosest && clickedItem.nodeName !== 'BUTTON') {
        const existingPopup = document.querySelector('.popup-container');
        if (existingPopup) {
            existingPopup.remove();
        }

        const characterId = clickedItemClosest.dataset.id;
        const character = characterData[characterId];
        headerTitle.textContent = `${character.name} Details`;

        const allCharacterCards = document.querySelectorAll('.character-card');
        for (const card of allCharacterCards) {
                card.classList.add('blurred');
        }

        createModalContent(clickedItemClosest, character);
    } else if (clickedItem.nodeName === 'BUTTON') {

    }
}
function createModalContent(clickedItem, character) {
    popupContainer = document.createElement('div');
    popupContainer.classList.add('popup-container');
    document.body.appendChild(popupContainer);

    popupContent = document.createElement('div');
    popupContent.classList.add('popup-content');
    popupContainer.appendChild(popupContent);

    const nameHeader = document.createElement('h2');
    nameHeader.textContent = clickedItem.dataset.name;
    popupContent.appendChild(nameHeader);

    const ageHeader = document.createElement('h2');
    ageHeader.textContent = `Age: ${character.age}`;
    popupContent.appendChild(ageHeader);

    const image = document.createElement('img');
    image.src = character.img;
    image.classList.add('popup-img');
    popupContent.appendChild(image);

    createCloseButton(popupContent);



    createFavoriteButton(popupContent, character.id);

    ajaxRequest(`${indexPhp}?id=${character.id}`, createDetailsContent);
}

function createDetailsContent (characterDetails) {
    const characterDescription = document.createElement('p');
    characterDescription.textContent = characterDetails.description;
    popupContent.appendChild(characterDescription);

    const deaths = document.createElement('h2');
    deaths.textContent = `Deaths: ${characterDetails.deaths}`;
    popupContent.appendChild(deaths);

    const tagsHeader = document.createElement('h2');
    tagsHeader.textContent = "Tags:";
    popupContent.appendChild(tagsHeader);

    const tags = document.createElement('p');
    tags.textContent = characterDetails.tags.join(', ');
    popupContent.appendChild(tags);
}

function createCloseButton (parentName) {
    closeButton = document.createElement('span');
    closeButton.innerHTML = '&times' ;
    closeButton.classList.add('close-btn');
    parentName.appendChild(closeButton);
    closeButton.addEventListener('click', removePopup);
}
function removePopup() {
    if (popupContainer) {
        popupContainer.remove();
    }

    if (favoritesModalContainer) {
        favoritesModalContainer.remove();
    }

    headerTitle.textContent = 'South Park Characters';

    // Remove blur effect from all character cards
    const allCharacterCards = document.querySelectorAll('.character-card');
    for (const card of allCharacterCards) {
        card.classList.remove('blurred');
    }
}

function createFavoriteButton(parentName, CharacterId) {
    const favoriteButton = document.createElement('button');
    favoriteButton.textContent = "Add to favorites";
    favoriteButton.dataset.id = CharacterId;
    parentName.appendChild(favoriteButton);
    favoriteButton.classList.add('favorite-button');
    favoriteButton.addEventListener('click', favoritesButtonClickHandler);
}



function favoritesButtonClickHandler(e) {
    const newFavoriteCharacter = e.target;
    const characterId = newFavoriteCharacter.dataset.id;
    if (!favorites.includes(characterId)) {
        favoritesModalContent.innerHTML = '';
        PushItemToFavorites(characterId);
    }
}

function PushItemToFavorites(characterId) {
    favorites.push(characterId);
    localStorage.setItem('favorites', JSON.stringify(favorites));
    console.log(favorites);
    getFavoriteCharactersFromLocalStorage();
}
function addFavoriteCharacter(character) {
    createCloseButton(favoritesModalContent);
    const favoriteCharacterItem = document.createElement('div');
    favoriteCharacterItem.classList.add('favorite-item');

    const favoriteCharacterName = document.createElement('h2');
    favoriteCharacterName.textContent = character.name;
    favoriteCharacterItem.appendChild(favoriteCharacterName);

    const removeButton = document.createElement('button');
    removeButton.textContent = "Remove from Favorites";
    removeButton.dataset.id = character.id;
    removeButton.classList.add('remove-favorite-button');
    removeButton.addEventListener('click', removeFromFavoritesHandler);
    favoriteCharacterItem.appendChild(removeButton);

    favoritesModalContent.appendChild(favoriteCharacterItem);
}
function favoritesListClickHandler () {
    const existingPopup = document.querySelector('.popup-container');
    if (existingPopup) {
        existingPopup.remove();
    }


    const allCharacterCards = document.querySelectorAll('.character-card');
    for (const card of allCharacterCards) {
        card.classList.add('blurred');
    }

    favoritesModalContainer = document.createElement('div');
    favoritesModalContainer.classList.add('popup-container');
    document.body.appendChild(favoritesModalContainer);

    favoritesModalContent = document.createElement('div');
    favoritesModalContent.classList.add('popup-content');
    favoritesModalContainer.appendChild(favoritesModalContent);
    headerTitle.textContent = 'Favorite characters:3';
    createCloseButton(favoritesModalContent);

    getFavoriteCharactersFromLocalStorage();
    checkIfNoFavorites();

}
function getFavoriteCharactersFromLocalStorage() {
    const favoriteCharacterNameString = localStorage.getItem('favorites');
    if (favoriteCharacterNameString !== null) {
        favorites = JSON.parse(favoriteCharacterNameString);
        for (const favoriteCharacterId of favorites) {
            const character = characterData[favoriteCharacterId];
            if (character) {
                addFavoriteCharacter(character);
            }
        }
    }
}

function removeFromFavoritesHandler(e) {

    const characterId = e.target.dataset.id;
    const index = favorites.indexOf(characterId);
    if (index !== -1) {
        favorites.splice(index, 1);
        localStorage.setItem('favorites', JSON.stringify(favorites));
        e.target.parentElement.remove();
    }
    checkIfNoFavorites();
}

function checkIfNoFavorites () {
    if (favorites.length === 0) {
        const noFavorites = document.createElement('h2');
        noFavorites.textContent = 'You have no favorites :(';
        favoritesModalContent.appendChild(noFavorites);
    }
}