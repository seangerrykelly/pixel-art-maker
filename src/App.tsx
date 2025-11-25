import './App.css'
import { useState, type ChangeEvent, type FormEvent } from 'react'

import { ColorPicker } from '@/components/ColorPicker'
import { Controls } from '@/components/Controls'
import { DrawingTools, type DrawingTool } from '@/components/DrawingTools'
import { EditGridModal } from '@/components/EditGridModal'
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

  const handleChangeColor = (event: ChangeEvent<HTMLInputElement>) => {
    setCurrentColor(event.target.value)
  }

  const handleChangeDrawingTool = (selectedTool: DrawingTool) => {
    setCurrentTool(selectedTool)
  }

  return (
    <div className="bg-background flex justify-center w-screen h-screen">
      <div className="flex flex-col justify-center gap-4 items-center">
        <Controls>
          <DrawingTools 
            currentTool={currentTool} 
            handleChange={handleChangeDrawingTool}
          />
          <ColorPicker handleChange={handleChangeColor} />
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
