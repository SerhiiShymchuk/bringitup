export default class Form {
    constructor(forms) {
        this.forms = document.querySelectorAll(forms)
        this.inputs = document.querySelectorAll('input')
        this.message = {
            loading: 'Загрузка...',
            success: 'Спасибо! Скоро мы с вами свяжемся!',
            failure: 'Что-то пошло не так...'
        };
        this.path = './assets/question.php'
    }

    async postData(url, data) {
        let res = await fetch(url, {
            method: 'post',
            body: data,
        })
        return await res.text()
    }

    clearInputs(inputs) {
        inputs.forEach(input => input.value = '')
    }

    checkMailInputs() {
        const emailInputs = document.querySelectorAll('[type="email"]')
        emailInputs.forEach(input => {
            input.addEventListener('keypress', (e) => {
                if(e.key.match(/[^a-z0-9@\.]/ig)) e.preventDefault();
            })
        })
    }

    init() {
        this.checkMailInputs()
        this.forms.forEach(form => {
            form.addEventListener('submit', (e)=> {
                e.preventDefault()
                let statusMessage = document.createElement('div')
                statusMessage.style.cssText = `
                    margin-top: 15px;
                    font-size: 18px;
                    color: grey;
                `
                form.parentElement.append(statusMessage)

                const formdata = new FormData(form)
                this.postData(this.path, formdata)
                    .then( res => {
                        console.log(res)
                        statusMessage.innerText = this.message.success
                    })
                    .catch( err => {
                        console.log(err)
                        statusMessage.innerText = this.message.failure
                    })
                    .finally( () => {
                        this.clearInputs(this.inputs)
                        setTimeout(()=> {
                            statusMessage.remove()
                        }, 4000)
                    })
            })
        })
    }
}