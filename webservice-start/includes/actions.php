<?php
/**
 * @return array
 */
function getCharacters()
{
    return [
        [
            "id" => 1,
            "name" => "Stanley Marsh",
            "age" => "10",
            "img" => "webservice-start/images/stan-marsh.png"
        ],
        [
            "id" => 2,
            "name" => "Eric Cartman",
            "age" => "10",
            "img" => "webservice-start/images/eric-cartman.png"
        ],
        [
            "id" => 3,
            "name" => "Kyle Broflovski",
            "age" => "10",
            "img" => "webservice-start/images/kyle-broflovski.png"
        ],
        [
            "id" => 4,
            "name" => "Kenny McCormick",
            "age" => "9",
            "img" => "webservice-start/images/kenny-mccormick.png"
        ],
        [
            "id" => 5,
            "name" => "Butters Leopold Stotch",
            "age" => "9",
            "img" => "webservice-start/images/butters-stotch.png"
        ],
        [
            "id" => 6,
            "name" => "Herbert Garrison",
            "age" => "41",
            "img" => "webservice-start/images/herbert-garrison.png"
        ],
        [
            "id" => 7,
            "name" => "Jerome Chef McElroy",
            "age" => "30",
            "img" => "webservice-start/images/jerome-mcelroy.png"
        ],
        [
            "id" => 8,
            "name" => "Randy Marsh",
            "age" => "45",
            "img" => "webservice-start/images/randy-marsh.png"
        ],
        [
            "id" => 9,
            "name" => "Sharon Marsh",
            "age" => "45",
            "img" => "webservice-start/images/sharon-marsh.png"
        ],
        [
            "id" => 10,
            "name" => "Ike Broflovski",
            "age" => "5",
            "img" => "webservice-start/images/ike-broflovski.png"
        ],
        // New characters
        [
            "id" => 11,
            "name" => "Tolkien Black",
            "age" => "10",
            "img" => "webservice-start/images/tolkien-black.png"
        ],
        [
            "id" => 12,
            "name" => "Craig Tucker",
            "age" => "10",
            "img" => "webservice-start/images/craig-tucker.png"
        ],
        [
            "id" => 13,
            "name" => "Tweek Tweak",
            "age" => "10",
            "img" => "webservice-start/images/tweek-tweak.png"
        ],
        [
            "id" => 14,
            "name" => "Sheila Broflovski",
            "age" => "42",
            "img" => "webservice-start/images/sheila-broflovski.png"
        ],
        [
            "id" => 15,
            "name" => "Gerald Broflovski",
            "age" => "45",
            "img" => "webservice-start/images/gerald-broflovski.png"
        ],
        [
            "id" => 16,
            "name" => "Liane Cartman",
            "age" => "37",
            "img" => "webservice-start/images/liane-cartman.png"
        ],
        [
            "id" => 17,
            "name" => "Mr. Mackey",
            "age" => "48",
            "img" => "webservice-start/images/mr-mackey.png"
        ],
        [
            "id" => 18,
            "name" => "PC Principal",
            "age" => "30s",
            "img" => "webservice-start/images/pc-principal.png"
        ],
        [
            "id" => 19,
            "name" => "Strong Woman",
            "age" => "30s",
            "img" => "webservice-start/images/strong-woman.png"
        ],
        [

            "id" => 20,
            "name" => "Towelie",
            "age" => "17",
            "img" => "webservice-start/images/towelie.png"
        ],

    ];
}

/**
 * @param $id
 * @return mixed
 */
