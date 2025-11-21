import './App.css'
import { ColorPicker } from '@/components/ColorPicker'
import { EditGridModal } from '@/components/EditGridModal'
import { PixelGrid } from '@/components/PixelGrid'
import { useState, type ChangeEvent, type FormEvent } from 'react'
import { Controls } from './components/Controls'

function App() {

  const [gridWidth, setGridWidth] = useState<number>(10)
  const [gridHeight, setGridHeight] = useState<number>(10)
  const [currentColor, setCurrentColor] = useState<string>("#000000")

  const handleSubmitEditGrid = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const editGridFormData = new FormData(event.currentTarget)
    const newHeight = editGridFormData.get('height')?.valueOf() as number
    const newWidth = editGridFormData.get('width')?.valueOf() as number
    setGridHeight(newHeight)
    setGridWidth(newWidth)
  }

  const handleChangeColor = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value)
    setCurrentColor(event.target.value)
  }

  return (
    <div className="bg-background flex justify-center w-screen h-screen">
      <div className="flex flex-col justify-center gap-4 items-center">
        <Controls>
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
        />
      </div>
    </div>
  )
}

export default App
