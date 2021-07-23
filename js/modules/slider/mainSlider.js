import Slider from "./slider.js";
export default class MainSlider extends Slider {
    constructor(btns) {
        super(btns)
    }
    
    showSlides(n) {
        if (n > this.slides.length-1) {
            this.slideIndex = 0
        }
        if (n < 0) {
            this.slideIndex = this.slides.length-1
        }
        [...this.slides].forEach(slide => slide.style.display = 'none')
        this.slides[this.slideIndex].style.display = 'block'
        if (n === 2) {
            this.hanson = document.querySelector('.hanson')
            this.hanson.style.opacity = '0'
            this.hanson.classList.add('animated')
            setTimeout(() => {
                this.hanson.style.opacity = '1'
                this.hanson.classList.add('slideInUp')
            }, 2000)
        } else {
            if (this.hanson && this.hanson.classList.contains('slideInUp')) this.hanson.classList.remove('slideInUp', 'animated')
        }
    }

    plusSlides(n) {
        this.showSlides(this.slideIndex += n)
    }

    render() {
        this.showSlides(this.slideIndex)
        this.btns.forEach(item => {
            item.addEventListener('click', () => this.plusSlides(1))

            item.parentNode.previousElementSibling.addEventListener('click', (e) => {
                e.preventDefault()
                this.slideIndex = 0
                this.showSlides(this.slideIndex)
            })
        })
    }
}