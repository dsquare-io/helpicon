import {useState} from "react";
import {Bars3Icon, XMarkIcon} from '@heroicons/react/24/outline'
import AnimateHeight from 'react-animate-height';

import NavItems from "./NavItems.jsx";

export default function Header({ locale }) {
    const [isOpen, setIsOpen] = useState(false);
    const IconClass = isOpen ? XMarkIcon : Bars3Icon;

    return (
        <>
            <header className="shadow-md">
                <div className="container flex justify-between items-center p-6 mx-auto">
                    <a href="/">
                        <img src="/assets/logo.svg" alt="Logo Image" className="h-12 my-2"/>
                    </a>
                    <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
                        <IconClass aria-hidden="true" className="size-6"/>
                    </button>
                    <div className="hidden lg:flex gap-4">
                        <NavItems locale={locale}/>
                    </div>
                </div>
            </header>
            <AnimateHeight duration={500} height={isOpen ? 'auto' : 0}>
                <div className="py-6 px-6 flex flex-col gap-4">
                    <NavItems locale={locale}/>
                </div>
            </AnimateHeight>
        </>
    )
}
