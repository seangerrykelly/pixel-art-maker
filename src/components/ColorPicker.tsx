import type { ChangeEvent } from 'react'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export type ColorType = 'Cell' | 'Background' | 'Border'

type ColorPickerProps = {
    handleChange: (event: ChangeEvent<HTMLInputElement>, colorType: ColorType) => void
    colorType: ColorType
    defaultColor: string
}

export const ColorPicker = ({ handleChange, colorType, defaultColor }: ColorPickerProps) => {
    return (
        <div className="flex gap-2">
            <Label htmlFor='color-picker'>{colorType} Color</Label>
            <Input
                className="w-10 p-1"
                type="color" 
                name='color-picker' 
                id='color-picker' 
                onChange={(e) => handleChange(e, colorType)}
                defaultValue={defaultColor}
            />
        </div>
    )
}