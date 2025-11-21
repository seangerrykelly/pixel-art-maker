import { PixelGridCell } from "./PixelGridCell"

type PixelGridProps = {
    height: number
    width: number
    currentColor: string
}

export const PixelGrid = ({ height, width, currentColor }: PixelGridProps) => {
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
                <PixelGridCell currentColor={currentColor}/>
            ))}
        </div>
    )
}