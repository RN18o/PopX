export default function Button({children='Hove Me', isPrimary=true}){
    return (
        <button
            className={
                `flex flex-1 items-center justify-center h-10 px-5 rounded-md font-semibold ${isPrimary ? "bg-blue-600 hover:bg-blue-700 text-white" : "bg-purple-300 opacity-80 hover:opacity-100 text-black"} `}
        >
            {children}
        </button>
    )
}