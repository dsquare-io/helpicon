import Button from "./Button.jsx";

export default function Hero() {
    return (
        <div className="container mx-auto py-12 px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 text-center lg:text-left">
                <div className="flex items-center">
                    <div className="flex flex-col gap-y-8">
                        <h2 className="text-5xl lg:text-7xl font-semibold">
                            Få snabb och pålitlig hjälp idag
                        </h2>
                        <p className="text-2xl max-w-3/4 mx-auto lg:mx-0">
                            Du är inte ensam längre. Hjälpen är närmare än du tror. Hitta din Helper snabbt! Spara din värdefulla tid!
                        </p>
                        <div className="flex gap-x-4 justify-center lg:justify-start">
                            <Button>Publicera ett uppdrag</Button>
                            <Button variant="secondary">Hitta Helpers</Button>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center lg:items-end">
                    <img src="/assets/banner.png" alt="Banner" className="aspect-auto h-80 lg:h-120 "/>
                </div>
            </div>
        </div>
    )
}
