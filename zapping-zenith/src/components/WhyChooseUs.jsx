function WhyBox({header, children, icon}) {
    return (
        <div className="flex">
            <div className="mr-6 shrink-0">
                <img src={icon} alt={header} className="h-auto w-16" />
            </div>
            <div>
                <h4 className="text-2xl">{header}</h4>
                {children}
            </div>
        </div>
    )
}

export default function WhyChooseUs() {
    return (
        <div className="container mx-auto py-12 px-6">
            <div className="bg-[#292A3C] grid lg:grid-cols-2 text-white rounded-3xl items-center">
                <div className="flex flex-col space-y-12 py-8 pl-8">
                    <h3 className="text-3xl lg:text-5xl font-semibold mt-4">Why choose Helpicon?</h3>

                    <WhyBox header="Flexible and affordable services" icon="/assets/card-icon-price.png">
                        <p className="text-xl">You set the price and choose what you want to pay</p>
                    </WhyBox>
                    <WhyBox header="Local and Verified Cleaners" icon="/assets/card-icon-verified.png">
                        <p className="text-xl">All our cleaners are verified and rated by other users</p>
                    </WhyBox>
                    <WhyBox header="Security and simplicity" icon="/assets/card-icon-security.png">
                        <p className="text-xl">The app makes it easy to book and communicate with your cleaner, and payment is made securely via the app.</p>
                    </WhyBox>
                </div>
                <div className="pr-8 flex justify-end">
                    <img src="/assets/why-choose-us.png" alt="Why Choose us" className="h-160"/>
                </div>
            </div>
        </div>
    )
}
