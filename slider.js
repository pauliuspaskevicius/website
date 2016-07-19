var slider = document.getElementById("slider");
var img = [];
img.push("http://exosphe.re/wp-content/uploads/2016/02/EyeFish-1500x996.jpg");
img.push("http://exosphe.re/wp-content/uploads/2016/02/Header-1500x937.jpg");
img.push("http://exosphe.re/wp-content/uploads/2016/07/SkinnerQuoteBackground-1500x844.jpg");

var i = 0;
function PreviousImage() {
  slider.style.backgroundImage = "url('" + img[i] + "')";
  i = (i <= 0 ? img.length - 1 : i - 1);
}

function NextImage() {
  slider.style.backgroundImage = "url('" + img[i] + "')";
  i = (i < img.length - 1 ? i + 1 : 0);
}

var t = setInterval(NextImage, 5000);
slider.addEventListener("click", function(){
  clearInterval(t);
});
