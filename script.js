// console.log("Welcome to RYTHM");

// let songIndex = 0;
// let audioElement = new Audio("songs/1.mp3");
// let masterPlay = document.getElementById("masterPlay");
// let myProgressBar = document.getElementById("myProgressBar");
// let gif = document.getElementById("gif");
// let masterSongName = document.getElementById("masterSongName");
// let songItemContainer = document.querySelector(".songItemContainer");

// let songs = [
//     { songName: "In Dino - Pritam", filePath: "songs/1.mp3", coverPath: "covers/1.jpg" },
//     { songName: "Jeena Jeena - Jubin Nautiyal", filePath: "songs/2.mp3", coverPath: "covers/2.jpg" },
//     { songName: "Dil Kyun Ye Mera - KK", filePath: "songs/3.mp3", coverPath: "covers/3.jpg" },
//     { songName: "Ajab Si - KK", filePath: "songs/4.mp3", coverPath: "covers/4.jpg" },
//     { songName: "Darkhast - Arijit Singh", filePath: "songs/5.mp3", coverPath: "covers/5.jpg" },
//     { songName: "Tere Naina - Shankar Mahadevan", filePath: "songs/6.mp3", coverPath: "covers/6.jpg" },
//     { songName: "Phir Mohabbat - Murder 2", filePath: "songs/7.mp3", coverPath: "covers/7.jpg" },
//     { songName: "Teri Deewani - Kailash Kher", filePath: "songs/8.mp3", coverPath: "covers/8.jpg" },
//     { songName: "Tera Chehra - Adnan Sami", filePath: "songs/9.mp3", coverPath: "covers/9.jpg" },
//     { songName: "Ye Tune Kya Kiya - Pritam", filePath: "songs/10.mp3", coverPath: "covers/10.jpg" }
// ];

// // Load first song name
// masterSongName.innerText = songs[0].songName;

// // Create song items
// songs.forEach((song, i) => {
//     let songItem = document.createElement("div");
//     songItem.className = "songItem";
//     songItem.innerHTML = `
//       <img src="${song.coverPath}" alt="${i + 1}" />
//       <span class="songName">${song.songName}</span>
//       <span class="songlistplay">
//         <i id="${i}" class="far songItemPlay fa-play-circle"></i>
//       </span>
//     `;
//     songItemContainer.appendChild(songItem);

//     // attach event listener here
//     songItem.querySelector(".songItemPlay").addEventListener("click", (e) => {
//         makeAllPlays();
//         songIndex = parseInt(e.target.id);
//         audioElement.src = songs[songIndex].filePath;
//         masterSongName.innerText = songs[songIndex].songName;
//         audioElement.currentTime = 0;
//         audioElement.play();
//         gif.style.opacity = 1;
//         masterPlay.classList.replace("fa-play-circle", "fa-pause-circle");
//         e.target.classList.replace("fa-play-circle", "fa-pause-circle");
//     });
// });

// // Reset all play icons
// const makeAllPlays = () => {
//     document.querySelectorAll(".songItemPlay").forEach((el) => {
//         el.classList.replace("fa-pause-circle", "fa-play-circle");
//     });
// };

// // Master play button
// masterPlay.addEventListener("click", () => {
//     if (audioElement.paused || audioElement.currentTime <= 0) {
//         audioElement.play();
//         masterPlay.classList.replace("fa-play-circle", "fa-pause-circle");
//         gif.style.opacity = 1;
//     } else {
//         audioElement.pause();
//         masterPlay.classList.replace("fa-pause-circle", "fa-play-circle");
//         gif.style.opacity = 0;
//     }
// });

// // Progress bar
// audioElement.addEventListener("timeupdate", () => {
//     if (audioElement.duration) {
//         myProgressBar.value = parseInt((audioElement.currentTime / audioElement.duration) * 100);
//     }
// });

// myProgressBar.addEventListener("change", () => {
//     audioElement.currentTime = (myProgressBar.value * audioElement.duration) / 100;
// });

// // Next/Previous
// document.getElementById("next").addEventListener("click", () => {
//     songIndex = (songIndex + 1) % songs.length;
//     audioElement.src = songs[songIndex].filePath;
//     masterSongName.innerText = songs[songIndex].songName;
//     audioElement.currentTime = 0;
//     audioElement.play();
//     masterPlay.classList.replace("fa-play-circle", "fa-pause-circle");
// });

// document.getElementById("previous").addEventListener("click", () => {
//     songIndex = (songIndex - 1 + songs.length) % songs.length;
//     audioElement.src = songs[songIndex].filePath;
//     masterSongName.innerText = songs[songIndex].songName;
//     audioElement.currentTime = 0;
//     audioElement.play();
//     masterPlay.classList.replace("fa-play-circle", "fa-pause-circle");
// });


