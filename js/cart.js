//empty the cart
let empty = document.querySelector(".btn-danger")
    addEventListener("click", function(){
    localStorage.clear();
    location.reload();
});