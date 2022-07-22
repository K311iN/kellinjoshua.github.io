let myImage = document.querySelector('img');

myImage.onclick = function() {
   
    let mySrc = myImage.getAttribute('src');
   
   if(mySrc === 'images/download.jfif') {
    myImage.setAttribute('src', 'images/thumbs-up.jpg');
   } else {
    myImage.setAttribute('src', 'images/download.jfif');
   }
   
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Crack is Wack, ' + myName;
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Crack is Wack, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}

