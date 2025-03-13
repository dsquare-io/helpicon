import c from "clsx";
import factLeftArrow from '../assets/fact-left-arrow.png';
import factRightArrow from '../assets/fact-right-arrow.png';
import factDownArrow from '../assets/fact-down-arrow.png';

function FactBox({ title, number, classname }) {
    return (
        <div className={c(
            "flex flex-col items-center justify-center p-4 bg-app-200 bg-opacity-10 rounded-4xl w-xs",
            classname
        )}>
            <p className="text-2xl font-semibold">{title}</p>
            <h4 className="text-3xl text-app-600">{number}</h4>
        </div>
    )
}


export default function Facts() {
    return (
        <div className="py-12 lg:py-24 px-6 bg-[url(/img/facts-bg.jpg)] bg-cover bg-center">
            <div className="container mx-auto flex flex-col items-center">
                <div className="flex mb-8">
                    <img src={factLeftArrow} alt="Left Arrow" className="h-40 lg:hidden -rotate-45 mt-8" />
                    <h3 className="text-5xl font-semibold text-center text-white">Facts</h3>
                    <img src={factRightArrow} alt="Right Arrow" className="h-40 lg:hidden rotate-45 mt-8" />
                </div>
                <div className="grid lg:grid-cols-3 max-w-5xl gap-y-8">
                    <div className="flex flex-col items-center">
                        <img src={factLeftArrow} alt="Left Arrow" className="h-40 ml-auto hidden lg:block" />
                        <FactBox title="Number of Helpess" number="27230" />
                    </div>
                    <div className="flex flex-col items-center">
                        <img src={factDownArrow} alt="Down Arrow" className="h-80 hidden lg:block" />
                        <FactBox title="Registered Helpers" number="7000+" />
                    </div>
                    <div className="flex flex-col items-center">
                        <img src={factRightArrow} alt="Right Arrow" className="h-40 mr-auto hidden lg:block" />
                        <FactBox title="Total Users" number="33000+" />
                    </div>
                </div>
            </div>
        </div>
    )
}
