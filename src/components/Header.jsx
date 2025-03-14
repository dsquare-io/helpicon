import {useState} from "react";
import {Bars3Icon, XMarkIcon} from '@heroicons/react/24/outline'
import AnimateHeight from 'react-animate-height';

import Button from "./Button.jsx";

function NavItems() {
    return (
        <>
            <a className="px-4 py-2 text-lg font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 cursor-pointer text-gray-700 hover:text-gray-500 focus-visible:outline-app-600 text-center" href="https://helpicon.se/become-a-helper">Bli en Helper</a>
            <Button>Get A Helper</Button>
            <Button variant="secondary">Download App</Button>
        </>
    )
}

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const IconClass = isOpen ? XMarkIcon : Bars3Icon;

    return (
        <>
            <header className="shadow-md">
                <div className="container flex justify-between items-center p-6 mx-auto">
                    <a href="/">
                        <img src="./assets/logo.svg" alt="Logo Image" className="h-12 my-2"/>
                    </a>
                    <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
                        <IconClass aria-hidden="true" className="size-6"/>
                    </button>
                    <div className="hidden lg:flex gap-4">
                        <NavItems />
                    </div>
                </div>
            </header>
            <AnimateHeight duration={500} height={isOpen ? 'auto' : 0}>
                <div className="py-6 px-6 flex flex-col gap-4">
                    <NavItems />
                </div>
            </AnimateHeight>
        </>
    )
}
