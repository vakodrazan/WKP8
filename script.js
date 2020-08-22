let songs = [
    {
        title: "Burn Ship",
        name: "For King and Country",
        style: 'Pop',
        length: "‎3min 40sec",
        picture: 'https://bit.ly/2QdMqcK',
        id: 1598075205144,
    },
    {
        title: "Everything",
        name: "TobyMack",
        style: 'Gospel',
        length: "3min 21sec",
        picture: 'https://bit.ly/3hnoFuT',
        id: 1598076404946,
    },
    {
        title: "God only knows",
        name: "For King and Country",
        style: 'Pop',
        length: "3min 49sec",
        picture: 'https://bit.ly/3lfvb9B',
        id: 1598076425391,
    },
];


const songList = document.querySelector('.list');

const listOfSong = () => {
    const myHtml = songs
        .map(song => {
            return `
                <div class="artist">
                    <img src="${song.picture}" alt="">
                    <div class="musician">
                        <span>${song.title}</span>
                        <small>${song.style}</small>
                    </div>
                    <div class="musician">
                        <span>${song.name}</span>
                        <small>${song.length}</small>
                    </div>
                    <div class="score">
                        <span>Score: </span>
                        <button class="updateScore">+1</button>
                    </div>
                    <button class="delete">
                        <img src="./assets/trash.svg" alt="">
                    </button>
                </div>
            `
        })
        .join('');
    songList.innerHTML = myHtml;
}

listOfSong();