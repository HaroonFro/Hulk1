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
// const jump = document.querySelector('jump-animation')

function jump() {
console.log('jump working')
    hulk.classList.add('jump-animation');
    setTimeout(() => {
        hulk.classList.remove('jump-animation')
    }, 200);

}

// jump();

// document.addEventListener ('click', () => {
//     jump();
// })

document.addEventListener('click', () => {
 console.log('click working')       
    jump();
});

// console.log("working");