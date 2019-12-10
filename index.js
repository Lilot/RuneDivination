

var runeStone = Math.random() * 24;
runeStone = Math.floor(runeStone) + 1;

var randomRuneImage = "images/" + runeStone + "Rune.png";



 var image2 = document.querySelectorAll(".img2")[0];

 // image2.setAttribute("src", randomRuneImage);

 document.querySelectorAll("button")[0].addEventListener("click", function(){
         image2.setAttribute("src", randomRuneImage);

 });



// document.querySelectorAll("img2")[0].setAttribute("src", randomRuneImage);
