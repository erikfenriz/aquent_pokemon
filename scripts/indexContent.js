var articleObject = {
    paragraph1:
        "Pokémon also known as Pocket Monsters in Japan, is a media franchise managed by The Pokémon Company, a Japanese consortium between Nintendo, Game Freak, and Creatures.The franchise copyright is shared by all three companies, but Nintendo is the sole owner of the trademark.The franchise was created by Satoshi Tajiri in 1995, and is centered on fictional creatures called \"Pokémon\", which humans, known as Pokémon Trainers, catch and train to battle each other for sport.The English slogan for the franchise is \"Gotta Catch 'Em All\".Works within the franchise are set in the Pokémon universe.",

}


onload = function (text) {
    document.getElementById("index-paragraph1").appendChild(document.createTextNode(text.paragraph1));
}

    (articleObject);