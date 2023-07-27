function revealTop() {
    var reveals = document.querySelectorAll(".reveal_top");    
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible =150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }   
}   

window.addEventListener("scroll", revealTop);


function revealBottom() {
    var reveals = document.querySelectorAll(".reveal_bottom");    
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }   
} 
window.addEventListener("scroll", revealBottom);




function revealRight() {
    var reveals = document.querySelectorAll(".reveal_right");    
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }   
}   

window.addEventListener("scroll", revealRight);

function revealLeft() {
    var reveals = document.querySelectorAll(".reveal_left");    
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }   
}   

window.addEventListener("scroll", revealLeft);





// ZOOM-in ZOOM OUT
    document.addEventListener("DOMContentLoaded", function() {
    var zoomElement = document.querySelector(".zoom-effect");
    var zoomTriggerOffset = zoomElement.offsetTop - window.innerHeight;
  
    function checkZoom() {
      if (window.pageYOffset > zoomTriggerOffset) {
        zoomElement.classList.add("zoomed");
      } else {
        zoomElement.classList.remove("zoomed");
      }
    }
  
    window.addEventListener("scroll", checkZoom);
  });
