import { Eye, EyeOff } from "lucide-react";

export default function PasswordInput({
    label,
    placeholder,
    showPassword,
    onTogglePassword,
    ...props
}) {
    return (
        <label className="block" aria-label={label}>
            <div className="flex h-16 items-center rounded-[22px] border border-stone-300 bg-white px-6 transition focus-within:border-tertiary-base focus-within:ring-4 focus-within:ring-tertiary-base/10">
                <input
                    type={showPassword ? "text" : "password"}
                    placeholder={placeholder}
                    className="min-w-0 flex-1 bg-transparent text-lg text-primary-900 outline-none placeholder:text-stone-500"
                    {...props}
                />

                <button
                    type="button"
                    onClick={onTogglePassword}
                    className="ml-3 text-stone-500 transition hover:text-primary-base"
                    aria-label={showPassword ? "Sembunyikan kata sandi" : "Tampilkan kata sandi"}
                >
                    {showPassword ? <EyeOff size={22} /> : <Eye size={22} />}
                </button>
            </div>
        </label>
    );
}
