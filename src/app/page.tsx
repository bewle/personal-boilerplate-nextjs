import ThemeToggle from "@/components/ThemeToggle";

export default function Page() {
    return (
        <div className="grid place-items-center h-screen">
            <p className="text-muted-foreground text-3xl">
                clear page.tsx to get started
            </p>
            <ThemeToggle />
        </div>
    );
}
