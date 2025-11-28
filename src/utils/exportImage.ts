import html2canvas from "html2canvas-pro";

export const exportImage = async () => {
  const gridContainer = document.querySelector<HTMLDivElement>('div.pixelGridContainer')
  if (gridContainer) {
    // Clone the grid container off screen to avoid any visual flickers
    const gridContainerClone = gridContainer.cloneNode(true) as HTMLDivElement

    gridContainerClone.style.transform = 'none';
    gridContainerClone.style.position = 'absolute';
    gridContainerClone.style.top = '-99999px';
    gridContainerClone.style.left = '-99999px';

    document.body.appendChild(gridContainerClone)
    gridContainerClone.getBoundingClientRect();

    const gridCanvas = await html2canvas(gridContainerClone, { 
      scale: 1,
      backgroundColor: null,
      useCORS: true
    })

    document.body.removeChild(gridContainerClone)

    // Download the image
    gridCanvas.toBlob((blob) => {
      if (!blob) {
        return
      }
      const downloadLink = document.createElement('a')
      downloadLink.download = 'pixel-art.png'
      downloadLink.href = URL.createObjectURL(blob)
      downloadLink.click()
      URL.revokeObjectURL(downloadLink.href)
    })
  }
}