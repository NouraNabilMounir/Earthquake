let articles = document.querySelectorAll("#tips article");
let dotContainer = document.querySelectorAll("#tips .navgation .dot");
let video = document.querySelector("#video video");
let start = 0;

function slide(start) {
  for (let i= 0; i< articles.length ;i++){
    if(articles[i].classList.contains("active")){
      articles[i].classList.remove("active")
    }
  }
  for(let i= start; i < start+2 ;i++){
    if(start == 6){
      break;
    }
    articles[i].classList.add("active")
  }
}
function changeDotLocation (e){
  for (let i= 0; i< dotContainer.length ;i++){
    if(dotContainer[i].classList.contains("active")){
      dotContainer[i].classList.remove("active")
    }
  }
  e.classList.add("active");
}
function slide1(e){
  slide(0);
  changeDotLocation(e)
}
function slide2(e){
  slide(2);
  changeDotLocation(e)
}
function slide3(e){
  slide(3);
  changeDotLocation(e)
}
function  startVideo(playIcon){
  playIcon.style.display ="none";
  video.style.display ="block";
}