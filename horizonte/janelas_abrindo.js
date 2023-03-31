function Janela(){
    const container = document.querySelector('.container');

    const bg =()=>{
        const corpo = document.createElement('div');
        corpo.style.width = '100%';
        corpo.style.height = '20px';
        corpo.style.backgroundColor = randomColor();
        corpo.style.position = 'absolute';

        container.appendChild(corpo)
        return(corpo);
    }

    const randomColor =()=>{
        const r = Math.floor(Math.random()*256)
        const g = Math.floor(Math.random()*256)
        const b = Math.floor(Math.random()*256)
        const cor = `rgb(${r},${g},${b})`
        return cor;
    }

    this.expande =(d)=>{

        const div = bg();

        const interval = 10;
        let alturaBG = 0;
      
        const id = setInterval( anim, interval);

        function anim(){  
            if( alturaBG < 5000 ){
                alturaBG += 1;
                console.log(alturaBG)
                div.style.height = alturaBG+'px';
            }else{
                clearInterval(id)
                div.parentElement.removeChild(div)
            }
        }
    }
}

const janela1 = new Janela();

document.addEventListener('click',janela1.expande)
