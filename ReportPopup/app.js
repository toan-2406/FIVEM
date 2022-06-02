
const Exitbtn = document.getElementById("delete");
const WrapperElm = document.getElementById("wrapper");

Exitbtn.addEventListener("click", function () {
    WrapperElm.classList.add("close");
})