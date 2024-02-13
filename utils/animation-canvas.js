export function animateResize(canvasElement, width, height) {
  const originalWidth = canvasElement.width
  const originalHeight = canvasElement.height
  const targetWidth = width
  const targetHeight = height

  let duration = originalWidth - targetWidth < 100 ? 200 : 500

  const startTime = performance.now()

  function resizeStep(currentTime) {
    const canvasElementapsed = currentTime - startTime
    const progress = Math.min(1, canvasElementapsed / duration)

    canvasElement.width =
      originalWidth + (targetWidth - originalWidth) * progress
    canvasElement.height =
      originalHeight + (targetHeight - originalHeight) * progress

    if (progress < 1) {
      requestAnimationFrame(resizeStep)
    }
  }

  requestAnimationFrame(resizeStep)
}
