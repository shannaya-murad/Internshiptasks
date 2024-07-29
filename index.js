let currentIndex = 0;
const slideWidth = 100; // Width of each slide (in percentage)

function slide() {
    const sliderTrack = document.querySelector('.internship-slider-track');
    const cards = document.querySelectorAll('.card');
    const totalCards = cards.length;
    const visibleCards = 3; // Number of cards visible at a time

    currentIndex++;
    if (currentIndex > totalCards - visibleCards) {
        currentIndex = 0;
    }

    const translateX = -currentIndex * slideWidth * (visibleCards / totalCards);
    sliderTrack.style.transform = `translateX(${translateX}%)`;

    setTimeout(slide, 3000); // Change slide every 3 seconds
}

document.addEventListener('DOMContentLoaded', () => {
    slide();
});
