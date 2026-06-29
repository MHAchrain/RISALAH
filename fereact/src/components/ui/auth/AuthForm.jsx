import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Button from "../Button";
import AuthInput from "./AuthInput";
import PasswordInput from "./PasswordInput";

export default function AuthForm({ mode, onSwitchMode }) {
    const navigate = useNavigate();
    const isLogin = mode === "login";
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate("/dashboard");
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="flex min-w-0 flex-1 items-center px-8 py-10 md:px-12 lg:px-16"
        >
            <div className="mx-auto w-full max-w-xl">
                <p className="font-label text-sm uppercase tracking-[0.5em] text-tertiary-base">
                    Halaman {isLogin ? "Login" : "Daftar"}
                </p>

                <h2 className="mt-6 font-headline text-4xl font-black leading-tight text-primary-900 md:text-5xl">
                    {isLogin ? "Selamat datang kembali." : "Buat akun Risalah."}
                </h2>

                <p className="mt-4 text-lg leading-8 text-stone-600">
                    {isLogin
                        ? "Masuk dengan email terdaftar untuk membuka dashboard dokumentasi Anda."
                        : "Lengkapi identitas akademik Anda untuk mulai membuat risalah otomatis."}
                </p>

                <div className="mt-8 grid gap-5">
                    {!isLogin && (
                        <>
                            <AuthInput
                                label="Username"
                                placeholder="Masukkan username pengguna"
                            />

                            <AuthInput
                                label="NIM"
                                placeholder="Masukkan nomor induk mahasiswa"
                            />

                            <AuthInput
                                label="Nama institusi"
                                placeholder="Masukkan nama kampus atau institusi"
                            />
                        </>
                    )}

                    <AuthInput
                        label="Email"
                        type="email"
                        placeholder="Masukkan email aktif Anda"
                    />

                    <PasswordInput
                        label="Kata sandi"
                        placeholder="Masukkan kata sandi"
                        showPassword={showPassword}
                        onTogglePassword={() => setShowPassword((prev) => !prev)}
                    />

                    {!isLogin && (
                        <PasswordInput
                            label="Konfirmasi kata sandi"
                            placeholder="Ulangi kata sandi Anda"
                            showPassword={showConfirmPassword}
                            onTogglePassword={() =>
                                setShowConfirmPassword((prev) => !prev)
                            }
                        />
                    )}
                </div>

                <Button
                    type="submit"
                    variant="dash"
                    className="mt-8 h-16 w-full text-base"
                >
                    {isLogin ? "Masuk" : "Daftar"}
                </Button>

                <p className="mt-6 text-center text-stone-600">
                    {isLogin ? "Belum punya akun?" : "Sudah punya akun?"}

                    <button
                        type="button"
                        onClick={onSwitchMode}
                        className="ml-2 font-bold text-tertiary-base transition hover:text-tertiary-700"
                    >
                        {isLogin ? "Daftar sekarang" : "Masuk di sini"}
                    </button>
                </p>
            </div>
        </form>
    );
}
