function showAlert(){
    let userName=document.getElementById('input-name').value;
    let userSurname=document.getElementById('input-surname').value;
    let userAge=document.getElementById('input-age').value;
    let userSex=document.getElementById('sex').value;
    let greeting;
    if(userAge<=17){
       greeting = 'Здравствуй, ';
       if(userSex=='female'){
        greeting+='сестра '
       }
       else{
        greeting+='брат '
       }
    }
    else {
        greeting = 'Здравствуйте, ';
        if(userSex=='female'){
            greeting+='мисс '
           }
           else{
            greeting+='мистер '
           }
    }
    alert(greeting + userName+' '+userSurname+ '\n'+ 'Вам '+userAge+' лет');
    let r =Math.round(Math.random()*255);
    let g =Math.round(Math.random()*255);
    let b =Math.round(Math.random()*255);
    let color ='rgb(' + r + ',' + g + ',' + b + ')';
    document.getElementById('user-data').style.backgroundColor=color;
}

function makeStairs(){
    let stairs=document.querySelector('#stairs');
    let stepCount=20;
    for (let i=0; i<stepCount; i++){
        stairs.innerHTML +='<div class="step"></div>'
    }
    let steps=document.querySelectorAll('.step');
    for(let i=0; i<steps.length; i++){
        steps[i].style.left=(480+10*i)+'px';
        steps[i].style.top=(80+80*i)+'px';
        steps[i].innerHTML='Блок номер '+(i+1);
    }
}

function Snow(){
    let snezki = document.querySelector(' #snezki');
    let stepCount = 40;
    for (let i = 0; i<stepCount; i++){
    snezki.innerHTML += '<img class="snow" src="https://cdn.leroymerlin.ru/lmru/image/upload/v1629257800/lmcode/qpYwET2CukGmw6SyDgTlEA/85156524.png">';
    }
    let snezhinkis = document.querySelectorAll('.snow');
    let screenWidth = window.screen.width;
    let screenHeight = window.screen.height;

    for (let i = 0; i<snezhinkis.length; i++)
    {
    snezhinkis[i].style.left = Math.random() * (screenWidth-100) + 'px';
    snezhinkis[i].style.top = Math.random() *(screenHeight-100) + 'px';
    snezhinkis[i].style.width= Math.random() * 45 + 'px';
    }
}

function table1(){
    let stairs=document.querySelector('#table');
    let stepCount=10;
    for (let i=1; i<stepCount; i++){
        stairs.innerHTML +='<div class="table"></div>'
    }
    let steps=document.querySelectorAll('.table');
    for(let i=1; i<steps.length; i++){
        steps[i].innerHTML=i+'*3='+(i*3);
    }
}

function table2(){
    let stairs=document.querySelector('#table2');
    let stepCount=10;
    for (let i=1; i<stepCount; i++){
        stairs.innerHTML +='<div class="table"></div>'
    }
    let steps=document.querySelectorAll('.table');
    for(let i=1; i<steps.length; i++){
        steps[i].innerHTML=i+'*6='+(i*6);
    }
}

function stih(){
    let steps=document.querySelectorAll('.string');
    let block=document.querySelectorAll('.block');
    for(let i=0;  i<steps.length; i++){
        if(i<7){
        steps[i].style.fontSize=(10+i)+'px';
        steps[i].style.color='#'+(i*24);
       // block[i].style.height=(150+i)+'px';
        block[i].style.backgroundColor='#'+(245*i)
        }
        else{
            steps[i].style.fontSize=(10+i)+'px';
            steps[i].style.color='#'+(i*24); 
        }
    }
    
}


function load (){
    makeStairs();
    Snow();
    table1();
    table2();
    stih();
}
