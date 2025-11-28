import { Button } from "@/components/ui/button"

type ExportImageProps = {
    handleExportImage: () => void
}

export const ExportImage = ({ handleExportImage }: ExportImageProps) => {
    return (
        <Button onClick={handleExportImage}>Export</Button>
    )
}