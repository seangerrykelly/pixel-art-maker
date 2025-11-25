import { useEffect, useState } from "react"
import type { DrawingTool } from "@/components/DrawingTools"

type PixelGridCellProps = {
    currentColor: string
    backgroundColor: string
    currentTool: DrawingTool
}

export const PixelGridCell = ({ currentColor, backgroundColor, currentTool }: PixelGridCellProps) => {

    const [cellColor, setCellColor] = useState<string>(backgroundColor)
    const [isFilled, setIsFilled] = useState<boolean>(false)

    useEffect(() => {
        if (!isFilled) {
            setCellColor(backgroundColor)
        }
    }, [backgroundColor])

    const handleClickCell = () => {
        if (currentTool === 'PENCIL') {
            setCellColor(currentColor)
            setIsFilled(true)
        } else if (currentTool === 'ERASER') {
            setCellColor(backgroundColor)
            setIsFilled(false)
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