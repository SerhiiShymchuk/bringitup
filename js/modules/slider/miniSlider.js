import Slider from './slider.js'

export default class MiniSlider extends Slider {
    constructor(container, prev, next, activeClass, animate, autoplay) {
        super(container, prev, next, activeClass, animate, autoplay)
    }
    init() {
        this.container.style.cssText = `
            display: flex;
            flex-wrap: wrap;
            align-items: flex-start;
            overflow: hidden;
        `;
        this.bindTriggers()
        this.decorizeSlider()
        if (this.autoplay) {
            setInterval(() => this.nextSlide(), 2000)
        }
    }
    bindTriggers() {
        this.prev.addEventListener('click', () => {
            for (let i = this.slides.length - 1; i > 0; i--) {
                if (this.slides[i].tagName !== "BUTTON") {
                    this.container.prepend(this.slides[i])
                    this.decorizeSlider();
                    break;
                }
            }
        })
        this.next.addEventListener('click', () => this.nextSlide())

    }
    decorizeSlider() {
        [...this.slides].forEach(slide => {
            slide.classList.remove(this.activeClass)
            if (this.animate) {
                slide.querySelector('.card__title').style.opacity = '0.4'
                slide.querySelector('.card__controls-arrow').style.opacity = '0'
            }
        })
        
        this.slides[0].classList.add(this.activeClass)
        if (this.animate) {
            this.slides[0].querySelector('.card__title').style.opacity = '1'
            this.slides[0].querySelector('.card__controls-arrow').style.opacity = '1'
        }
    }
    nextSlide() {
        if (this.slides[1].tagName == "BUTTON" && this.slides[2].tagName == "BUTTON") {
            this.container.appendChild(this.slides[0]); // Slide
            this.container.appendChild(this.slides[1]); // Btn
            this.container.appendChild(this.slides[2]); // Btn
            this.decorizeSlider();
        } else if (this.slides[1].tagName == "BUTTON"){
            this.container.appendChild(this.slides[0]); // Slide
            this.container.appendChild(this.slides[1]); // Btn
            this.decorizeSlider();
        }
        this.container.append(this.slides[0])
        this.decorizeSlider()
    }

}