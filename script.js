const films = [
    {
        title: "Drake & Josh Go Hollywood",
        summary: "Drake et Josh se retrouvent accidentellement à Hollywood.",
        image: "https://www.google.com/imgres?q=https%3A%2F%2Fexample.com%2Fimages%2Fdrake_and_josh_go_hollywood.jpg&imgurl=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FM%2FMV5BMTUwNTgyMzcwMF5BMl5BanBnXkFtZTgwNTA5OTkwMzE%40._V1_QL75_UX480_.jpg&imgrefurl=https%3A%2F%2Fwww.imdb.com%2Ftitle%2Ftt0492878%2Fmediaindex%2F&docid=l9lxDl2_y3hxEM&tbnid=3seKmpj4q0xm6M&vet=12ahUKEwj5ld-amLKKAxU3yLsIHQlCKlsQM3oECEcQAA..i&w=480&h=360&hcb=2&ved=2ahUKEwj5ld-amLKKAxU3yLsIHQlCKlsQM3oECEcQAA
    },
    {
        title: "Blurt",
        summary: "Un film comique sur des aventures inattendues.",
        image: "https://www.google.com/imgres?q=Blurt!%20film&imgurl=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F81p5%2BhJ0U2L._AC_UF894%2C1000_QL80_.jpg&imgrefurl=https%3A%2F%2Fwww.amazon.nl%2FBlurt-DVD%2Fdp%2FB07G5NCTFQ&docid=oo6-FIxOVJjFTM&tbnid=H4CwWpFx_53ANM&vet=12ahUKEwiTurunmbKKAxUl7rsIHQVtDSkQM3oECEsQAA..i&w=707&h=1000&hcb=2&ved=2ahUKEwiTurunmbKKAxUl7rsIHQVtDSkQM3oECEsQAA
    },
    {
        title: "Rufus",
        summary: "Un chien se transforme en humain et vit des aventures.",
        image: "https://www.google.com/imgres?q=Rufus%20film&imgurl=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FM%2FMV5BY2UwZjY0MjYtODJmNS00MGVkLWIyYzEtMDgyY2ZjOWY5NTQyXkEyXkFqcGc%40._V1_.jpg&imgrefurl=https%3A%2F%2Fwww.imdb.com%2Ftitle%2Ftt4648586%2F&docid=IUMjfp4_Xk_DTM&tbnid=YUlK1HKbCv5S-M&vet=12ahUKEwjZ1NbDmbKKAxVBhf0HHYauAA0QM3oECBcQAA..i&w=480&h=720&hcb=2&ved=2ahUKEwjZ1NbDmbKKAxVBhf0HHYauAA0QM3oECBcQAA
    },
    {
        title: "The Boy Who Cried Werewolf",
        summary: "Une jeune fille découvre qu'elle est un loup-garou.",
        image: "https://www.google.com/imgres?q=The%20Boy%20Who%20Cried%20Werewolf&imgurl=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FM%2FMV5BZGY1Zjc2NWQtNzMyNy00MDdkLWJkOWEtMjk5NGVjOTc3YjkwXkEyXkFqcGc%40._V1_.jpg&imgrefurl=https%3A%2F%2Fwww.imdb.com%2Ftitle%2Ftt1451423%2F&docid=BSHYgrWHgKLphM&tbnid=6ti85AixfDUjuM&vet=12ahUKEwiwm6HSmbKKAxWBhv0HHX5aEyUQM3oECBsQAA..i&w=700&h=1000&hcb=2&ved=2ahUKEwiwm6HSmbKKAxWBhv0HHX5aEyUQM3oECBsQAA
    },
    {
        title: "Best Player",
        summary: "Deux joueurs professionnels s'affrontent dans un jeu vidéo.",
        image: "https://www.google.com/imgres?q=Best%20Player%20film&imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fen%2F8%2F83%2FBestPlayerPoster.jpg&imgrefurl=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FBest_Player&docid=TgNCdpUvFd-NhM&tbnid=cszhX0Wc6rU9uM&vet=12ahUKEwiHv-LembKKAxWo7rsIHSQFDJgQM3oECBUQAA..i&w=263&h=395&hcb=2&ved=2ahUKEwiHv-LembKKAxWo7rsIHSQFDJgQM3oECBUQAA
    },
    {
        title: "Rags",
        summary: "Une version moderne de Cendrillon avec un garçon.",
        image:" https://www.google.com/imgres?q=rags%20film&imgurl=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FM%2FMV5BM2E4M2YxMjYtOWQ5Ny00N2Y1LWJmMGYtODc1MTZlOWVkMTgxXkEyXkFqcGc%40._V1_.jpg&imgrefurl=https%3A%2F%2Fwww.imdb.com%2Ftitle%2Ftt1910605%2F&docid=Xl32j7oFxtTVAM&tbnid=WDx6wImUAeSrjM&vet=12ahUKEwi3m-HombKKAxU2g_0HHfAfATMQM3oECBYQAA..i&w=800&h=1200&hcb=2&ved=2ahUKEwi3m-HombKKAxU2g_0HHfAfATMQM3oECBYQAA
    },
    {
        title: "Nicky Deuce",
        summary: "Un adolescent passe l'été avec son oncle mafieux.",
        image: "https://www.google.com/imgres?q=Nicky%20Deuce&imgurl=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FM%2FMV5BMTQ2NjQxNjYyMV5BMl5BanBnXkFtZTgwNTcxNjAxMzE%40._V1_.jpg&imgrefurl=https%3A%2F%2Fwww.imdb.com%2Ftitle%2Ftt2312862%2F&docid=8QCbZwPAKjBClM&tbnid=V7hrGKGNkowOoM&vet=12ahUKEwi1gP72mbKKAxV5_7sIHV3EEfwQM3oECBwQAA..i&w=333&h=500&hcb=2&ved=2ahUKEwi1gP72mbKKAxV5_7sIHV3EEfwQM3oECBwQAA
    },
    {
        title: "Swindle",
        summary: "Un groupe d'amis planifie un cambriolage pour récupérer une carte de baseball rare.",
        image: "https://www.google.com/imgres?q=Swindle&imgurl=https%3A%2F%2Fstatic.wikia.nocookie.net%2Farianagrande%2Fimages%2F4%2F40%2FSwindle_Poster.jpg%2Frevision%2Flatest%3Fcb%3D20221225225746&imgrefurl=https%3A%2F%2Farianagrande.fandom.com%2Fwiki%2FSwindle&docid=msUGsxW-Z67vZM&tbnid=Y42TZjTctgBzNM&vet=12ahUKEwiH_JGGmrKKAxVI9LsIHbESEvUQM3oECBoQAA..i&w=1200&h=1800&hcb=2&ved=2ahUKEwiH_JGGmrKKAxVI9LsIHbESEvUQM3oECBoQAA
    },
    {
        title: "Splitting Adam",
        summary: "Un adolescent découvre comment se cloner.",
        image: "https://www.google.com/imgres?q=Splitting%20Adam&imgurl=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FM%2FMV5BZTQ2MWM3OTAtNzhjMi00OTU5LTk5MDktZDI3N2MzOWY4NWIxXkEyXkFqcGc%40._V1_.jpg&imgrefurl=https%3A%2F%2Fwww.imdb.com%2Ftitle%2Ftt3712822%2F&docid=W8RHD1Pyacsn8M&tbnid=v8marG2dC_NCCM&vet=12ahUKEwiLlvyVmrKKAxU2gv0HHcHROhsQM3oECBgQAA..i&w=960&h=1440&hcb=2&ved=2ahUKEwiLlvyVmrKKAxU2gv0HHcHROhsQM3oECBgQAA"
    },
    {
        title: "One Crazy Cruise",
        summary: "Une famille recomposée vit une croisière chaotique.",
        image:" https://www.google.com/imgres?q=One%20Crazy%20Cruise&imgurl=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FM%2FMV5BYWMyNjEwMjEtZGRiNC00OThjLWFjMmUtNzE4ODk0Nzc0ZWQyXkEyXkFqcGc%40._V1_.jpg&imgrefurl=https%3A%2F%2Fwww.imdb.com%2Ftitle%2Ftt4058572%2F&docid=jaLY35ah8rIwbM&tbnid=sB3WJgWwv8ndQM&vet=12ahUKEwiX8JSjmrKKAxWuh_0HHSTILO0QM3oECBsQAA..i&w=338&h=480&hcb=2&ved=2ahUKEwiX8JSjmrKKAxWuh_0HHSTILO0QM3oECBsQAA
    },
    {
        title: "Rufus 2",
        summary: "Le chien Rufus continue ses aventures en tant qu'humain.",
        image: "https://www.google.com/imgres?q=Rufus%202&imgurl=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FM%2FMV5BZGRkMGM5ZDktMjNmZS00OTZjLTllYzYtOWFmMWM0NmVkNDUxXkEyXkFqcGc%40._V1_FMjpg_UX1000_.jpg&imgrefurl=https%3A%2F%2Fwww.imdb.com%2Ftitle%2Ftt5687968%2F&docid=V4rEi5tN-bDw_M&tbnid=MtcCvb7WknwdwM&vet=12ahUKEwiYjeWsmrKKAxU0iv0HHQkuInYQM3oECBoQAA..i&w=1000&h=1332&hcb=2&ved=2ahUKEwiYjeWsmrKKAxU0iv0HHQkuInYQM3oECBoQAA
    },
    {
        title: "Bixler High Private Eye",
        summary: "Un adolescent détective enquête sur la disparition de son père.",
        image: "https://www.google.com/imgres?q=Bixler%20High%20Private%20Eye&imgurl=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FM%2FMV5BNTI5NzQzNjEtM2FhZS00NzliLWE2OWMtNmEyNTA3ZTYwYmRlXkEyXkFqcGc%40._V1_FMjpg_UX1000_.jpg&imgrefurl=https%3A%2F%2Fwww.imdb.com%2Ftitle%2Ftt9173364%2F&docid=wHyl0_8AUKrLBM&tbnid=E0p7jEb_yvnlwM&vet=12ahUKEwi4r7-3mrKKAxX6hv0HHVw1FEUQM3oECBwQAA..i&w=1000&h=1249&hcb=2&ved=2ahUKEwi4r7-3mrKKAxX6hv0HHVw1FEUQM3oECBwQAA
    },
    {
        title: "Lost in the West",
        summary: "Deux frères voyagent dans le temps jusqu'au Far West.",
        image: "https://www.google.com/imgres?q=Lost%20in%20the%20West%22&imgurl=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FM%2FMV5BZjA5YTc0NTctNmM2Zi00YmFkLTgxMmEtY2Y4OTdjNDY1ZjliXkEyXkFqcGc%40._V1_.jpg&imgrefurl=https%3A%2F%2Fwww.imdb.com%2Ftitle%2Ftt5742780%2F&docid=HKQevKPiTAvs8M&tbnid=85TZ4zwJXTVKSM&vet=12ahUKEwiA3tvUmrKKAxVs2wIHHYzbLzUQM3oECBYQAA..i&w=680&h=1000&hcb=2&ved=2ahUKEwiA3tvUmrKKAxVs2wIHHYzbLzUQM3oECBYQAA
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
