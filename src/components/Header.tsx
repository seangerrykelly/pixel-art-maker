import { Button } from "@/components/ui/button"
import { useTheme } from "@/components/ThemeProvider"
import { ExportImage } from "./ExportImage"

export const Header = () => {
    const { setTheme, theme } = useTheme()

    const toggleTheme = () => {
        if (theme === 'dark') {
            setTheme('light')
        } else {
            setTheme('dark')
        }
    }

    const handleExportImage = () => {
        console.log('we made it')
    }

    return (
        <div className="p-1 shadow-md w-full flex items-center justify-between border">
            <h1>Pixel Art Maker</h1>
            <div className="flex gap-2">
                <Button onClick={toggleTheme}>Toggle theme</Button>
                <ExportImage handleExportImage={handleExportImage}/>
            </div>
        </div>
    )
}