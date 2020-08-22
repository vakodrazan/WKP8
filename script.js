let songs = [];


const songList = document.querySelector('.list');
const formSong = document.querySelector('.formSong');

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

const handleSubmitBtn = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const newSong = {
        title: form.title.value,
        name: form.name.value,
        style: form.style.value,
        length: form.length.value,
        picture: form.picture.value,
        id: Date.now(),
    }

    songs.push(newSong);
    listOfSong();
    form.reset();
}


formSong.addEventListener('submit', handleSubmitBtn);