import type { DrawingTool } from "@/components/DrawingTools"
import { PixelGridCell } from "@/components/PixelGridCell"
import { useEffect, useState } from "react"

type PixelGridProps = {
    height: number
    width: number
    currentColor: string
    backgroundColor: string
    currentTool: DrawingTool
}

export const PixelGrid = ({ height, width, currentColor, backgroundColor, currentTool}: PixelGridProps) => {
    const cellCount = height * width
    const cells = Array.from({ length: cellCount }, (_, index) => index + 1)

    const [isMouseDown, setIsMouseDown] = useState<boolean>(false)

    useEffect(() => {
        const handleMouseUp = () => setIsMouseDown(false)
        window.addEventListener('mouseup', handleMouseUp)
        return () => window.removeEventListener('mouseup', handleMouseUp)
    }, [])

    return(
        <div 
            className="grid gap-0"
            style={{
                gridTemplateColumns: `repeat(${width}, 1rem)`,
                gridTemplateRows: `repeat(${height}, 1rem)`,
            }}
            onMouseDown={() => setIsMouseDown(true)}
            onMouseUp={() => setIsMouseDown(false)}
        >
            {cells.map((_) => (
                <PixelGridCell 
                    currentColor={currentColor}
                    backgroundColor={backgroundColor}
                    currentTool={currentTool}
                    isMouseDown={isMouseDown}
                />
            ))}
        </div>
    )
}