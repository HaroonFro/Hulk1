function startGame() {



const hulk = document.querySelector('#hulk');
const tank = document.querySelector('#tank');
const score = document.querySelector('#score');
let button = document.querySelector('#button');

tank.classList.add('tank-animation')

button.classList.add('hidden')

tank.classList.remove('hidden')
hulk.classList.remove('hidden')

function jump() {

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

//    const finalScore = score.innerHTML++;
    

    const hulkTopPosition = parseInt(window.getComputedStyle(hulk)
         .getPropertyValue('top'));
 
    const tankLeftPosition = parseInt(window.getComputedStyle(tank)
         .getPropertyValue('left'));


    //show tank only when value is positive 

    if (tankLeftPosition < 0) {
        tank.style.display = 'none';
    } else {
        tank.style.display = '';
    } 


if(tankLeftPosition < 80 && hulkTopPosition > 180) {


     alert(`Game Over! Your score ${finalScore}.`);
    //    document.getElementById('game-over').innerHTML = `Game Over! Your Score ${finalScore}`


    //  const replay = confirm('Do you want to play again?');

    //  if(replay) {
    //     jump();
    //  } else {
    //     alert('Better luck next time.')
    //     ;
    //  }
     
    }
   
})
}
