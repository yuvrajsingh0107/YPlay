const songData = [
  {
    "id": "1",
    "title": "Bollywood Chillout",
    "description": "Relaxing Hindi melodies & unplugged vibes",
    "coverImage": "./assets/images/bollywood central.jpeg",
    "songs": [
      { "title": "Shayad", "artist": "Arijit Singh" },
      { "title": "Tum Mile", "artist": "Neeraj Shridhar" },
      { "title": "Dil Diyan Gallan", "artist": "Neha Bhasin" },
      { "title": "Vaaste", "artist": "Dhvani Bhanushali" },
      { "title": "Main Agar Kahoon", "artist": "Sonu Nigam, Shreya Ghoshal" },
      { "title": "Tu Hi Hai", "artist": "Arijit Singh" },
      { "title": "Agar Tum Saath Ho", "artist": "Alka Yagnik, Arijit Singh" },
      { "title": "Raatan Lambiyan", "artist": "Jubin Nautiyal, Asees Kaur" },
      { "title": "Kesariya", "artist": "Arijit Singh" },
    ]
  },
  {
    "id": "2",
    "title": "Desi Party Bangers",
    "description": "Hindi + Punjabi club vibes with English mix",
    "coverImage": "https://images.unsplash.com/photo-1544785349-c4a5301826fd?auto=format&fit=crop&w=800&q=80",
    "songs": [
      { "title": "Brown Munde", "artist": "AP Dhillon, Gurinder Gill" },
      { "title": "Kala Chashma", "artist": "Badshah, Neha Kakkar" },
      { "title": "Mi Gente", "artist": "J Balvin, Willy William" },
      { "title": "Bijlee Bijlee", "artist": "Harrdy Sandhu" },
      { "title": "Tera Baap Aaya", "artist": "Farhad Bhiwandiwala" },
      { "title": "Señorita", "artist": "Shawn Mendes, Camila Cabello" },
      { "title": "Excuses", "artist": "AP Dhillon" },
      { "title": "Coca Cola", "artist": "Tony Kakkar" },
      { "title": "On My Way", "artist": "Alan Walker" },
      { "title": "Naagin", "artist": "Aastha Gill" }
    ]
  },
  {
    "id": "3",
    "title": "Romantic Mix – Hindi × English × Punjabi",
    "description": "Love songs across languages",
    "coverImage": "./assets/images/playlist 3.jpeg",
    "songs": [
      { "title": "Perfect", "artist": "Ed Sheeran" },
      { "title": "Love Me Like You Do", "artist": "Ellie Goulding" },
      { "title": "Ve Haaniyaan", "artist": "Danny, Avvy Sra" },
      { "title": "Tujhe Kitna Chahne Lage", "artist": "Arijit Singh" },
      { "title": "You & I", "artist": "One Direction" },
      { "title": "Tera Ban Jaunga", "artist": "Akhil Sachdeva, Tulsi Kumar" },
      { "title": "Until I Found You", "artist": "Stephen Sanchez" },
      { "title": "Filhall", "artist": "B Praak" },
      { "title": "Ranjha", "artist": "Jasleen Royal, B Praak" },
    ]
  },
  {
    "id": "4",
    "title": "Desi Swag Ride",
    "description": "Car vibes with Punjabi, Hindi & hip-hop beats",
    "coverImage": "./assets/images/playlist 4.jpeg",
    "songs": [
      { "title": "No Love", "artist": "Shubh" },
      { "title": "Proper Patola", "artist": "Diljit Dosanjh, Badshah" },
      { "title": "Bhool Bhulaiyaa 2 Title Track", "artist": "Neeraj Shridhar" },
      { "title": "DNA", "artist": "BTS" },
      { "title": "Yalgaar", "artist": "CarryMinati" },
      { "title": "Goat", "artist": "Sidhu Moose Wala" },
      { "title": "Believer", "artist": "Imagine Dragons" },
      { "title": "Naah", "artist": "Harrdy Sandhu" },
      { "title": "Bad Guy", "artist": "Billie Eilish" }
    ]
  },
  {
    "id": "5",
    "title": "Top Trending 2025 (India)",
    "description": "Latest chart-toppers across languages",
    "coverImage": "https://images.unsplash.com/photo-1527766833261-b09c3163a791?auto=format&fit=crop&w=800&q=80",
    "songs": [
      { "title": "Heeriye", "artist": "Arijit Singh, Jasleen Royal" },
      { "title": "Espresso", "artist": "Sabrina Carpenter" },
      { "title": "Maan Meri Jaan", "artist": "King" },
      { "title": "Not Ramaiya Vastavaiya", "artist": "SRK, Anirudh" },
      { "title": "Players", "artist": "Badshah ft. Karan Aujla" },
      { "title": "Good Luck, Babe!", "artist": "Chappell Roan" },
      { "title": "Jhoome Jo Pathaan", "artist": "Arijit Singh" },
      { "title": "With You", "artist": "AP Dhillon" },
      { "title": "Lunch", "artist": "Billie Eilish" },
      { "title": "Kahani Suno 2.0", "artist": "Kaifi Khalil" }
    ]
  }
]
// url  song dir address
let address = "http://127.0.0.1:5500/assets/songs/"

