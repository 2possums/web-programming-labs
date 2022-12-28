function clickMe(button){
    if(button.innerHTML=='Щелчок')
    button.innerHTML='Спасибо';
    else
    button.innerHTML='Щелчок'
}
let name=document.getElementsByClassName('Clicks').value;
function clickMe2(button){
    if(button.innerHTML=='Амосова')
    button.innerHTML='Виктория';
    else
    button.innerHTML='Амосова'
}
function clickMe3(button){
    if(button.innerHTML=='Хан')
    button.innerHTML='Александра';
    else
    button.innerHTML='Хан'
}
function clickMe4(button){
    if(button.innerHTML=='Нажми меня')
    button.innerHTML='Ещё раз нажми';
    else if (button.innerHTML=='Ещё раз нажми')
    button.innerHTML='Ещё';
    else if (button.innerHTML=='Ещё')
    button.innerHTML='Начать сначала';
    else
    button.innerHTML='Нажми меня'
}

function showCoords(event){
    event.target.innerHTML='x= ' + event.offsetX+', y= '+event.offsetY+', Ctrl='+event.ctrlKey+', shift= '+event.shiftKey+', Alt= '+event.altKey;
}

window.addEventListener('DOMContentLoaded',function(){
    let coords = this.document.querySelector('#coords');
    coords.addEventListener('mousemove',showCoords);
    let inputs = this.document.querySelectorAll('input[type="text"]')
    let ch=this.document.getElementById('output');
    for (let i=0;i<inputs.length;i++){
        inputs[i].addEventListener("focus", () => inputs[i].classList.add('focused'));
        inputs[i].addEventListener("blur", () => inputs[i].classList.remove('focused'));
        inputs[i].addEventListener("change", () => ch.innerHTML=inputs[i].value);
    }
    let inputss = this.document.querySelectorAll('input[type="number"]');
    let ch2=this.document.querySelectorAll('.output');
    for (let i=0;i<inputs.length;i++){
        inputss[i].addEventListener("change", () => ch2[i].innerHTML=inputss[i].value);
        
    }
});

function colooor(event){

}

