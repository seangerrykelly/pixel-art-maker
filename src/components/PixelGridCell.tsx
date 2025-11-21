import { useState, type MouseEvent } from "react"

type PixelGridCellProps = {
    currentColor: string
}

export const PixelGridCell = ({ currentColor }: PixelGridCellProps) => {

    const [cellColor, setCellColor] = useState<string>('#FFFFFF')

    const handleClickCell = (event: MouseEvent<HTMLDivElement>) => {
        setCellColor(currentColor)
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