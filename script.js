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

//jump function here
function jump() {
// console.log('jump working')
    hulk.classList.add('jump-animation');
    setTimeout(() => {
        hulk.classList.remove('jump-animation')
    }, 800);

}
//hulk jump complete
document.addEventListener('click', () => {
    jump();
});

//score and collision here

setInterval(() => {

    // score.innerHTML++;
    // console.log('score working')

    const hulkTopPosition = parseInt(window.getComputedStyle(hulk)
         .getPropertyValue('top'));
 
    const tankLeftPosition = parseInt(window.getComputedStyle(tank)
         .getPropertyValue('left'));

    // console.log(tankLeftPosition, hulkTopPosition)

    //show tank only when value is positive 

    if (tankLeftPosition < 0) {
        tank.style.display = 'none';
    } else {
        tank.style.display = '';
    } 

});






//hulk grunt function

// document.getElementById('grunt');
// play();
  