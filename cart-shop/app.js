
const Exitbtn = document.getElementById("close");
const WrapperElm = document.getElementById("wrapper");
const ImgElmItem = document.getElementById("wrapper-item");
const ImgElm = document.getElementById("imgElm");
const ModalElm = document.getElementById("modal");
console.log(ImgElmItem);
console.log(ModalElm);
console.log(Exitbtn);
const onMouseMove = (e) =>{
    ModalElm.style.left = e.offsetX + 'px';
    ModalElm.style.top = e.offsetY + 'px';
    console.log(e.offsetX);
    console.log(e.offsetY);
  }
ImgElmItem.addEventListener('mouseover', (e) => {
    let target = e.target;
    console.log("mouseover");
    this.addEventListener('mousemove', onMouseMove);
   if(target === ImgElm){
    ModalElm.style.display = 'block';
    ModalElm.style.zIndex = '1000';
    }
});
ImgElmItem.addEventListener('mouseout', (e) => {
    let target = e.target;
    console.log("mouseout");
    this.removeEventListener('mousemove', onMouseMove);
    if(target === ImgElm){
    ModalElm.style.display = 'none';
    }
});
Exitbtn.addEventListener("click", function () {
    WrapperElm.classList.add("close");
})