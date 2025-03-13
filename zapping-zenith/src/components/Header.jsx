
import Button from "./Button.jsx";

export default function Header() {
    return (
        <header className="shadow-md">
            <div className="container flex justify-between items-center p-6 mx-auto">
                <a href="/">
                    <img src="/assets/logo.svg" alt="Logo Image" className="h-12 my-2"/>
                </a>
                <div className="flex gap-4">
                    <Button variant="text">Become A Helper</Button>
                    <Button>Get A Helper</Button>
                    <Button variant="secondary">Download App</Button>
                </div>
            </div>
        </header>
    )
}
