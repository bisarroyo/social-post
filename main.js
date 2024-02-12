import './style.css'
const canvas = document.getElementById('design-canvas')
const ctx = canvas.getContext('2d')
const textInput = document.getElementById('text-input')
const colorInput = document.getElementById('color-selector')
const exportBtn = document.getElementById('export-image')

// Función para cambiar el color de fondo del canvas
function changeBackgroundColor(color) {
  ctx.fillStyle = color
  ctx.fillRect(0, 0, canvas.width, canvas.height)
}

// Función para cambiar el texto en el canvas
function changeText(text) {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  ctx.fillText(text, canvas.width / 2, canvas.height / 2)
}

// Inicialización del canvas
function initializeCanvas() {
  canvas.width = 500
  canvas.height = 500
  ctx.font = '20px Arial'
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
}

// Evento para cambiar el color de fondo
document.addEventListener('change', function (event) {
  if (event.target.type === 'color') {
    changeBackgroundColor(event.target.value)
  }
})

// Evento para cambiar el texto
textInput.addEventListener('input', function () {
  changeText(textInput.value)
})

// Inicializar el canvas
initializeCanvas()

// Función para exportar la imagen
function exportImage() {
  const imageData = canvas.toDataURL('image/png')
  const link = document.createElement('a')
  link.href = imageData
  link.download = 'post.png'
  link.click()
}

exportBtn.addEventListener('click', exportImage)
