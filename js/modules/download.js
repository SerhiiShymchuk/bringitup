export default class Download {
    constructor (triggers) {
        this.btns = document.querySelectorAll(triggers)
        this.path = 'assets/img/slide_1_m.jpg'
    }

    downloadFile(path) {
        const link = document.createElement('a')
        link.href = path
        link.download = 'nice_picture'
        link.style.display = 'none'
        document.body.append(link)
        link.click()
        link.remove()
    }

    init() {
        this.btns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.downloadFile(this.path)
            })
        })
    }
}