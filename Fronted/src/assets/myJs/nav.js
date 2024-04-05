

var slideimg= document.getElementById("slideimg");
var images = new Array(
    "../assets/slider1.avif",
  "../assets/slider2.avif",
  "../assets/slider3.avif",
  "../assets/slider4.avif"
);
var len = images.length;
var i = 0;

function slider(){
  if(i > len - 1){
    i = 0;
  }
  slideimg.src = images[i];
  i++;
  setTimeout(slider, 3000);
}
