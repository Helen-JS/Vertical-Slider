const downButton = document.querySelector('.down-button')
const upButton = document.querySelector('.up-button')

const textSlide = document.querySelector('.text-slide')
const pictureSlide = document.querySelector('.picture-slide')
const slidesCount = pictureSlide.querySelectorAll('div').length

const wrapper = document.querySelector('.wrapper')

let currentSlideIndex = 0;

textSlide.style.top = `-${(slidesCount - 1) * 100}vh`

downButton.addEventListener('click', () => {
    switchSlide('down')
})

upButton.addEventListener('click', () => {
    switchSlide('up')
})

function switchSlide(direction) {
    if (direction === 'down') {
        currentSlideIndex--
        if (currentSlideIndex < 0) {
            currentSlideIndex = slidesCount - 1
        }

    } else if (direction === 'up') {
        currentSlideIndex++
        if (currentSlideIndex === slidesCount) {
            currentSlideIndex = 0
        }
    }

    const height = wrapper.clientHeight

    pictureSlide.style.transform = `translateY(-${currentSlideIndex * height}px)`

    textSlide.style.transform = `translateY(${currentSlideIndex * height}px)`
}