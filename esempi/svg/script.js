let message = "Benvenuto!"
console.log(message)


let canvas = document.querySelector("canvas")
let context = canvas.getContext("2d")
context.strokeStyle = "red"
context.strokeRect(10, 10, 100, 100)
context.lineWidth = 5
context.strokeRect(120, 10, 100, 100)