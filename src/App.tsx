import './App.css'
import { useState, type ChangeEvent, type FormEvent } from 'react'

import { ColorPicker, type ColorType } from '@/components/ColorPicker'
import { Controls } from '@/components/Controls'
import { DrawingTools, type DrawingTool } from '@/components/DrawingTools'
import { EditGridModal } from '@/components/EditGridModal'
import { Header } from '@/components/Header'
import { PixelGrid } from '@/components/PixelGrid'

function App() {

  const [gridWidth, setGridWidth] = useState<number>(10)
  const [gridHeight, setGridHeight] = useState<number>(10)
  const [currentColor, setCurrentColor] = useState<string>("#000000")
  const [backgroundColor, setBackgroundColor] = useState<string>("#FFFFFF")
  const [currentTool, setCurrentTool] = useState<DrawingTool>('PENCIL')

  const handleSubmitEditGrid = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const editGridFormData = new FormData(event.currentTarget)
    const newHeight = editGridFormData.get('height')?.valueOf() as number
    const newWidth = editGridFormData.get('width')?.valueOf() as number
    setGridHeight(newHeight)
    setGridWidth(newWidth)
  }

  const handleChangeColor = (event: ChangeEvent<HTMLInputElement>, colorType: ColorType) => {
    const selectedColor = event.target.value
    if (colorType === 'Pencil') {
      setCurrentColor(selectedColor)
    } else if (colorType === 'Background') {
      setBackgroundColor(selectedColor)
    }
  }

  const handleChangeDrawingTool = (selectedTool: DrawingTool) => {
    setCurrentTool(selectedTool)
  }

  return (
    <div className="flex flex-col h-screen w-screen">
      <Header />
      <div className="flex-1 flex flex-row justify-start gap-4 items-center">
        <Controls>
          <DrawingTools 
            currentTool={currentTool} 
            handleChange={handleChangeDrawingTool}
          />
          <ColorPicker handleChange={handleChangeColor} colorType="Pencil" />
          <ColorPicker handleChange={handleChangeColor} colorType="Background" />
          <EditGridModal 
            gridHeight={gridHeight} 
            gridWidth={gridWidth} 
            handleSubmit={handleSubmitEditGrid}
          />
        </Controls>
        <PixelGrid 
          height={gridHeight} 
          width={gridWidth} 
          currentColor={currentColor}
          backgroundColor={backgroundColor}
          currentTool={currentTool}
        />
      </div>
    </div>
  )
}

export default App
