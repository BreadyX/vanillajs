let text = document.getElementById('main-h1')
let backgroundText = document.getElementById('background-text')

window.addEventListener("keypress", (event) => {

    if (event.key == "Backspace") {
        backgroundText.textContent.slice(0, -1);
    } else {
        text.textContent = event.key
        backgroundText.textContent += event.key
    }

})

let rightClickBox = document.getElementById('right-click-box')

window.addEventListener("contextmenu", event => {

    let x, y;
    x = event.clientX
    y = event.clientY

    rightClickBox.style.display = "block"
    rightClickBox.style.top = y + "px"
    rightClickBox.style.left = x + "px"
    event.preventDefault()
})

window.addEventListener("click", () => {
    rightClickBox.style.display = "none"
})
