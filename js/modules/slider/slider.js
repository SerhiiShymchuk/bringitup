export default class Slider {
    constructor({container=null, btns=null, prev=null, next=null,
        activeClass, animate, autoplay} = {}) {
        this.container = document.querySelector(container)
        this.slides = this.container.children
        this.btns = document.querySelectorAll(btns)
        this.next = document.querySelector(next)
        this.prev = document.querySelector(prev)
        this.slideIndex = 0
        this.activeClass = activeClass
        this.animate = animate
        this.autoplay = autoplay
    }

}