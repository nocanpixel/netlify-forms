export const IconButton = ({title="title", type}) => {
    return (
        <button
            className="linear flex flex-row items-center gap-2 rounded-md bg-indigo-500 px-6 py-2 text-base font-medium text-white transition duration-200 hover:bg-indigo-600 active:bg-indigo-700"
            data-ripple-light
            type={type}
        >
            {title}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 -rotate-45">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
</svg>

        </button>
    )
}