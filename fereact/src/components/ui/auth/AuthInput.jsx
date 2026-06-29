export default function AuthInput({
    label,
    type = "text",
    placeholder,
    ...props
}) {
    return (
        <label className="block" aria-label={label}>
            <input
                type={type}
                placeholder={placeholder}
                className="h-16 w-full rounded-[22px] border border-stone-300 bg-white px-6 text-lg text-primary-900 outline-none transition placeholder:text-stone-500 focus:border-tertiary-base focus:ring-4 focus:ring-tertiary-base/10"
                {...props}
            />
        </label>
    );
}
