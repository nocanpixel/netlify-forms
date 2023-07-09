import { useFormContext } from "react-hook-form"

export const TextArea = ({ title = "Title", name }) => {
    const { register, formState: {errors} } = useFormContext();

    return (
        <>
            <div className="text-sm text-gray-500">{title}</div>
            <div className="relative mt-1">
                <textarea {...register(name, {required: 'Message required'})} placeholder="Type something..." rows={5} className={`relative py-1.5 w-full cursor-default rounded-md bg-white pl-3 pr-10 text-left text-gray-600 shadow-sm appearance-none ${errors.message ? " ring-2 ring-red-400 focus:ring-red-400 " : " ring-1 ring-indigo-700 focus:ring-indigo-400 "} ring-inset focus:outline-none focus-ring-2  text-sm`} />
            </div>
        </>
    )
}