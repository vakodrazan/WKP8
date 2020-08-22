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

    // Take the value from each input in the form
    const form = e.currentTarget;
    const newSong = {
        title: form.title.value,
        name: form.name.value,
        style: form.style.value,
        length: form.length.value,
        picture: form.picture.value,
        id: Date.now(),
    }

    // push the new values from the form into the original array
    songs.push(newSong);
    songList.dispatchEvent(new CustomEvent('updateNewSong'));
    // listOfSong();
    form.reset(); // reset the form after submit the result
}

// Create a local storage to store
const songLocalStorage = () => {
    // get the original array
    const songLst = JSON.parse(localStorage.getItem('songs'));

    // if there is value inside of the object then return it
    if (songLst) {
        songs = songLst;
    }
    songList.dispatchEvent(new CustomEvent('updateNewSong'));
}

const updateNewLocalStorageSong = () => {
    // Stringify the object inside of an array
    localStorage.setItem('songs', JSON.stringify(songs));
};

// Listen to the event when submitting the form
formSong.addEventListener('submit', handleSubmitBtn);
// listen to the dispatch event 
songList.addEventListener('updateNewSong', listOfSong);
songList.addEventListener('updateNewSong', updateNewLocalStorageSong);



songLocalStorage();