const films = [
    {
        title: "Drake & Josh Go Hollywood",
        summary: "Drake et Josh se retrouvent accidentellement à Hollywood.",
        image: "https://via.placeholder.com/150"
    },
    {
        title: "Blert",
        summary: "Un film comique sur des aventures inattendues.",
        image: "https://via.placeholder.com/150"
    },
    {
        title: "Rufus",
        summary: "Un chien se transforme en humain et vit des aventures.",
        image: "https://via.placeholder.com/150"
    },
    {
        title: "The Boy Who Cried Werewolf",
        summary: "Une jeune fille découvre qu'elle est un loup-garou.",
        image: "https://via.placeholder.com/150"
    },
    {
        title: "Best Player",
        summary: "Deux joueurs professionnels s'affrontent dans un jeu vidéo.",
        image: "https://via.placeholder.com/150"
    },
    {
        title: "Rags",
        summary: "Une version moderne de Cendrillon avec un garçon.",
        image: "https://via.placeholder.com/150"
    },
    {
        title: "Nicky Deuce",
        summary: "Un adolescent passe l'été avec son oncle mafieux.",
        image: "https://via.placeholder.com/150"
    },
    {
        title: "Swindle",
        summary: "Un groupe d'amis planifie un cambriolage pour récupérer une carte de baseball rare.",
        image: "https://via.placeholder.com/150"
    },
    {
        title: "Splitting Adam",
        summary: "Un adolescent découvre comment se cloner.",
        image: "https://via.placeholder.com/150"
    },
    {
        title: "One Crazy Cruise",
        summary: "Une famille recomposée vit une croisière chaotique.",
        image: "https://via.placeholder.com/150"
    },
    {
        title: "Rufus 2",
        summary: "Le chien Rufus continue ses aventures en tant qu'humain.",
        image: "https://via.placeholder.com/150"
    },
    {
        title: "Bixler High Private Eye",
        summary: "Un adolescent détective enquête sur la disparition de son père.",
        image: "https://via.placeholder.com/150"
    },
    {
        title: "Lost in the West",
        summary: "Deux frères voyagent dans le temps jusqu'au Far West.",
        image: "https://via.placeholder.com/150"
    }
];

function displayFilms() {
    const filmList = document.getElementById('film-list');
    films.forEach(film => {
        const filmElement = document.createElement('div');
        filmElement.classList.add('film');
        
        filmElement.innerHTML = `
            <img src="${film.image}" alt="${film.title}">
            <h2>${film.title}</h2>
            <p>${film.summary}</p>
        `;
        
        filmList.appendChild(filmElement);
    });
}

// Appeler la fonction pour afficher les films
displayFilms();
