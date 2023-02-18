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

