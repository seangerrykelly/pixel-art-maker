import type { ChangeEvent } from 'react'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

type ColorPickerProps = {
    handleChange: (event: ChangeEvent<HTMLInputElement>) => void
}

export const ColorPicker = ({ handleChange }: ColorPickerProps) => {
    return (
        <div className="flex gap-2">
            <Label htmlFor='color-picker'>Color</Label>
            <Input
                className="w-10 p-1"
                type="color" 
                name='color-picker' 
                id='color-picker' 
                onChange={handleChange} 
            />
        </div>
    )
}