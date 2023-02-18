//Практическое задание 1

function showMessage () {
    console.log ('Я учу JavaScript')
  }
  showMessage ()


//Практическое задание 2

let img = document.getElementById('picture');

function getPicture() {
    img.src = './img1.jpg'
    img.alt = 'landscape'
}

function getPicture2() {
    img.src = './img2.jpg'
    img.alt = 'green_grass'
}

//*** Задание под звездочкой

let year = 2028;
if(((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)){
    console.log('Год является високосным (366 дней).');
} else {
    console.log('Год не является високосным (365 дней).');
}