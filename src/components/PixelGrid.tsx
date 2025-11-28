import type { DrawingTool } from "@/components/DrawingTools"
import { PixelGridCell } from "@/components/PixelGridCell"
import { useEffect, useRef, useState } from "react"

type PixelGridProps = {
    height: number
    width: number
    currentColor: string
    backgroundColor: string
    currentTool: DrawingTool
}

export const PixelGrid = ({ height, width, currentColor, backgroundColor, currentTool}: PixelGridProps) => {
    const cells = Array.from({ length: height }, (_) => Array.from({ length: width }, (_, index) => index + 1))

    const [isMouseDown, setIsMouseDown] = useState<boolean>(false)

    const pixelGridContainerRef = useRef<HTMLDivElement>(null)
    const zoomScaleRef = useRef(1)

    useEffect(() => {
        const handleMouseUp = () => setIsMouseDown(false)

        const handleZoom = (event: WheelEvent) => {
            if (!pixelGridContainerRef.current || !pixelGridContainerRef.current.contains(event.target as Node)) {
                return
            }

            // Prevent regular scrolling behaviour
            event.preventDefault()

            const zoomFactor = 0.0015
            zoomScaleRef.current = Math.min(Math.max(zoomScaleRef.current - event.deltaY * zoomFactor, 0.3), 4)

            pixelGridContainerRef.current.style.transform = `scale(${zoomScaleRef.current})`
            pixelGridContainerRef.current.style.transformOrigin = 'center center'
        }

        window.addEventListener('mouseup', handleMouseUp)
        window.addEventListener('wheel', handleZoom)
        return () => {
            window.removeEventListener('mouseup', handleMouseUp)
            window.removeEventListener('wheel', handleZoom)
        }
    }, [])

    return(
        <div 
            className="flex h-full flex-1 items-center justify-center"
            ref={pixelGridContainerRef}
        >
            <div 
                className="grid gap-0"
                style={{
                    gridTemplateColumns: `repeat(${width}, 0.5rem)`,
                    gridTemplateRows: `repeat(${height}, 0.5rem)`,
                }}
                onMouseDown={() => setIsMouseDown(true)}
                onMouseUp={() => setIsMouseDown(false)}
            >
                {cells.flatMap((row, rowIndex) => 
                    row.map((_, colIndex) => (
                        <PixelGridCell 
                            key={`grid-cell-${rowIndex}-${colIndex}`}
                            currentColor={currentColor}
                            backgroundColor={backgroundColor}
                            currentTool={currentTool}
                            isMouseDown={isMouseDown}
                        />
                    ))
                )}
            </div>
        </div>
    )
}