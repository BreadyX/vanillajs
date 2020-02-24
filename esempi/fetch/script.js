/*
fetch("https://api.github.com/users/leo-bianconi/orgs").then(response => {
    response.json()
}).then(console.log)
*/

let userForm = document.querySelector('form')
userForm.addEventListener('submit', event => {
    console.log(`Saving data:`)
    for (let element of userForm.elements) {
        console.log(element.name,'->', element.value)
    }
    event.preventDefault()
})

let textArea = userForm.elements.message
textArea.addEventListener('focus', event => {
    textArea.value = ''
})

textArea.addEventListener('input', () => {
    console.log(textArea.value)
})

textArea.addEventListener('blur', event => {
    textArea.value = 'Inserisci il messaggio qui'
})


let buttons = document.querySelectorAll('[name=color]')
for (let b of buttons) {
    b.addEventListener('change', () => {
        document.body.style.backgroundColor = b.value
    })
}
