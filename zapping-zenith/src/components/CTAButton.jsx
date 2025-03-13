import c from "clsx";

export default function CTAButton({className, ...props}) {
    return <button className={c(
        className,
        "px-8 py-4 text-2xl font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 cursor-pointer",
        "text-app-700 bg-app-200 border-2 border-r-6 border-b-6 border-app-600 shadow-md rounded-2xl"
    )} {...props} />;
}
