const music= new Audio('dafi.mp3');


const songs = [
    {
        id:'1',
        songName:`My love <br>
        <div class="subtitle">Dafina Zeqiri</div>`,
        poster:'1.jpg'
    },
    {
        id:'2',
        songName:`eagle <br>
        <div class="subtitle">Noizy</div>`,
        poster:'2.jpg'
    }
]
Array.from(document.getElementsByClassName('songItem')).forEach((element,i)=>{
    element.getElementsByTagName('img')[0].src= songs[i].poster;
})