type PixelGridProps = {
    height: number
    width: number
}

export const PixelGrid = ({ height, width }: PixelGridProps) => {
    const cellCount = height * width
    const cells = Array.from({ length: cellCount }, (_, index) => index + 1)

    return(
        <div 
            className="grid gap-0"
            style={{
                gridTemplateColumns: `repeat(${width}, auto)`,
                gridTemplateRows: `repeat(${height}, auto)`,
            }}
        >
            {cells.map((_, i) => (
                <div className="border border-foreground box-content">
                    {i}
                </div>
            ))}
        </div>
    )
}