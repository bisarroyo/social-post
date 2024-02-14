import { animateResize } from './utils/animation-canvas'
import { exportImage } from './utils/export-canvas'

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

// change color background
function changeBackgroundColor() {
  const bgColor = colorInput.value
  canvas.style.backgroundColor = bgColor
}
colorInput.addEventListener('input', changeBackgroundColor)

// update text in the canvas
function drawText(text) {
  const backgroundColor = getComputedStyle(canvas).backgroundColor
  ctx.fillStyle = backgroundColor // Utiliza el color de fondo del canvas
  ctx.fillRect(0, 0, canvas.width, canvas.height) // Limpia el canvas
  ctx.fillStyle = '#000' // Color del texto
  ctx.font = '20px Arial'
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  ctx.fillText(text, canvas.width / 2, canvas.height / 2)
}

// Evento para cambiar el texto
textInput.addEventListener('input', function () {
  drawText(textInput.value)
})

// Inicializar el canvas
initializeCanvas()

exportBtn.addEventListener('click', () => {
  exportImage(canvas, 1080, 1920)
})
