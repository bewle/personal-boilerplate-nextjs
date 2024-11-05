"use client";
import { Moon, Sun } from "lucide-react";
import { Button } from "./ui/button";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
    const { theme, setTheme } = useTheme();

    return (
        <Button
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
            {theme === "dark" ? (
                <Moon className="transition-transform motion-preset-shrink" />
            ) : (
                <Sun className="transition-transform motion-preset-shrink" />
            )}
        </Button>
    );
}
