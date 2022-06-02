const GetLocationElm = document.querySelectorAll(".get-location");
const Exitbtn = document.getElementById("exit");
const WrapperElm = document.getElementById("wrapper");
//duyet qua tung phan tu
GetLocationElm.forEach(function (item) {
    item.addEventListener("click", function () {
        item.classList.add("active");
        item.innerHTML = "Đã có người nhận";
    })
})

Exitbtn.addEventListener("click", function () {
    WrapperElm.classList.add("close");
})