import c from "clsx";

const CLASSNAMES_BY_VARIANT = {
    primary: "shadow-sm bg-app-600 text-white hover:bg-app-700 focus-visible:outline-app-600",
    secondary: "shadow-sm bg-white border-1 border-gray-300 text-gray-700 hover:bg-gray-200 focus-visible:outline-gray-300",
    text: "text-gray-700 hover:text-gray-500 focus-visible:outline-app-600",
}

export default function Button({className, variant, ...props}) {
    return <button className={c(
        className,
        "rounded-md px-4 py-2 text-lg font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 cursor-pointer",
        CLASSNAMES_BY_VARIANT[variant] || CLASSNAMES_BY_VARIANT.primary
    )} {...props} />;
}
