import { useEffect, useState } from "react"
import type { DrawingTool } from "@/components/DrawingTools"

type PixelGridCellProps = {
    currentColor: string
    backgroundColor: string
    borderColor: string
    currentTool: DrawingTool
    isMouseDown: boolean
    showGridLines: boolean
}

export const PixelGridCell = ({ currentColor, backgroundColor, borderColor, currentTool, isMouseDown, showGridLines }: PixelGridCellProps) => {

    const [cellColor, setCellColor] = useState<string>(backgroundColor)
    const [isFilled, setIsFilled] = useState<boolean>(false)

    useEffect(() => {
        if (!isFilled) {
            setCellColor(backgroundColor)
        }
    }, [backgroundColor])

    // isInitialClick parameter needed because isMouseDown won't be updated fast enough on first click
    const drawOnCell = (isInitialClick: boolean) => {
        if (!isInitialClick && !isMouseDown) {
            // Don't do anything if user isn't clicking mouse
            return
        }

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
            className="border box-border"
            style={{
                background: cellColor,
                borderColor: showGridLines ? borderColor : cellColor
            }}
            onMouseDown={() => drawOnCell(true)}
            onMouseEnter={() => drawOnCell(false)}
        >
                    
        </div>
    )
}