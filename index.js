//for first dice image section
var randomNumber1 = Math.floor(Math.random()*6)+1; //generating the random number from 1 to 6
var randomDiceImage1 = "dice" + randomNumber1 + ".png"; //selecting random image from dice1 to dice6
var randomImageSource1 = "images/" + randomDiceImage1;; //selecting random image source as a string
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource1);
//for second dice image section
var randomNumber2 = Math.floor(Math.random()*6)+1;
var randomImageSource2 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);
//for heading section
if(randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML="🚩Player1 win !";
}else if (randomNumber1<randomNumber2) {
  document.querySelector("h1").innerHTML="Player2 win !🚩";
}else{
  document.querySelector("h1").innerHTML="🤷‍♂️ Draw !!! 🤷‍♂️";
}
