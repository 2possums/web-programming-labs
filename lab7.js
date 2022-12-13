function ALL () {
    makeStrairs();
    makeStrairs1();
}

function showAlert() {
    let userName = document.getElementById('input-name').value;
    let userSurname = document.getElementById('input-surname').value;
    let userAge = document.getElementById('input-age').value;
    let userSex = document.getElementById ('sex').value
    
    let greeting;
    if (userAge <= 17) {
        greeting = 'Здравствуй, ';
        if (userSex == 'female') {
            greeting += 'девочка ';
        }
        else {
            greeting += 'мальчик ';
        }
    }

    else {
       greeting = 'Здравствуйте, '
       ;
        if (userSex == 'female') {
            greeting += 'госпожа ';
        }
        else {
            greeting += 'господин ';
        }
    }
    alert(greeting + userName + ' ' + userSurname + '\n' + 'Ваш возраст: ' + userAge);
    let r = Math.round(Math.random()*255);
    let g = Math.round(Math.random()*255);
    let b = Math.round(Math.random()*255);
    let color = 'rgb(' + r + ',' + g + ',' + b + ')';
    document.getElementById('user-data').style.backgroundColor = color;
}

function makeStrairs() {
    let stairs = document.querySelector('#stairs');
    let stepCount = 20;
    for (let i = 0; i<stepCount; i++) {
        stairs.innerHTML += '<div class = "step"></div>';
    }

    let steps = document.querySelectorAll ('.step');
    for (let i = 0; i<steps.length; i++) {
        steps[i].style.left = (30+10*i) + 'px';
        steps[i].style.top = (300+80*i) + 'px';
        steps[i].innerHTML = 'Блок номер ' + i;
    }
}

function makeStrairs1() {
    let stairs = document.querySelectorAll('#snowflackes');
    let stepCount = 100;
    for (let i = 0; i<stepCount; i++) {
        snowflackes.innerHTML += '<img class = "snow" src= "https://cdn.leroymerlin.ru/lmru/image/upload/v1571726062/lmcode/1ALEQwcMqUeHP4C9bcZlTg/82279189.png"></img>';
    }

    let snow = document.querySelectorAll ('.snow');
    let screenWidth = window.screen.width;
    let screenHeight = window.screen.height;
    for (let i = 0; i<snow.length; i++) {
        steps[i].style.left = Math.random() * (screenWidth) + 'px';
        steps[i].style.top = Math.random() * (screenWidth) + 'px';
        steps[i].innerHTML = Math.random() * 100 + 'px';
    }
}


