import { animateResize } from './utils/animation-canvas'

import './style.css'
const canvas = document.getElementById('design-canvas')
const ctx = canvas.getContext('2d')
const textInput = document.getElementById('text-input')
const colorInput = document.getElementById('color-selector')
const exportBtn = document.getElementById('export-image')

const postRatio = document.getElementById('post')
const landscapeRatio = document.getElementById('landscape')
const verticalRatio = document.getElementById('vertical')
const storiesRatio = document.getElementById('stories')

// Función para cambiar el texto en el canvas
function changeText(text) {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  ctx.fillText(text, canvas.width / 2, canvas.height / 2)
}

// canvas initialization
function initializeCanvas(width = 500, height = 500) {
  canvas.width = width
  canvas.height = height
  ctx.font = '20px Arial'
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
}

//update canvas size
postRatio.addEventListener('change', () => {
  animateResize(canvas, 500, 500)
})

landscapeRatio.addEventListener('change', () => {
  animateResize(canvas, 262, 500)
})

verticalRatio.addEventListener('change', () => {
  animateResize(canvas, 400, 500)
})

storiesRatio.addEventListener('change', () => {
  animateResize(canvas, 282, 500)
})

// Evento para cambiar el color de fondo
// Función para cambiar el color de fondo del canvas
function changeBackgroundColor() {
  const bgColor = colorInput.value
  canvas.style.backgroundColor = bgColor
}
colorInput.addEventListener('input', changeBackgroundColor)

// Evento para cambiar el texto
textInput.addEventListener('input', function () {
  changeText(textInput.value)
})

// Inicializar el canvas
initializeCanvas()

// Función para exportar la imagen
function exportImage(resolutionWidth, resolutionHeight) {
  //save actual canvas size
  const currentWidth = canvas.width
  const currentHeight = canvas.height

  // set new canvas size
  canvas.width = resolutionWidth
  canvas.height = resolutionHeight

  //draw the content of original canvas in the new size
  ctx.drawImage(
    canvas,
    0,
    0,
    currentWidth,
    currentHeight,
    0,
    0,
    resolutionWidth,
    resolutionHeight
  )

  const imageData = canvas.toDataURL('image/png')

  //restore original size
  canvas.width = currentWidth
  canvas.height = currentHeight

  const link = document.createElement('a')
  link.href = imageData
  link.download = 'post.png'
  link.click()
}

exportBtn.addEventListener('click', () => {
  exportImage(1080, 1920)
})

console.log(colorInput.value)
