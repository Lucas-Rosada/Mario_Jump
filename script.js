const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
let contadorPulos = 0; 
//let contadorAtivo = true;
const contadorElemento = document.getElementById('contador');

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);

    contadorPulos++; 
    contadorElemento.textContent = contadorPulos; 

    console.log('Contagem de pulos:', contadorPulos);
}

const loop = setInterval(() => {
    
    const pipePosition = pipe.offsetLeft;
    const marioPosition = window.getComputedStyle(mario).bottom.replace('px', '');

    if(pipePosition <= 120 && marioPosition > 0 && marioPosition < 80){
       // let contadorAtivo = false;
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        pipe.style.animation = 'none';
        pipe.style.bottom = `${marioPosition}px`;

        mario.src="assets/game-over.png"
        mario.style.width = '75px'
        mario.style.marginLeft = '50px'
        clearInterval(loop);
        alert(perdeuuu);
    }

}, 10);

document.addEventListener('keydown', jump);