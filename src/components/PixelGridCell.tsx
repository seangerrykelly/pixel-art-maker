import { useState } from "react"
import type { DrawingTool } from "@/components/DrawingTools"

type PixelGridCellProps = {
    currentColor: string
    backgroundColor: string
    currentTool: DrawingTool
}

export const PixelGridCell = ({ currentColor, backgroundColor, currentTool }: PixelGridCellProps) => {

    const [cellColor, setCellColor] = useState<string>(backgroundColor)

    const handleClickCell = () => {
        if (currentTool === 'PENCIL') {
            setCellColor(currentColor)
        } else if (currentTool === 'ERASER') {
            setCellColor(backgroundColor)
        }
    }

    return (
        <div 
            className="border border-foreground box-content"
            style={{
                background: cellColor
            }}
            onClick={handleClickCell}
        >
                    
        </div>
    )
}