function getCharacterDetails($id)
{
    $tags = [
        1 => [
            "deaths" => 0,
            "description" => "Stan Marsh epitomizes loyalty, courage, and moral integrity, being a responsible leader with a strong sense of justice.",
            "tags" => ["Child", "Loyalty", "Courage", "Leadership"]
        ],
        2 => [
            "deaths" => 0,
            "description" => "Eric Cartman is cunning and manipulative, often using his intelligence for personal gain in morally questionable ways.",
            "tags" => ["Child", "Manipulative", "Cunning"]
        ],
        3 => [
            "deaths" => 2,
            "description" => "Kyle Broflovski is known for his intelligence, moral integrity, and unwavering dedication to justice and principles.",
            "tags" => ["Child", "Intelligence", "Justice", "Principled"]
        ],
        4 => [
            "deaths" => 126,
            "description" => "Kenny McCormick is resilient and selfless, often sacrificing himself for others despite his frequent demise.",
            "tags" => ["Child", "Resilient", "Selfless"]
        ],
        5 => [
            "deaths" => 0,
            "description" => "Leopold Butters Stotch maintains a cheerful demeanor despite being naive, often leading to endearing situations.",
            "tags" => ["Child", "Cheerful", "Naive"]
        ],
        6 => [
            "deaths" => 0,
            "description" => "Mr. Garrison is eccentric and unpredictable, known for his outrageous behavior and controversial opinions.",
            "tags" => ["Adult", "Eccentric", "Unpredictable"]
        ],
        7 => [
            "deaths" => 0,
            "description" => "Jerome Chef McElroy is a wise and experienced chef known for his culinary skills and philosophical wisdom.",
            "tags" => ["Adult", "Chef", "Wise"]
        ],
        8 => [
            "deaths" => 0,
            "description" => "Randy Marsh is immature and impulsive, often getting caught up in absurd and humorous situations, much to viewers' amusement.",
            "tags" => ["Adult", "Father", "Immature", "Impulsive"]
        ],
        9 => [
            "deaths" => 0,
            "description" => "Towelie is a sentient towel with a penchant for getting high and providing comic relief in absurd situations.",
            "tags" => ["Adult", "Sentient", "Stoner"]
        ],
        10 => [
            "deaths" => 0,
            "description" => "Ike Broflovski is a precocious and intelligent young boy known for his innocence and occasional mischief.",
            "tags" => ["Child", "Intelligent", "Precocious"]
        ],
        11 => [
            "deaths" => 0,
            "description" => "Tolkien is a mysterious character with unknown origins, often providing sage advice to the residents of South Park.",
            "tags" => ["Unknown", "Mysterious", "Sage"]
        ],
        12 => [
            "deaths" => 0,
            "description" => "Craig is a stoic and sarcastic boy with a dry sense of humor, often finding himself in absurd situations.",
            "tags" => ["Child", "Sarcastic", "Stoic"]
        ],
        13 => [
            "deaths" => 0,
            "description" => "Sharon Marsh is a caring mother and wife, known for her supportive nature and occasional moments of assertiveness.",
            "tags" => ["Adult", "Mother", "Caring"]
        ],
        14 => [
            "deaths" => 0,
            "description" => "Sheila Broflovski, Kyle's mother, is a strong-willed woman with a no-nonsense attitude, often advocating for social justice.",
            "tags" => ["Adult", "Mother", "Advocate"]
        ],
        15 => [
            "deaths" => 0,
            "description" => "Gerald Broflovski, Kyle's father, is a lawyer known for his intelligence and occasional bumbling antics.",
            "tags" => ["Adult", "Father", "Lawyer"]
        ],
        16 => [
            "deaths" => 0,
            "description" => "Liane Cartman is Eric Cartman's mother, a kind-hearted woman with a tendency to spoil her son despite his misbehavior.",
            "tags" => ["Adult", "Mother", "Kind-hearted"]
        ],
        17 => [
            "deaths" => 0,
            "description" => "Mr. Mackey is the school counselor, known for his catchphrase 'M'kay' and his attempts to counsel the students of South Park Elementary.",
            "tags" => ["Adult", "Counselor", "M'kay"]
        ],
        18 => [
            "deaths" => 0,
            "description" => "PC Principal is the politically correct principal of South Park Elementary, dedicated to promoting social justice and equality.",
            "tags" => ["Adult", "Principal", "Politically Correct"]
        ],
        19 => [
            "deaths" => 0,
            "description" => "Strong Woman is a strong and capable female character who often works alongside PC Principal, embodying empowerment and resilience.",
            "tags" => ["Adult", "Strong", "Empowerment"]
        ],
        20 => [
            "deaths" => 0,
            "description" => "Tweek is a jittery and anxious young boy known for his hyperactive behavior and frequent caffeine consumption.",
            "tags" => ["Child", "Jittery", "Anxious"]
        ],
    ];

    return $tags[$id];
}

