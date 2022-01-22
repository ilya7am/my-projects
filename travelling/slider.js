const upBtn= document.querySelector('.up-button');
const downBtn= document.querySelector('.down-button');

const sidebar= document.querySelector('.sidebar');
const mainSlide = document.querySelector('.main-slide');
const slidesCount = mainSlide.querySelectorAll('div').length;         /*   lenght вычисляет кол-во div  */

const slider = document.querySelector('.slider');



sidebar.style.top = `-${(slidesCount - 1) * 400}px`;           /* тк высота слайдера - 400px */

let activeSlideIndex = 0;

upBtn.addEventListener('click', () => {
    changeSlide('up')
})


downBtn.addEventListener('click', () => {
    changeSlide('down')
})


function changeSlide(direction) {
    if (direction === 'up') {
        activeSlideIndex++
        if (activeSlideIndex === slidesCount) {
            activeSlideIndex = 0;
        }
} else if (direction === 'down') {
    activeSlideIndex--
    if (activeSlideIndex < 0) {
        activeSlideIndex = slidesCount - 1;
    }
}

const height = slider.clientHeight;             /*   для смены картинки в сооотв-ии с ращмером экрана  */


mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`;

sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`;

}