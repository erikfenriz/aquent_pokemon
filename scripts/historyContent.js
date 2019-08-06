var articleObject = {
    paragraph1:
        "The franchise began as Pokémon Red and Green(later released outside of Japan as Pokémon Red and Blue), a pair of video games for the original Game Boy that were developed by Game Freak and published by Nintendo in February 1996. It soon became a media mix franchise adapted into various different media. Pokémon has since gone on to become the highest- grossing media franchise of all time, with $90 billion in total franchise revenue. The original video game series is the second best - selling video game franchise(behind Nintendo's Mario franchise) with more than 340 million copies sold and 1 billion mobile downloads, and it spawned a hit anime television series that has become the most successful video game adaptation with over 20 seasons and 1,000 episodes in 169 countries. In addition, the Pokémon franchise includes the world's top - selling toy brand, the top - selling trading card game with over 27.2 billion cards sold, an anime film series, a live - action film, books, manga comics, music, merchandise, and a theme park.The franchise is also represented in other Nintendo media, such as the Super Smash Bros.series.",
    paragraph2:
        "In November 2005, 4Kids Entertainment, which had managed the non-game related" +
        "licensing of Pokémon," +
        "announced that it" +
        "had agreed not to renew the Pokémon representation agreement.The Pokémon Company International oversees" +
        "all Pokémon" +
        "licensing outside Asia.The franchise celebrated its tenth anniversary in 2006. In 2016, The" +
        "Pokémon Company" +
        "celebrated Pokémon's 20th anniversary by airing an ad during Super Bowl 50 in January, issuing" +
        "re - releases of Pokémon" +
        "Red and Blue and the 1998 Game Boy game Pokémon Yellow as downloads for the Nintendo 3DS in February," +
        "and redesigning" +
        "the way the games are played.The mobile augmented reality game Pokémon Go was released in" +
        "July.The most" +
        "recently released games in the main series, Pokémon: Let's Go, Pikachu! and Let's Go, Eevee!, were" +
        "released worldwide on" +
        "the Nintendo Switch on November 16, 2018. The first live- action film in the franchise, Pokémon Detective" +
        "Pikachu, based" +
        "on Detective Pikachu, was released in 2019. The upcoming and latest games in the main series," +
        "Pokémon Sword and" +
        "Shield, are scheduled to be released worldwide on the Nintendo Switch in late 2019."
}


onload = function (text) {
    document.getElementById("history1").appendChild(document.createTextNode(text.paragraph1));
    document.getElementById("history2").appendChild(document.createTextNode(text.paragraph2));
}(articleObject);



