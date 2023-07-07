export const TextArea = ({ title = "Title" }) => {
    return (
        <>
            <div className="text-sm text-gray-500">{title}</div>
            <div className="relative mt-1">
                <textarea rows={5} className="relative py-1.5 w-full cursor-default rounded-md bg-white pl-3 pr-10 text-left text-gray-600 shadow-sm ring-1 appearance-none ring-indigo-700 ring-inset focus:outline-none focus-ring-2 focus:ring-indigo-400 text-sm"/>
            </div>
        </>
    )
}