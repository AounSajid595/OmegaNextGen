let nextButton = document.getElementById('next');
let prevButton = document.getElementById('prev');
let carousel = document.querySelector('.carousel');
let listHTML = document.querySelector('.carousel .list');
let seeMoreButtons = document.querySelectorAll('.seeMore');
let backButton = document.getElementById('back');

nextButton.onclick = function(){
    showSlider('next');
}
prevButton.onclick = function(){
    showSlider('prev');
}
let unAcceppClick;
const showSlider = (type) => {
    nextButton.style.pointerEvents = 'none';
    prevButton.style.pointerEvents = 'none';

    carousel.classList.remove('next', 'prev');
    let items = document.querySelectorAll('.carousel .list .item');
    if(type === 'next'){
        listHTML.appendChild(items[0]);
        carousel.classList.add('next');
    }else{
        listHTML.prepend(items[items.length - 1]);
        carousel.classList.add('prev');
    }
    clearTimeout(unAcceppClick);
    unAcceppClick = setTimeout(()=>{
        nextButton.style.pointerEvents = 'auto';
        prevButton.style.pointerEvents = 'auto';
    }, 2000)
}
seeMoreButtons.forEach((button) => {
    button.onclick = function(){
        carousel.classList.remove('next', 'prev');
        carousel.classList.add('showDetail');
    }
});
backButton.onclick = function(){
    carousel.classList.remove('showDetail');
}

// Array of background images
const backgrounds = [
    'url("images/pngwing.com.png")',
    'url("images/pngwing.com(2).png")',
    'url("images/pngwing.com (1).png")',
    'url("images/pngwing.com (3).png")',
    'url("images/bg5.png")'
];

// Track current slide index
let currentIndex = 0;

// Function to update the carousel background
function updateBackground(index) {
    carousel.style.backgroundImage = backgrounds[index];
}

// Event listeners for Next and Previous buttons
document.getElementById('next').addEventListener('click', function() {
    // Increment the index and loop back if necessary
    currentIndex = (currentIndex + 1) % backgrounds.length;
    updateBackground(currentIndex);
});

document.getElementById('prev').addEventListener('click', function() {
    // Decrement the index and loop back if necessary
    currentIndex = (currentIndex - 1 + backgrounds.length) % backgrounds.length;
    updateBackground(currentIndex);
});

// Set initial background when the page loads
updateBackground(currentIndex);
