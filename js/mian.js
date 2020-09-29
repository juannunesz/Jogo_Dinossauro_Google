
const dino = document.querySelector('.dino');

const background = document.querySelector('.background');

let position = 0;

let isJumping = false;

// Identifica qual tecla será pressionada 

function pressionouTecla(event){
    if (event.keyCode === 32 || event.keyCode === 38 ){
      if (!isJumping){
        jump();
      }
     }
}

document.addEventListener('keydown', pressionouTecla);

// Faz o movimento de pular do dinossauro 

function jump(){
    
    isJumping = true;

    let upInterval = setInterval(() =>{
        if (position >= 150){
            clearInterval(upInterval);

            // Descendo
            let downInterval = setInterval(()=>{
                if (position <= 0){
                    clearInterval(downInterval);
                    isJumping = false;
                }else{
                    position -= 20;
                    dino.style.bottom = position + 'px';
                }
            },20);
        }else{
           // Subindo
            position += 20;
            dino.style.bottom = position + 'px';
        }
   },20);
}

// Cria os cactus na tela

function createCactus(){

    const cactus = document.createElement('div');
    let cactusPosition = 1000;

    let randomTime = Math.random() * 6000;
    console.log(randomTime)
    cactus.classList.add('cactus');
    cactus.style.left = 1000 + 'px';
    background.appendChild(cactus);


    let lefInterval = setInterval (() => {
        
        if (cactusPosition < -60 ){
            clearInterval(lefInterval);
            background.removeChild(cactus);
        }else if(cactusPosition > 0 && cactusPosition < 60 && position < 60) {
            // Game Over 
            clearInterval(lefInterval);
            document.body.innerHTML = '<h1 class="game-over"> Fim de Jogo</h1>';
        }else {
            cactusPosition -= 10;
            cactus.style.left = cactusPosition + 'px';
        }
    }, 20);
    
    setTimeout(createCactus, randomTime);
}

createCactus();

