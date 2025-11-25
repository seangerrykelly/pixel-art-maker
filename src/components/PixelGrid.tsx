import type { DrawingTool } from "@/components/DrawingTools"
import { PixelGridCell } from "@/components/PixelGridCell"

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

    return(
        <div 
            className="grid gap-0"
            style={{
                gridTemplateColumns: `repeat(${width}, 1rem)`,
                gridTemplateRows: `repeat(${height}, 1rem)`,
            }}
        >
            {cells.map((_) => (
                <PixelGridCell 
                    currentColor={currentColor}
                    backgroundColor={backgroundColor}
                    currentTool={currentTool}
                />
            ))}
        </div>
    )
}