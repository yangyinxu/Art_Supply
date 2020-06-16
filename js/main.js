let carts = document.querySelectorAll(".add-cart");

let products = [
    {
        name: 'wacom cintiq pro 32',
        tag: 'wcp32',
        price: 3232,
        inCart: 0
    },
    {
        name: 'wacom cintiq pro 24',
        tag: 'wcp24',
        price: 2424,
        inCart: 0
    },
    {
        name: 'wacom cintiq pro 22hd',
        tag: 'wcp22hd',
        price: 2222,
        inCart: 0
    },
    {
        name: 'wacom one',
        tag: 'wcone',
        price: 1111,
        inCart: 0
    }
];

// Add event listeners for all buttons
for(let i=0; i < carts.length; i++){
    carts[i].addEventListener("click", function(){
        cartNumbers();
    });
}

function onLoadCartNumbers(){
    //number of items in cart
    let productNumbers = localStorage.getItem('cartNumbers');

    //set productNumbers equal to the value in local storage
    if(productNumbers){
        document.querySelector('.cart span').textContent = productNumbers;
    }
}

// Keep track of number of items in the Cart
function cartNumbers(){
    let productNumbers = localStorage.getItem('cartNumbers');

    productNumbers = parseInt(productNumbers);

    // console.log(productNumbers);

    //if item exist, add one
    if(productNumbers){
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.cart span').textContent = productNumbers + 1;
    }else{ //else, make it one
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.cart span').textContent = 1;
    }
}

//refresh checks local storage
onLoadCartNumbers();