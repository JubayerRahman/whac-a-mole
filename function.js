const time = document.getElementById('time');
const score = document.querySelector('#score');
const mainGame =document.querySelector('.maingame')
const aftergame =document.getElementById('aftergame').style.display  = 'none';
const squires = document.querySelectorAll('.grid');
const clickSound  = new Audio('sound/ting.mp3')
const music  = new Audio('sound/music.mp3')
let timerid = null;

let moleId ;
let result =0;
let currentTime =60;

function randomSquire (){
    // let result =[] ;
    // remoling mole if there is any
    squires.forEach(squire => {
        squire.classList.remove('mole')
    })
    // choosing a random squire
    let randomDiv = squires[Math.floor(Math.random()*9)]
    randomDiv.classList.add('mole')
    moleId =randomDiv.id;
}
    //Check if Got the mole
    squires.forEach(squires =>{
        squires.addEventListener('mousedown' , ()=>{
            if(squires.id == moleId){
                // result.push[squires]
                result++
                console.log(result)
                score.innerHTML = result;
                clickSound.play();
            }
        })
    })


// mole the mole time o time
function moveMole(){
    timerid = setInterval(randomSquire, 500);
}

//countDown
function countDown(){
    currentTime --
    time.innerHTML = currentTime;

    if(currentTime <= 0){
        music.play();
        clearInterval(timerid)
        clearInterval(timer)
        document.getElementById('maingame').style.display = 'none'
        document.getElementById('aftergame').style.display  = 'flex'
        document.getElementById('aftergame').style.flexDirection  = 'column'
        document.getElementById('aftergame').style.backgroundColor  = 'purple'
        document.getElementById('aftergame').style.padding  = '20px'
        document.getElementById('aftergame').style.borderRadius  = '20px'
        document.getElementById('aftergame').style.border  = 'none'
        document.getElementById('aftergame').style.width  = '50vw'
        document.getElementById('aftergame').style.height  = '200px'
        document.getElementById('aftergame').style.justifyContent  = 'space-evenly'
        document.getElementById('aftergame').style.marginTop  = '10vw'
        document.getElementById('finalResult').innerHTML  = result

        document.getElementById('reload').addEventListener('click',()=>{
            location.reload();
        })
    }
}

let timer = setInterval(countDown,1000)

moveMole();