//  taking refrence of controles
const play = document.querySelector(".playButton");
const next = document.querySelector(".nextButton");
const prv = document.querySelector(".prvButton")
const circle = document.querySelector(".circle")
const seekBarLeft = document.querySelector(".seekDeurationCompleated")
const seekBarRight = document.querySelector(".seekDeurationRemanimg")
const seekBar = document.querySelector(".seekBar")

// seekbar data
const title = document.querySelector(".title");
const timeLine = document.querySelector(".songDuration")
let timeOfPause = "#t=00:00:00";


// playlist secation 
const playlistBox = document.querySelector(".playlistBox");
// globel audio 
let globelAudio = new Audio()
let isPlaying = 0;




// render all playlist
async function diplayPlayList() {
  songData.forEach(playList => {
    globelAudio.src = `http://127.0.0.1:5500/assets/songs/${songData[2].songs[0].title}.mp3`
    let child = document.createElement("li");
    child.innerHTML = `<div class="hover:bg-gray-500 delay-50 duration-100 h-67 overflow-clip bg-gray-800 p-2.5 rounded-lg min-w-40 w-40">
            <!-- Image Cover -->
            <img src="${playList.coverImage}" class="w-35 h-35  rounded shadow" alt="${playList.id}" />
            <!-- Title -->
            <h3 class="text-gray-200 font-bold  mt-5"> ${playList.title}</h3>
            <h3 class="text-gray-200 font-samibold  mt-5"> ${playList.description}</h3>
            </div>`
    playlistBox.appendChild(child)
    // console.log(playList)
  });
}

diplayPlayList()
let currentPlayListIndex = 2;
let currSongIndex = 0;


const songList = document.querySelector(".songList")
console.log(songList)
// render song list onclick plalist 
playlistBox.addEventListener("click", (event) => {
  currentPlayListIndex = Number(event.target.alt) - 1;
  console.log(currentPlayListIndex)
  let i = 0;
  if(songList.hasChildNodes())
  songList.innerHTML = "" 
  console.log(songList)
  songData[currentPlayListIndex].songs.forEach(e => {
    // console.log(e)
    const li = document.createElement("li")
    li.innerHTML = `<div id="${i}" class="flex justify-between items-center overflow-hidden  border-b-2 py-2 sm:p-2  md:w-2/3 my-1">
            <div id="${i}" class="flex justify-center items-center  sm:gap-7 sm:text-2xl">
              <img id="${i}" class="w-12 h-12 " src="./assets/icons/songIcon.svg" >
              <div>
                <p id="${i}" >${e.title}</p>
                <p id="${i}" class=" text-sm">${e.artist}</p>
              </div>
            </div>
            <img class="w-9 h-9" src="./assets/icons/play.svg" alt="">
          </div>`
    songList.appendChild(li);
    i++;
  });
})

