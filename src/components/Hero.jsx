import bannerImage from '../assets/banner.png'
import Button from "./Button.jsx";

export default function Hero() {
    return (
        <div className="container mx-auto py-12 px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 text-center lg:text-left">
                <div className="flex items-center">
                    <div className="flex flex-col gap-y-8">
                        <h2 className="text-7xl font-semibold">
                            Get swift and turstworthy support today.
                        </h2>
                        <p className="text-2xl max-w-3/4 mx-auto lg:mx-0">
                            You're not alone—help is just around the corner. Find your assistant instantly!
                            Save your precious time
                        </p>
                        <div className="flex gap-x-4 justify-center lg:justify-start">
                            <Button>Post a Task</Button>
                            <Button variant="secondary">Find Helpers</Button>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center lg:items-end">
                    <img src={bannerImage} alt="Banner" className="aspect-auto h-100 lg:h-120 "/>
                </div>
            </div>
        </div>
    )
}
