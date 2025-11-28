import { Button } from "@/components/ui/button"
import { exportImage } from "@/utils/exportImage"

export const ExportImage = () => {
    return (
        <Button onClick={exportImage}>Export</Button>
    )
}