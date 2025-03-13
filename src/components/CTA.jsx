import CTAButton from "./CTAButton.jsx";

export default function CTA() {
    return (
        <div className="bg-app-200 py-12 lg:py-24 px-6">
            <div className="relative mx-auto max-w-4xl w-full bg-app-green-200 rounded-2xl shadow-lg text-center px-12 py-24 border-2 border-r-6 border-b-6 border-app-green-300">
                <div className="text-xl text-app-800">
                    Get RUT deduction with Helpicon
                </div>
                <CTAButton className="mt-4">
                    <div className="px-4 py-2">
                        Post an Assignment
                    </div>
                </CTAButton>

                <img src="/assets/cta-arrow-top.png" alt="Arrow Top" className="block h-40 absolute left-0 top-0" />
                <img src="/assets/cta-arrow-bottom.png" alt="Arrow Bottom" className="block h-40 absolute right-0 bottom-0" />
            </div>
        </div>
    )
}
