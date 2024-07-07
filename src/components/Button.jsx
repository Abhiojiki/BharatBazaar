import React from "react"

export default function Button({
    children,
    type="button",
    bgColor = "bg-blue-600",
    textColor="text-white",
    classname= "",
    py="py-2",
    ...props
}){
    return (
        <button className={`px-4 ${py} rounded-lg ${bgColor} ${textColor} ${classname}`} {...props} >
        {children}

        </button>

    )
}