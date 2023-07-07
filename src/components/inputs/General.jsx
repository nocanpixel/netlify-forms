export const GeneralInput = ({title="Title", placeHolder="Place holder"}) => {
    return(
        <>
            <div className="text-sm text-gray-500">{title}</div>
            <div className="relative mt-1">
                <input placeholder={`${placeHolder}`} className="relative text-gray-600 h-10 py-1.5 w-full cursor-default rounded-md bg-white pl-3 pr-10 text-left shadow-sm ring-1 appearance-none ring-indigo-700 ring-inset focus:outline-none focus-ring-2 focus:ring-indigo-400 text-sm" type="text" />
            </div>
        </>
    )
}