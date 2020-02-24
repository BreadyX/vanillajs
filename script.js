function replaceImages() {

    let images = document.getElementsByTagName('img')

    for (let i = images.length - 1; i >= 0; i--) {
        image = images[i];
        if (image.alt) {
            let newNode = document.createTextNode(image.alt)
            image.parentNode.replaceChild(newNode, image)

        }
    }
}


function buttonClickEvent(event) {
    console.log(event.timeStamp)
    this.style.padding = '5rem 10rem'
}

function pClickEvent (event) {
    console.log("è stato 'hoverato' il nodo p")
    console.log(event.timeStamp / 1000 + " s")
}



// random bullshittery
/*
let docBody = document.getElementsByTagName('body')[0]

for (let node of docBody.childNodes) {
    node.addEventListener("click", () => {
        console.log(`You clicked on ${node.tagName.toLowerCase()}: "${node.textContent}"`)
    })
}
*/

let text = document.getElementById('main-p')
text.addEventListener("mouseover", pClickEvent)

let buttonsArea = document.getElementsByClassName('buttons-div')[0]
buttonsArea.addEventListener("click", event => {
    console.log(event.target.textContent)
})

window.
