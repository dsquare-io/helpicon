import cardIconTask from '../assets/card-icon-task.png';
import cardIconPrice from '../assets/card-icon-price.png';
import cardIconCandidate from '../assets/card-icon-candidate.png';

import arrowLeft from '../assets/arrow-left.svg';
import arrowRight from '../assets/arrow-right.svg';
import CTAButton from "./CTAButton.jsx";


export default function HowItWorks() {
    return (
        <div className="container mx-auto py-12 px-6">
            <h3 className="text-3xl lg:text-5xl font-semibold text-center">How does it work?</h3>
            <div className="grid lg:grid-cols-3 gap-x-40 gap-y-8 text-center mt-12">
                <div className="shadow-lg bg-white rounded-4xl p-4">
                    <img src={cardIconTask} alt="Icon Task" className="h-20 mx-auto block my-4"/>
                    <h4 className="text-2xl font-semibold mb-4">Describe your task</h4>
                    <p>
                        Provide clear details and requirements to help Helpers understand your needs.
                    </p>
                </div>
                <div className="shadow-lg bg-white rounded-4xl p-4">
                    <img src={cardIconPrice} alt="Icon Task" className="h-20 mx-auto block my-4"/>
                    <h4 className="text-2xl font-semibold mb-4">Describe your task</h4>
                    <p>
                        Provide clear details and requirements to help Helpers understand your needs.
                    </p>
                </div>
                <div className="shadow-lg bg-white rounded-4xl p-4">
                    <img src={cardIconCandidate} alt="Icon Task" className="h-20 mx-auto block my-4"/>
                    <h4 className="text-2xl font-semibold mb-4">Describe your task</h4>
                    <p>
                        Provide clear details and requirements to help Helpers understand your needs.
                    </p>
                </div>
            </div>

            <div className="flex space-between">
                <img src={arrowLeft} alt="Arrow Left" className="h-30 lg:h-60" />
                <div className="flex-1 flex items-end justify-center mb-12 mt-8">
                    <CTAButton>Get App</CTAButton>
                </div>
                <img src={arrowRight} alt="Arrow Right" className="h-30 lg:h-60" />
            </div>
        </div>
    )
}
