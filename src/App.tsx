import './App.css'
import { PixelGrid } from '@/components/PixelGrid'
import { Button } from '@/components/ui/button'
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { useState, type FormEvent } from 'react'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'

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
        <Dialog>
          <DialogTrigger asChild>
            <Button>Edit</Button>
          </DialogTrigger>
          <DialogContent>
            <form className="grid gap-4" onSubmit={handleSubmitEditGrid}>
              <DialogHeader>
                <DialogTitle>Edit Grid</DialogTitle>
              </DialogHeader>
              <div className="grid gap-4">
                <div className="grid gap-3">
                  <Label htmlFor="grid-height">Height</Label>
                  <Input id="grid-height" name="height" defaultValue={gridHeight} type="number" min={1} required/>
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="grid-width">Width</Label>
                  <Input id="grid-width" name="width" defaultValue={gridWidth} type="number" min={1} required/>
                </div>
              </div>
              <DialogFooter>
                <DialogClose asChild>
                  <Button variant="outline">Cancel</Button>
                </DialogClose>
                <Button type="submit">Save changes</Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
        <PixelGrid height={gridHeight} width={gridWidth} />
      </div>
    </div>
  )
}

export default App
