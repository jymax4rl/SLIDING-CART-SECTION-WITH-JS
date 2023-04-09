const divs = document.querySelectorAll('.main-content div');
const cartSlider = document.getElementsByClassName('cartSlider')[0];
const addToCart = document.getElementsByClassName('addToCart');
const closeSlider = document.getElementById('closeSlider');


// cartSlider.style.visibility = 'hidden';
cartSlider.style.transform = 'translateX(400%)';


for (let i = 0; i < addToCart.length; i++) {
    addToCart[i].addEventListener('click', () => {
        // cartSlider.style.visibility = 'visible';
        cartSlider.style.transform = 'translateX(0%)';

    });
}


closeSlider.addEventListener('click', () => {

    // cartSlider.style.visibility = 'hidden';
    cartSlider.style.transform = 'translateX(400%)';


    console.log('close slider button clicked')

})