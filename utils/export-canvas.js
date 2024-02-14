// function for export the image post
export function exportImage(canvaElement, resolutionWidth, resolutionHeight) {
  //save actual canvaElement size
  const currentWidth = canvaElement.width
  const currentHeight = canvaElement.height

  // set new canvaElement size
  canvaElement.width = resolutionWidth
  canvaElement.height = resolutionHeight

  //draw the content of original canvaElement in the new size
  ctx.drawImage(
    canvaElement,
    0,
    0,
    currentWidth,
    currentHeight,
    0,
    0,
    resolutionWidth,
    resolutionHeight
  )

  const imageData = canvaElement.toDataURL('image/png')

  //restore original size
  canvaElement.width = currentWidth
  canvaElement.height = currentHeight

  const link = document.createElement('a')
  link.href = imageData
  link.download = 'post.png'
  link.click()
}
