export default function Footer() {
    return (
        <div className="bg-app-200">
            <div className="container mx-auto py-12 px-6">
                <img src="/assets/logo.svg" alt="Logo" className="h-18" />
            </div>
            <div className="bg-gray-400 opacity-50 h-[1px] w-full"/>
            <div className="container mx-auto py-12 px-6 text-gray-600">
                <div>
                    Helpicon AB © 2024. All Rights Reserved
                </div>
                <div>
                    Org. nr: 559295-4241
                </div>
                <div>
                    Address: Studentgatan 6, 211 38, Malmö, Sweden
                </div>
            </div>
        </div>
    )
}
