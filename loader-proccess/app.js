window.onload = function(){
    var elm = document.querySelector('#progress');
    var icon = document.querySelector('#icon');
    var fill = document.querySelector('#fill');
    
    setInterval(function(){
      if(!elm.innerHTML.match(/100%/gi)){
        elm.innerHTML = (parseInt(elm.innerHTML) + 1) + '%';
        // const test = (parseInt(elm.innerHTML) - 1) ;
        // console.log(test);
        icon.style.left =(parseInt(elm.innerHTML) + 1) + '%';
        fill.style.width = (parseInt(elm.innerHTML) + 1) + '%';
      } else {
        clearInterval();
      }
    }, 50);
  }



  let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  slides[slideIndex-1].style.display = "block";  
  setTimeout(showSlides, 4000); // Change image every 2 seconds
}