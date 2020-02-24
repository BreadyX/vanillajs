console.log('console reloaded')

const LOGOTEXT = "Leo-bianconi"
const NUMLOGOS = 10
let logo = document.getElementById('logo')
let titleSection = document.getElementById('title-section')

function logoEffect (event) {
    console.log('ciao')
    let logoList = []

    for(let i = 0; i < NUMLOGOS; i++) {
        let currentLogo = document.createElement('h1')
        let currentDiv = document.createElement('div')
        titleSection.appendChild(currentDiv)
        currentDiv.appendChild(currentLogo)

        currentDiv.className = 'others-div'
        currentLogo.className = 'other-logos'
        currentLogo.style.zIndex = i + 1
        currentLogo.textContent = LOGOTEXT

        logoList.push(currentDiv)
        
    }
    console.log(logoList)

    for(let l of logoList) {
        l.animate([
            {'top': '1000px'},
            {'top': '50vh'}
        ], 1000, Infinity)
    }
}

window.addEventListener("load", logoEffect)

