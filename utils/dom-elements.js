const canvasModule = (function () {
  const canvas = document.getElementById('design-canvas')
  const ctx = canvas.getContext('2d')
  const textInput = document.getElementById('text-input')
  const colorInput = document.getElementById('color-selector')
  const exportBtn = document.getElementById('export-image')
  const postRatio = document.getElementById('post')
  const landscapeRatio = document.getElementById('landscape')
  const verticalRatio = document.getElementById('vertical')
  const storiesRatio = document.getElementById('stories')
  return {
    canvas,
    ctx,
    textInput,
    colorInput,
    exportBtn,
    postRatio,
    landscapeRatio,
    verticalRatio,
    storiesRatio
  }
})()

export default canvasModule
