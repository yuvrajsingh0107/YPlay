
let index  = 0;
let isPlaying = 0;

//  taking refrence of controles
const play = document.querySelector(".playButton");
const next = document.querySelector(".nextButton");
const prv = document.querySelector(".prvButton")
const circle = document.querySelector(".circle")
const seekBarLeft = document.querySelector(".seekDeurationCompleated")
const seekBarRight = document.querySelector(".seekDeurationRemanimg")
const seekBar = document.querySelector(".seekBar")

// playlist secation 
const playlistBox = document.querySelector(".playlistBox");
// globel audio 
let audio = new Audio()
// song list and titles
let songs = [];
let titles = [];


async function main() {
  // fatch all songs
  let a = await fetch("http://127.0.0.1:5500/assets/songs/")
  let res = await a.text();
  let div = document.createElement("div");
  div.innerHTML = res;
  let list = div.getElementsByTagName("a")
  let n = list.length;

  // creating song list and titles
  let count = 0;
  for (let i = 0; i < n; i++) {
    const ele = list[i];
    if (ele.href.endsWith(".mp3")) {
      let title = ele.title;
      // n = titles.length;
      if (title[0] === '[') {
        title = title.slice(24)
      }
      let child = document.createElement("li");
      child.innerHTML = `<div class="hover:bg-gray-500 delay-50 duration-100 h-67 overflow-clip bg-gray-800 p-2.5 rounded-lg min-w-40 w-40">
            <!-- Image Cover -->
            <img src="./assets/images/pexels-veeterzy-38136.jpg" class="w-35 h-35  rounded shadow" alt="${count ++}" />
            <!-- Title -->
            <h3 class="text-gray-200 font-bold  mt-5"> ${title}</h3>
            </div>`
      playlistBox.appendChild(child)
      titles.push(title)
      songs.push(ele.href);
    }
  }
}
// main()


const title = document.querySelector(".title");
const timeLine = document.querySelector(".songDuration")

let timeOfPause = "#t=00:00:00";
 function handelPlay(song) {
  title.textContent = titles[index]
  timeLine.textContent = "00:00 / 00:00"
  if (isPlaying) {
    let currMin = Math.floor(audio.currentTime/ 60)
    if(currMin < 10) currMin = '0' + currMin
    let currSec = Math.floor(audio.currentTime % 60)
    if(currSec < 10) currSec = "0" + currSec
    timeOfPause = `#t=00:${currMin}:${currSec}`
    audio.pause();
    isPlaying = 0;
  }
  else {
    audio.src = song + timeOfPause;
    // console.log(audio.src)
    audio.play();
    isPlaying = true;
  }
  // isPlaying = !isPlaying
}


 function handelPlayList(song) {
  title.textContent = titles[index]
    timeLine.textContent = "00:00 / 00:00"

    audio.src = song;
    // console.log(audio.src)
    audio.play();
  
  isPlaying = true
}

function handelNext(song) {
  // index ++;
  index = index % songs.length;
    title.textContent = titles[index]
    timeLine.textContent = "00:00 / 00:00"

  audio.src = song;
  audio.play();
  isPlaying = true;
}
function handelPrv() {
  index--;
  if(index < 0) index = songs.length - 1;
  title.textContent = titles[index]
  audio.src = songs[index];
  audio.play();
  isPlaying = true;

}

// song duration listner

audio.addEventListener("timeupdate" , () => {
  // current time of song
  let currMin = Math.floor(audio.currentTime/ 60)
  if(currMin < 10) currMin = '0' + currMin
  let currSec = Math.floor(audio.currentTime % 60)
  if(currSec < 10) currSec = "0" + currSec
  // totle deuration of song
  let totalMin = Math.floor(audio.duration / 60)
  if(totalMin < 10) totalMin = '0' + totalMin
  let totalSec = Math.floor(audio.duration % 60)
  if(totalSec < 10) totalSec = '0' + totalSec
  // seekbar set and circle position
  let x = (audio.currentTime / audio.duration ) * 100;
  circle.style.left = `${x}%`
  timeLine.textContent = ` ${currMin}:${currSec} : ${totalMin}:${totalSec}`
})

play.addEventListener("click", () => handelPlay(songs[index]))
next.addEventListener("click", () => handelNext(songs[++index]))
prv.addEventListener("click", () => handelPrv(songs[index]))
playlistBox.addEventListener("click" , (event) => {
  if(event.target.id != 'ul'){
    index = event.target.alt
    return handelPlayList(songs[event.target.alt])

  }
})
seekBar.addEventListener("click" , (e)=>{
  let length = 873
  // console.log(e.target.getBoundingClientRect())
  let x = (e.offsetX / e.target.getBoundingClientRect().width ) * 100;
  circle.style.left = `${x}%`
  
  audio.currentTime = ((audio.duration *  x) / 100)
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
    document.getElementById("typewriter").textContent = currentWord.substring(0, j-1);
    j--;
    if (j == 0) {
      isDeleting = false;
      i++;
      if (i == words.length) {
        i = 0;
      }
    }
  } else {
    document.getElementById("typewriter").textContent = currentWord.substring(0, j+1);
    j++;
    if (j == currentWord.length) {
      isDeleting = true;
    }
  }
  setTimeout(type, 100);
}

type();


