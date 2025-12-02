import { useState, type ChangeEvent, type FormEvent } from 'react'

import { ColorPicker, type ColorType } from '@/components/ColorPicker'
import { Controls } from '@/components/Controls'
import { DrawingTools, type DrawingTool } from '@/components/DrawingTools'
import { EditGridModal } from '@/components/EditGridModal'
import { GridLineToggle } from '@/components/GridLineToggle'
import { Header } from '@/components/Header'
import { PixelGrid } from '@/components/PixelGrid'
import { ThemeProvider } from '@/components/ThemeProvider'

function App() {

  const [gridWidth, setGridWidth] = useState<number>(20)
  const [gridHeight, setGridHeight] = useState<number>(20)
  const [currentColor, setCurrentColor] = useState<string>("#000000")
  const [backgroundColor, setBackgroundColor] = useState<string>("#FFFFFF")
  const [borderColor, setBorderColor] = useState<string>("#000000")
  const [currentTool, setCurrentTool] = useState<DrawingTool>('PENCIL')
  const [areGridLinesEnabled, setAreGridLinesEnabled] = useState<boolean>(true)

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
    if (colorType === 'Cell') {
      setCurrentColor(selectedColor)
    } else if (colorType === 'Background') {
      setBackgroundColor(selectedColor)
    } else if (colorType === 'Border') {
      setBorderColor(selectedColor)
    }
  }

  const handleChangeDrawingTool = (selectedTool: DrawingTool) => {
    setCurrentTool(selectedTool)
  }

  const handleToggleGridLines = (checked: boolean) => {
    console.log(checked)
    setAreGridLinesEnabled(checked)
  }

  return (
    <ThemeProvider defaultTheme='dark'>
      <div className="flex flex-col h-screen w-screen">
        <Header />
        <div className="flex-1 flex sm:flex-row flex-col-reverse justify-start items-center">
          <Controls>
            <DrawingTools 
              currentTool={currentTool} 
              handleChange={handleChangeDrawingTool}
            />
            <ColorPicker handleChange={handleChangeColor} colorType="Cell" defaultColor={currentColor} />
            <ColorPicker handleChange={handleChangeColor} colorType="Background" defaultColor={backgroundColor} />
            <ColorPicker handleChange={handleChangeColor} colorType="Border" defaultColor={borderColor} />
            <GridLineToggle handleToggleChange={handleToggleGridLines}/>
            <EditGridModal 
              gridHeight={gridHeight} 
              gridWidth={gridWidth} 
              handleSubmit={handleSubmitEditGrid}
            />
          </Controls>
          <div className='flex-1 flex h-full w-full justify-center overflow-hidden'>
            <PixelGrid 
              height={gridHeight} 
              width={gridWidth} 
              currentColor={currentColor}
              backgroundColor={backgroundColor}
              borderColor={borderColor}
              currentTool={currentTool}
              showGridLines={areGridLinesEnabled}
            />
          </div>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
