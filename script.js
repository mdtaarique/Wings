console.log("Welcome to spotify");
//initialize the elements
let songindex = 0;
let audioElement = new Audio('song/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItem = Array.from(document.getElementsByClassName('songItem'));



let songs = [
    {songName:"Is-qadar-Salam-e-Ishq",filePath: "song/1.mp3" ,coverPath: "covers/1.jpg"},
    {songName:"Tumse-pyar-Salam-e-Ishq",filePath: "song/2.mp3" ,coverPath: "covers/2.jpg"},
    {songName:"Tusjhe-Salam-e-Ishq",filePath: "song/3.mp3" ,coverPath: "covers/3.jpg"},
    {songName:"345-Salam-e-Ishq",filePath: "song/4.mp3" ,coverPath: "covers/4.jpg"},
    {songName:"kaisa-pyar-Salam-e-Ishq",filePath: "song/5.mp3" ,coverPath: "covers/5.jpg"},
    {songName:"kaiswer-Salam-e-Ishq",filePath: "song/6.mp3" ,coverPath: "covers/6.jpg"},
    {songName:"juiop-Salam-e-Ishq",filePath: "song/7.mp3" ,coverPath: "covers/7.jpg"},
    {songName:"bhjui-Salam-e-Ishq",filePath: "song/8.mp3" ,coverPath: "covers/8.jpg"},
    {songName:"get-ready-Salam-e-Ishq",filePath: "song/9.mp3" ,coverPath: "covers/9.jpg"},
]

songItem.forEach((element,i)=>{
   element.getElementsByTagName("img")[0].src = songs[i].coverPath;
   element.getElementsByClassName("songName")[0].innerText = songs[i].songName;

})
// audioElement.play();

//handle play/pause click
masterPlay.addEventListener('click',()=>{
    if (audioElement.paused || audioElement.currentTime<=0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
//listen to events
audioElement.addEventListener('timeupdate',()=>{
     console.log('timeupdate')
     //update seekbar
     progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
     console.log(progress);
     myProgressBar.value = progress;
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})


const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
        
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        songindex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = (`song/${songindex+1}.mp3`);
        masterSongName.innerText = songs[songindex].songName;
      audioElement.currentTime=0;
      audioElement.play();
      gif.style.opacity = 1;
      masterPlay.classList.remove('fa-play-circle');
      masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click',()=>{
    if(songindex>=8)
    {
        songindex=0;
    }
    else{
       songindex += 1;
    }

    audioElement.src = `song/${songindex+1}.mp3`;
    masterSongName.innerText = songs[songindex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songindex<=0)
    {
        songindex=0;
    }
    else{
       songindex-=1;
    }

    audioElement.src = `song/${songindex+1}.mp3`;
    masterSongName.innerText = songs[songindex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})