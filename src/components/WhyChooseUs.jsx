function WhyBox({header, children, icon}) {
    return (
        <div className="flex flex-col lg:flex-row">
            <div className="mb-2 lg:mr-6 lg:shrink-0 mx-auto">
                <img src={icon} alt={header} className="w-16" />
            </div>
            <div className="flex flex-col items-center lg:items-start">
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
                <div className="flex flex-col space-y-12 p-8 lg:pr-0 items-center lg:items-start">
                    <h3 className="text-3xl lg:text-5xl font-semibold mt-4">Varför välja oss</h3>

                    <WhyBox header="Säkra betalningar" icon="./assets/card-icon-price.png">
                        <p className="text-xl">Trygghet och säkerhet i varje transaktion.</p>
                        <img src="./assets/flexible-services.png" alt="Flexible and affordable services" className="mt-4 h-60 lg:hidden" />
                    </WhyBox>
                    <WhyBox header="Enkel att använda" icon="./assets/card-icon-verified.png">
                        <p className="text-xl">
                            Användarvänligt gränssnitt för en sömlös och intuitiv upplevelse. Enkel navigering och
                            smidigt utförande av uppdraget.
                        </p>
                        <img src="./assets/verified-cleaners.png" alt="Local and Verified Cleaners" className="mt-4 h-60 lg:hidden" />
                    </WhyBox>
                    <WhyBox header="Pålitliga betyg & recensioner" icon="./assets/card-icon-security.png">
                        <p className="text-xl">
                            Fatta informerade beslut baserat på pålitliga betyg och recensioner. Dra nytta av andras
                            erfarenheter för att säkerställa kvalitetsservice.
                        </p>
                        <img src="./assets/security-and-simplifity.png" alt="Security and simplicity" className="mt-4 -mb-8 h-60 lg:hidden" />
                    </WhyBox>
                </div>
                <div className="hidden lg:flex pr-8 justify-end">
                    <img src="./assets/why-choose-us.png" alt="Why Choose us" className="max-h-160"/>
                </div>
            </div>
        </div>
    )
}
