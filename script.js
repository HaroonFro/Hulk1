//hulk jump grunt
// const sound = ;
// const audio = document.createElement('audio');
// audio.autoplay = true;

// audio.load();

// audio.addEventListener ('load', funtion() {
//     audio.play();
// }, true);

// audio.src = source;

const hulk = document.querySelector('#hulk');
const tank = document.querySelector('#tank');
const score = document.querySelector('#score');
// const grunt = document.querySelector('#grunt');

//jump function here
function jump() {
// console.log('jump working')
    hulk.classList.add('jump-animation');
    setTimeout(() => {
        hulk.classList.remove('jump-animation')
    }, 800);
    // hulk.classList.add('grunt');

}
//hulk jump complete
document.addEventListener('click', () => {
    jump();
    // $('#grunt')[0].play();
});

//score and collision here

setInterval(() => {

   const finalScore = score.innerHTML++;
    // console.log('score working')

    const hulkTopPosition = parseInt(window.getComputedStyle(hulk)
         .getPropertyValue('top'));
 
    const tankLeftPosition = parseInt(window.getComputedStyle(tank)
         .getPropertyValue('left'));

    console.log(tankLeftPosition);
    console.log(hulkTopPosition);

    //show tank only when value is positive 

    if (tankLeftPosition < 0) {
        tank.style.display = 'none';
    } else {
        tank.style.display = '';
    } 


if(tankLeftPosition < 80 && hulkTopPosition > 180) {


     alert(`Game Over! Your score ${finalScore}.`);

     const replay = confirm('Do you want to play again?');

     if(replay) {
        jump();
     } else {
        alert('Better luck next time.')
     }
     
    }


    //collision here
   
})

    tankLeftPosition = 1000;

    









//hulk grunt function

// document.getElementById('grunt');
// play();
  