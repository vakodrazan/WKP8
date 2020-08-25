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
                    <span>Score: ${song.score}</span>
                    <button 
                        data-id="${song.id}" 
                        aria-label="Update the score of the song ${song.title} by the artist ${song.name}" 
                        class="updateScore"
                    >+1
                    </button>
                    <button 
                        data-id="${song.id}" 
                        aria-label="Delete song ${song.title} by the artist ${song.name}" 
                        class="delete">
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
        score: 0,
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

    // sort the list from the highest score to the lowest score
    songLst.sort(function(a, b) {
        return b.score - a.score;
    })
    songList.dispatchEvent(new CustomEvent('updateNewSong'));
}


const updateNewLocalStorageSong = () => {
    // Stringify the object inside of an array
    localStorage.setItem('songs', JSON.stringify(songs));
};


const handleClickBtns = e =>{
    // Update the score of the artist when clicking +1 button
    const updateScoreBtn = e.target.closest('button.updateScore');
    if (updateScoreBtn) {
        const id = Number(updateScoreBtn.dataset.id);
        updateScore(id);
    }

    const deleteBtn = e.target.closest("button.delete");
    // Make sure that the id is a number then remove it
    if (deleteBtn) {
        const id = Number(deleteBtn.dataset.id);
        deleteSong(id)
    }
}

const updateScore = id => {
    const songScore = songs.find(song => song.id === id);
    songScore.score ++;
    songList.dispatchEvent(new CustomEvent('updateNewSong'));
}

const deleteSong = idDeleteSong => {
    // check if the the id is equal to id then delete if not just leave it there
    songs = songs.filter(song => song.id !== idDeleteSong);
    songList.dispatchEvent(new CustomEvent('updateNewSong'));
}


// Listen to the event when submitting the form
formSong.addEventListener('submit', handleSubmitBtn);
// listen to the dispatch event 
songList.addEventListener('updateNewSong', listOfSong);
songList.addEventListener('updateNewSong', updateNewLocalStorageSong);
songList.addEventListener('click', handleClickBtns);


songLocalStorage();