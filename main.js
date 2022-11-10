const carousel =document.querySelector(".carousel");
 arrowIcons =document.querySelectorAll(".wrapper i");
 firstImg =carousel.querySelectorAll("img")[0];
let isDragStart=false,prevPageX,prevScrollLeft;
let firstImgWidth = firstImg.clientWidth+14;
arrowIcons.forEach(icon=>{
    icon.addEventListener("click",()=>{
        carousel.scrollLeft+=icon.id=="left"?- firstImgWidth:firstImgWidth;
    })
});
const dragStart =(e)=>{
    isDragStart=true;
    prevPageX=e.pageX;
    prevScrollLeft=carousel.scrollLeft;
}
const draggin =(e)=>{
    if(!isDragStart)return;
    e.preventDefault();
    carousel.classList.add("draggin");
 let positionDiff=e.pageX-prevPageX;
  carousel.scrollLeft =prevScrollLeft-positionDiff;
  
}
const dragStop =()=>{
    isDragStart=false;
}
carousel.addEventListener("mousedown",dragStart);
carousel.addEventListener("mousemove",draggin);
carousel.addEventListener("mouseup",dragStop);