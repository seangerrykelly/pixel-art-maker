import './App.css'
import { EditGridModal } from '@/components/EditGridModal'
import { PixelGrid } from '@/components/PixelGrid'
import { useState, type FormEvent } from 'react'

function App() {

  const [gridWidth, setGridWidth] = useState<number>(10)
  const [gridHeight, setGridHeight] = useState<number>(10)

  const handleSubmitEditGrid = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const editGridFormData = new FormData(event.currentTarget)
    const newHeight = editGridFormData.get('height')?.valueOf() as number
    const newWidth = editGridFormData.get('width')?.valueOf() as number
    setGridHeight(newHeight)
    setGridWidth(newWidth)
  }

  return (
    <div className="bg-background flex justify-center w-screen h-screen">
      <div className="flex items-center">
        <EditGridModal 
          gridHeight={gridHeight} 
          gridWidth={gridWidth} 
          handleSubmit={handleSubmitEditGrid}
        />
        <PixelGrid height={gridHeight} width={gridWidth} />
      </div>
    </div>
  )
}

export default App
