import './App.css'
import { PixelGrid } from '@/components/PixelGrid'

function App() {

  return (
    <div className="bg-background flex justify-center w-screen h-screen">
      <div className="flex items-center">
        <PixelGrid width={10} height={10} />
      </div>
    </div>
  )
}

export default App
