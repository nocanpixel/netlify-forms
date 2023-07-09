import { useFormContext } from "react-hook-form"

export const SingleCheckbox = ({name}) => {
    const {register} = useFormContext();
    return(
        <>
        <input {...register(name)} className="peer relative appearance-none shrink-0 w-4 h-4 ring-1 ring-gray-300 rounded-sm mt-1 bg-white
        focus:outline-none focus:ring-offset-0 focus:ring-1 focus:ring-gray-300
        checked:bg-indigo-500 checked:border-0 disabled:border-steel-400 disabled:bg-steel-400" 
        type="checkbox" />
              <svg
                className="absolute w-4 h-4 pointer-events-none hidden peer-checked:block stroke-white mt-1 outline-none"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
              <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <label htmlFor={1} className='text-sm text-gray-500 mt-0.5'>
                Send a copy to my own email
              </label>
        </>
    )
}