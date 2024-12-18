const films = [
    {
        title: "Drake & Josh Go Hollywood",
        summary: "Drake et Josh se retrouvent accidentellement à Hollywood.",
        image: "https://tse2.mm.bing.net/th?id=OIP.iYoLkKYrhCcWIDpBhgsKxgHaLH&pid=Api"
    },
    {
        title: "Blurt",
        summary: "Un film comique sur des aventures inattendues.",
        image: "https://tse2.mm.bing.net/th?id=OIP.Nei9DMtglSxHCGP03Tk6vwHaLG&pid=Api"
    },
    // Ajoutez les autres films ici...
];

function displayFilms(filter = "") {
    const filmList = document.getElementById('film-list');
    filmList.innerHTML = ""; // Réinitialiser la liste

    films
        .filter(film => film.title.toLowerCase().includes(filter.toLowerCase())) // Filtrage par recherche
        .forEach(film => {
            const filmElement = document.createElement('div');
            filmElement.classList.add('film');
            
            filmElement.innerHTML = `
                <img src="${film.image}" alt="${film.title}" class="film-image">
                <h2>${film.title}</h2>
                <p>${film.summary}</p>
            `;

            // Ajouter un gestionnaire de clic à l'image
            const imageElement = filmElement.querySelector('.film-image');
            imageElement.addEventListener('click', () => {
                showModal(film);
            });

            filmList.appendChild(filmElement);
        });
}

function showModal(film) {
    const modal = document.getElementById('film-modal');
    document.getElementById('modal-title').innerText = film.title;
    document.getElementById('modal-image').src = film.image;
    document.getElementById('modal-summary').innerText = film.summary;

    modal.classList.remove('hidden');
}

function hideModal() {
    const modal = document.getElementById('film-modal');
    modal.classList.add('hidden');
}

// Gérer la recherche
document.getElementById('search-bar').addEventListener('input', (e) => {
    displayFilms(e.target.value);
});

// Gérer la fermeture de la modale
document.getElementById('close-modal').addEventListener('click', hideModal);

// Initialiser l'affichage des films
displayFilms();
