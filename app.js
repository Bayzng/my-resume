//Animation img
var slideImg = document.getElementById("slideImg");

var images = new Array(
    "images/1.jpg",
    "images/2.webp",
    "images/4.webp",
    "images/6.jpg"
);

var len = images.length;
var i = 0

function slider(){
    if(i > len-1){
        i = 0;
    }
    slideImg.src = images[i];
    i++;
    setTimeout('slider()',3000);
}

//Nav-Bar

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  /* Set the width of the side navigation to 0 */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

 