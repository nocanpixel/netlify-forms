import { useFormContext } from "react-hook-form"

export const GeneralInput = ({ title = "Title", placeHolder = "Place holder", name, type = "text" }) => {
    const { register, formState: {errors} } = useFormContext();

    const validatePhoneNumber = (value) => {
        const isValidPhoneNumber = /^\d{10}$/.test(value);
        return isValidPhoneNumber || 'Invalid phone number';
      };

    return (
        <>
            <div className="text-sm text-gray-500">{title}</div>
            <div className="relative mt-1">
                <input {...register(name, {
                        required: `${name} is required`,
                        pattern: type === "email" && {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Invalid email"
                        },
                        validate: type === "tel" && {validatePhoneNumber}
                })} placeholder={`${placeHolder}`} className={`relative text-gray-600 h-10 py-1.5 w-full cursor-default rounded-md bg-white pl-3 pr-10 text-left shadow-sm appearance-none
                 ${ errors[name] ? "ring-2 ring-red-400 focus:ring-red-400 " : " ring-1 ring-indigo-700 focus:ring-indigo-400 " } ring-inset focus:outline-none focus-ring-2 text-sm`} type={type} />
            </div>
        </>
    )
}