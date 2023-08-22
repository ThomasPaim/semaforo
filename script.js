const button = document.querySelectorAll('button')
const img = document.querySelector('img')
let intervalID = null
let automatic = false;
let cont = 0;

for(const botao of button){
    botao.addEventListener('click', ()=>{

      if(botao.classList.contains('automatic')){
        if(automatic){
            clearInterval = intervalID;
            automatic = false
        }else{
            automatic = true;
            intervalID = setInterval();{
                if(cont === 0){
                    img.setAttribute('src',`./img/vermelho.png`)
                }else if(cont === 1){
                    img.setAttribute('src',`/img/amarelo.png`)
                }else if(cont === 2){
                    img.setAttribute('src',`/img/verde.png`)
                }
                cont++;
               if(cont === 3){
                cont = 0
               }
            
        }1000;
    }
}
else{
    clearInterval(intervalID);
    automatic = false
    img.setAttribute('src',`./img/${botao.id}.png`)
}   
   
 });

}





