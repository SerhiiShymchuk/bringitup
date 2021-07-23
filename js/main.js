import MainSlider from "./modules/slider/mainSlider.js";
import MiniSlider from './modules/slider/miniSlider.js'
import Difference from './modules/difference.js'
import VideoPlayer from './modules/videoplayer.js'
window.addEventListener('DOMContentLoaded', () => {
    const slider = new MainSlider({container: '.page', btns: '.next'})
    slider.render()

    const miniSlider = new MiniSlider({
        container: '.showup__content-slider',
        prev: '.showup__prev',
        next: '.showup__next',
        activeClass: 'card-active',
        animate: true
    })
    miniSlider.init()

    const moduleSlider = new MiniSlider({
        container: '.modules__content-slider',
        prev: '.modules__info-btns .slick-prev',
        next: '.modules__info-btns .slick-next',
        activeClass: 'card-active',
        animate: true,
        autoplay: true
    })
    moduleSlider.init()

    const feedSlider = new MiniSlider({
        container: '.feed__slider',
        next: '.feed__slider .slick-next',
        prev: '.feed__slider .slick-prev',
        activeClass: 'feed__item-active'
    })
    feedSlider.init()

    const videoplayer = new VideoPlayer('.showup .play', '.overlay')
    videoplayer.init()

    new Difference('.officerold', '.officernew', '.officer__card-item').init()
})