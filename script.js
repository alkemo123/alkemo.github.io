const films = [
    {
        title: "Drake & Josh Go Hollywood",
        summary: "Drake et Josh se retrouvent accidentellement à Hollywood.",
        image: "https://tse2.mm.bing.net/th?id=OIP.iYoLkKYrhCcWIDpBhgsKxgHaLH&pid=Api",
        url: "https://www.imdb.com/title/tt0844409/"
    },
    {
        title: "Blurt",
        summary: "Un film comique sur des aventures inattendues.",
        image: "https://tse2.mm.bing.net/th?id=OIP.Nei9DMtglSxHCGP03Tk6vwHaLG&pid=Api",
        url: "https://www.imdb.com/title/tt3733124/"
    },
    {
        title: "Rufus",
        summary: "Un chien se transforme en humain et vit des aventures.",
        image: "https://tse2.mm.bing.net/th?id=OIP.vd9VAuy1bVrR5IL8QGidjQAAAA&pid=Api",
        url: "https://www.imdb.com/title/tt2193081/"
    },
    {
        title: "The Boy Who Cried Werewolf",
        summary: "Une jeune fille découvre qu'elle est un loup-garou.",
        image: "https://tse3.mm.bing.net/th?id=OIP.a681QiBOr6983X_43eM9pAHaLH&pid=Api",
        url: "https://www.imdb.com/title/tt1584622/"
    },
    {
        title: "Best Player",
        summary: "Deux joueurs professionnels s'affrontent dans un jeu vidéo.",
        image: "https://tse1.mm.bing.net/th?id=OIP.-fmwFQQ4UUfvwiqIfgRrZgHaLH&pid=Api",
        url: "https://www.imdb.com/title/tt1698987/"
    },
    {
        title: "Rags",
        summary: "Une version moderne de Cendrillon avec un garçon.",
        image: "https://tse1.mm.bing.net/th?id=OIP.1LewGkse3ORRv9dYWEKBXgHaLH&pid=Api",
        url: "https://www.imdb.com/title/tt2350587/"
    },
    {
        title: "Nicky Deuce",
        summary: "Un adolescent passe l'été avec son oncle mafieux.",
        image: "https://tse3.mm.bing.net/th?id=OIP.0ARS2nkXg6qfnTViTl3T6wAAAA&pid=Api",
        url: "https://www.imdb.com/title/tt2584118/"
    },
    {
        title: "Swindle",
        summary: "Un groupe d'amis planifie un cambriolage pour récupérer une carte de baseball rare.",
        image: "https://tse1.mm.bing.net/th?id=OIP.bTy8JzHId0b_BnZhHYLd6AHaLH&pid=Api",
        url: "https://www.imdb.com/title/tt2752750/"
    },
    {
        title: "Splitting Adam",
        summary: "Un adolescent découvre comment se cloner.",
        image: "https://tse4.mm.bing.net/th?id=OIP.VLq3xPDY2i5wCuzw2PLWgAHaLH&pid=Api",
        url: "https://www.imdb.com/title/tt4653418/"
    },
    {
        title: "One Crazy Cruise",
        summary: "Une famille recomposée vit une croisière chaotique.",
        image: "https://tse4.mm.bing.net/th?id=OIP.9McUifUuP5R_aSX4teoMwAHaLH&pid=Api",
        url: "https://www.imdb.com/title/tt3171450/"
    },
    {
        title: "Rufus 2",
        summary: "Le chien Rufus continue ses aventures en tant qu'humain.",
        image: "https://tse2.mm.bing.net/th?id=OIP.PqkAkcr9N1fvps6KUrzf-wHaLH&pid=Api",
        url: "https://www.imdb.com/title/tt4688018/"
    },
    {
        title: "Bixler High Private Eye",
        summary: "Un adolescent détective enquête sur la disparition de son père.",
        image: "https://tse1.mm.bing.net/th?id=OIP.tXpCK030gOC5bm_0r8VroQHaLH&pid=Api",
        url: "https://www.imdb.com/title/tt1695379/"
    },
    {
        title: "Lost in the West",
        summary: "Deux frères voyagent dans le temps jusqu'au Far West.",
        image: "https://tse2.mm.bing.net/th?id=OIP.cST1iQeFQGSU0fbJ12ZF4QHaK9&pid=Api",
        url: "https://www.imdb.com/title/tt4421884/"
    }
];

function displayFilms() {
    const filmList = document.getElementById('film-list');
    films.forEach(film => {
        const filmElement = document.createElement('div');
        filmElement.classList.add('film');
        
        filmElement.innerHTML = `
            <a href="${film.url}" target="_blank">
                <img src="${film.image}" alt="${film.title}">
            </a>
            <h2>${film.title}</h2>
            <p>${film.summary}</p>
        `;
        
        filmList.appendChild(filmElement);
    });
}

// Appeler la fonction pour afficher les films
displayFilms();
