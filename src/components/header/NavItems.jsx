import Button from "./../Button.jsx";

const STRINGS = {
    en: {
        becomeHelper: "Become a Helper",
        getHelper: "Get A Helper",
    },
    sv: {
        becomeHelper: "Bli en Helper",
        getHelper: "Få en Helper",
    },
}


export default function NavItems({ locale }) {
    return (
        <>
            <a className="px-4 py-2 text-lg font-semibold focus-visible:outline focus-visible:outline-offset-2 cursor-pointer text-gray-700 hover:text-gray-500 focus-visible:outline-app-600 text-center" href="https://helpicon.se/become-a-helper">
                {STRINGS[locale].becomeHelper}
            </a>
            <Button href="https://helpicon.se/signup">
                {STRINGS[locale].getHelper}
            </Button>
        </>
    )
}
