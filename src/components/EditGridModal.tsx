import { Button } from '@/components/ui/button'
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import type { FormEvent } from 'react'

type EditGridModalProps = {
    gridHeight: number
    gridWidth: number
    handleSubmit: (event: FormEvent<HTMLFormElement>) => void
}

export const EditGridModal = ({ gridHeight, gridWidth, handleSubmit }: EditGridModalProps) => {
    return (
        <Dialog>
            <DialogTrigger asChild>
            <Button>Edit</Button>
            </DialogTrigger>
            <DialogContent>
            <form className="grid gap-4" onSubmit={handleSubmit}>
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
    )
}