// script.js — reliable player controller
document.addEventListener("DOMContentLoaded", () => {
    const songs = [
        { songName: "In Dino - Pritam", filePath: "songs/1.mp3", coverPath: "covers/1.jpg" },
        { songName: "Jeena Jeena - Jubin Nautiyal", filePath: "songs/2.mp3", coverPath: "covers/2.jpg" },
        { songName: "Dil Kyun Ye Mera - KK", filePath: "songs/3.mp3", coverPath: "covers/3.jpg" },
        { songName: "Ajab Si - KK", filePath: "songs/4.mp3", coverPath: "covers/4.jpg" },
        { songName: "Darkhast - Arijit Singh", filePath: "songs/5.mp3", coverPath: "covers/5.jpg" },
        { songName: "Tere Naina - Shankar Mahadevan", filePath: "songs/6.mp3", coverPath: "covers/6.jpg" },
        { songName: "Phir Mohabbat - Murder 2", filePath: "songs/7.mp3", coverPath: "covers/7.jpg" },
        { songName: "Teri Deewani - Kailash Kher", filePath: "songs/8.mp3", coverPath: "covers/8.jpg" },
        { songName: "Tera Chehra - Adnan Sami", filePath: "songs/9.mp3", coverPath: "covers/9.jpg" },
        { songName: "Ye Tune Kya Kiya - Pritam", filePath: "songs/10.mp3", coverPath: "covers/10.jpg" }
    ];

    // Elements
    const songButtons = Array.from(document.querySelectorAll(".songItemPlay"));
    const masterPlay = document.getElementById("masterPlay");
    const prevBtn = document.getElementById("previous");
    const nextBtn = document.getElementById("next");
    const progressBar = document.getElementById("myProgressBar");
    const gif = document.getElementById("gif");
    const masterSongName = document.getElementById("masterSongName");
    const playerCover = document.getElementById("playerCover");
    const playerTitle = document.getElementById("playerTitle");

    // Audio
    const audio = new Audio();
    let currentIndex = null; // null until a song is selected

    // Helper: update list buttons visuals
    function refreshListButtons() {
        songButtons.forEach(btn => {
            const idx = Number(btn.dataset.index);
            if (idx === currentIndex && !audio.paused) btn.textContent = "⏸";
            else btn.textContent = "▶";
        });
    }

    // Load and optionally play
    function loadSong(index, play = true) {
        if (index < 0 || index >= songs.length) return;
        currentIndex = index;
        audio.src = songs[index].filePath;
        playerCover.src = songs[index].coverPath;
        playerTitle.textContent = songs[index].songName;
        masterSongName.textContent = songs[index].songName;
        audio.currentTime = 0;

        // Play — this will succeed because it was triggered by a user gesture (button click)
        if (play) {
            audio.play().catch(err => {
                console.warn("Playback prevented:", err);
            });
        }
        refreshListButtons();
    }

    // List item clicks
    songButtons.forEach(btn => {
        btn.addEventListener("click", (e) => {
            const idx = Number(btn.dataset.index);
            // if same song and playing -> pause. If same song and paused -> play.
            if (currentIndex === idx) {
                if (audio.paused) {
                    audio.play();
                } else {
                    audio.pause();
                }
            } else {
                loadSong(idx, true);
            }
            refreshListButtons();
        });
    });

    // Master play/pause
    masterPlay.addEventListener("click", () => {
        if (!audio.src) {
            // no song chosen yet -> load first
            loadSong(0, true);
            masterPlay.textContent = "⏸";
            gif.style.opacity = 1;
            return;
        }
        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
        }
    });

    // Prev/Next
    prevBtn.addEventListener("click", () => {
        if (currentIndex === null) { loadSong(0, true); return; }
        const nextIndex = (currentIndex - 1 + songs.length) % songs.length;
        loadSong(nextIndex, true);
    });
    nextBtn.addEventListener("click", () => {
        if (currentIndex === null) { loadSong(0, true); return; }
        const nextIndex = (currentIndex + 1) % songs.length;
        loadSong(nextIndex, true);
    });

    // Audio events
    audio.addEventListener("play", () => {
        masterPlay.textContent = "⏸";
        gif.style.opacity = 1;
        refreshListButtons();
    });
    audio.addEventListener("pause", () => {
        masterPlay.textContent = "▶";
        gif.style.opacity = 0;
        refreshListButtons();
    });
    audio.addEventListener("timeupdate", () => {
        if (audio.duration && !isNaN(audio.duration)) {
            progressBar.value = (audio.currentTime / audio.duration) * 100;
        } else {
            progressBar.value = 0;
        }
    });
    audio.addEventListener("ended", () => {
        // move to next automatically
        const nextIndex = (currentIndex + 1) % songs.length;
        loadSong(nextIndex, true);
    });
    audio.addEventListener("loadedmetadata", () => {
        // make sure progress is zeroed when metadata loads
        progressBar.value = 0;
    });
    audio.addEventListener("error", (e) => {
        console.error("Audio error:", e);
        alert("Could not play the selected audio file. Check that the file exists and the path is correct.");
    });

    // Seek
    progressBar.addEventListener("input", () => {
        if (!audio.duration || isNaN(audio.duration)) return;
        audio.currentTime = (progressBar.value / 100) * audio.duration;
    });

    // Initialize UI state
    refreshListButtons();
});
