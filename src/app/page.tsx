import ThemeToggle from "@/components/ThemeToggle";

export default function Page() {
    return (
        <div className="grid place-items-center h-screen">
            <div className="flex flex-col h-48 justify-around items-center">
                <p className="font-bold text-3xl">
                    clear page.tsx to get started
                </p>
                <ThemeToggle />
            </div>
        </div>
    );
}
