
function changeColor(name){
  var hrt_color = document.getElementById("heart"+ name).style.color;
  var modal_hrt_color = document.getElementById("modal_heart" + name).style.color;

  if (hrt_color == "black"){
    document.getElementById("heart" + name).style.color = "red";
    document.getElementById("modal_heart" + name).style.color = "red";
  }
  else if (hrt_color == "red"){
    document.getElementById("heart" + name).style.color = "black";
    document.getElementById("modal_heart" + name).style.color = "white";
  }


  if (modal_hrt_color == "white"){
    document.getElementById("heart" + name).style.color = "red";
    document.getElementById("modal_heart" + name).style.color = "red";
  }
  else  if (modal_hrt_color == "red"){
    document.getElementById("heart" + name).style.color = "black";
    document.getElementById("modal_heart" + name).style.color = "white";
  }
}




function displayModal(name){
var modal = document.getElementById("myModal" + name);
var img = document.getElementById("myImg" + name);
var modalImg = document.getElementById("img" + name);
var captionText = document.getElementById("caption" + name);
// document.getElementById(hrt).style.backgroundColor = "black";
var close = document.getElementsByClassName("close" + name)[0];


// var hrt_color = document.getElementById("heart" + name).style.color;
// var modal_hrt = document.getElementById("modal_heart" + name);

img.onclick = function(){
// document.getElementById("modal_heart" + name).style.color = hrt_color;
modal.style.display = "block";
modalImg.src = this.src;
// document.getElementsByClassName("btn_go_to_top").style.display ="none";
document.getElementById('myNav').style.display = "none";
// captionText.innerHTML = this.alt;

}
// When the user clicks on <span> (x), close the modal
close.onclick = function() {
// document.getElementsByClassName("btn_go_to_top").style.display ="block";
document.getElementById('myNav').style.display = "block"
modal.style.display = "none"; 
}
}