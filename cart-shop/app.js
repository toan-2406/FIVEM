
const Exitbtn = document.getElementById("close");
const WrapperElm = document.getElementById("wrapper");

var ItemElms = document.querySelectorAll(".img");
var ModalElm = document.querySelectorAll(".cart-wapper__infos");

var TabElms = document.querySelectorAll(".category__item");
var TabContentElms = document.querySelectorAll(".tab-content");

var BuyNowElms = document.querySelectorAll(".btn-buy");
var ModalBuyNowElms = document.querySelector(".modal-wrapper");
console.log(TabElms)
//Show modal when click on button buy now
BuyNowElms.forEach(function(elm, index) {
    elm.addEventListener("click", function() {
        ModalBuyNowElms.classList.add("active");
    });
});
ModalBuyNowElms.addEventListener("click", function(e) {
    if (e.target.classList.contains("modal-wrapper")) {
        ModalBuyNowElms.classList.remove("active");
    }
});
//Tab change category
TabElms.forEach(function(elm, index) {
    elm.addEventListener("click", function() {
        TabElms.forEach(function(elm) {
            elm.classList.remove("active");
        });
        this.classList.add("active");
        TabContentElms.forEach(function(elm) {
            elm.classList.remove("active");
        });
        TabContentElms[index].classList.add("active");
    });
});


//active item when hover
ItemElms.forEach((item,index) => {
    item.addEventListener("mouseover", (e) => {   
        item.addEventListener("mousemove", (e) => {
            const offsetX = e.offsetX + 15;
            const offsetY = e.offsetY + 20;
            ModalElm[index].classList.add('active')
            ModalElm[index].style.top = offsetY  + "px";
            ModalElm[index].style.left = offsetX + "px";
        });
    });
    item.addEventListener("mouseout", (e) => {
        ModalElm[index].classList.remove('active')
    });
})


//exit btn
Exitbtn.addEventListener("click", function () {
    WrapperElm.classList.add("close");
})

