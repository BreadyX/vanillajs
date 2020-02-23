function uncoverText(event) {
    let coverer = document.querySelector(".coverer")
    coverer.animate(
        [
            {width: 100vh;},
            {width: 0vh;}
        ], 2000)
}


document.body.addEventListener("load", uncoverText)