songList.addEventListener("click", (e) => {
  currSongIndex = e.target.id;
  console.log(currentPlayListIndex,currSongIndex,e.target);
  
  const songTitle = songData[currentPlayListIndex].songs[currSongIndex].title;
  const songArtist = songData[currentPlayListIndex].songs[currSongIndex].artist;
  const url = `http://127.0.0.1:5500/assets/songs/${songTitle}.mp3`

  playSong(url, songTitle, songArtist);
})

// on click song fatch song play
function playSong(url, songTitle) {
  title.textContent = songTitle
  timeLine.textContent = "00:00 / 00:00"
    globelAudio.src = url + timeOfPause;
    globelAudio.play();
    isPlaying = true;
}


// pause and play from corrent time
function handelPlay() {
  // console.log(globelAudio.src)
  title.textContent = songData[currentPlayListIndex].songs[currSongIndex].title
  timeLine.textContent = "00:00 / 00:00"
  if (isPlaying) {
    // console.log("puse")
    globelAudio.pause();
    isPlaying = 0;
  }
  else {
    globelAudio.play();
    isPlaying = true;
  }

}

// next song and previous song in play list
function handelNext() {
  const length = songData[currentPlayListIndex].songs.length;
  currSongIndex ++
  currSongIndex = currSongIndex % length;
  title.textContent = songData[currentPlayListIndex ].songs[currSongIndex].title
  timeLine.textContent = "00:00 / 00:00"

  globelAudio.src = address + songData[currentPlayListIndex].songs[currSongIndex].title + ".mp3";
  globelAudio.play();
  isPlaying = true;
}
function handelPrv() {
    const length = songData[currentPlayListIndex].songs.length;
  currSongIndex--;
  if (currSongIndex < 0) currSongIndex = length - 1;
  title.textContent = songData[currentPlayListIndex].songs[currSongIndex].title
  globelAudio.src = address + songData[currentPlayListIndex].songs[currSongIndex].title + ".mp3"
  globelAudio.play();
  isPlaying = true;
}

// song duration listner

globelAudio.addEventListener("timeupdate", () => {
  // current time of song
  let currMin = Math.floor(globelAudio.currentTime / 60)
  if (currMin < 10) currMin = '0' + currMin
  let currSec = Math.floor(globelAudio.currentTime % 60)
  if (currSec < 10) currSec = "0" + currSec
  // totle deuration of song
  let totalMin = Math.floor(globelAudio.duration / 60)
  if (totalMin < 10) totalMin = '0' + totalMin
  let totalSec = Math.floor(globelAudio.duration % 60)
  if (totalSec < 10) totalSec = '0' + totalSec
  // seekbar set and circle position
  let x = (globelAudio.currentTime / globelAudio.duration) * 100;
  circle.style.left = `${x}%`
  timeLine.textContent = ` ${currMin}:${currSec} : ${totalMin}:${totalSec}`
})

play.addEventListener("click", () => handelPlay())
next.addEventListener("click", () => handelNext())
prv.addEventListener("click", () => handelPrv())

seekBar.addEventListener("click", (e) => {
  let length = 873
  // console.log(e.target.getBoundingClientRect())
  let x = (e.offsetX / e.target.getBoundingClientRect().width) * 100;
  circle.style.left = `${x}%`

  globelAudio.currentTime = ((globelAudio.duration * x) / 100)
  // console.log(x,audio.duration, audio.currentTime)
})



// typewritereffect

const words = ["Hello, World!", "Welcome to YPlay", "A World full of MUSIC."];
let i = 0;
let j = 0;
let currentWord = "";
let isDeleting = false;

function type() {
  currentWord = words[i];
  if (isDeleting) {
    document.getElementById("typewriter").textContent = currentWord.substring(0, j - 1);
    j--;
    if (j == 0) {
      isDeleting = false;
      i++;
      if (i == words.length) {
        i = 0;
      }
    }
  } else {
    document.getElementById("typewriter").textContent = currentWord.substring(0, j + 1);
    j++;
    if (j == currentWord.length) {
      isDeleting = true;
    }
  }
  setTimeout(type, 100);
}

type();


