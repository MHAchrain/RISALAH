export default function AuthBrandPanel({ mode }) {
    const isLogin = mode === "login";

    return (
        <aside
            className="
                flex flex-col justify-between
                bg-primary-base text-white
                px-8 py-10
                md:px-12
                lg:w-[42%]
            "
        >
            {/* Logo */}
            <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/30 bg-secondary-base">
                    <svg
                        viewBox="0 0 100 100"
                        className="h-10 w-10 text-primary-900"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="6"
                    >
                        <path d="M10 90 L30 10 L50 60 L70 10 L90 90 L75 90 L65 40 L50 75 L35 40 L25 90 Z" />
                    </svg>
                </div>

                <div>
                    <h1 className="font-label text-3xl font-bold">
                        Risalah
                    </h1>

                    <p className="mt-1 font-label text-[10px] uppercase tracking-[0.35em] text-secondary-300">
                        KICAU-KICAU → DOKUMEN
                    </p>
                </div>
            </div>

            {/* Content */}
            <div className="my-16">
                <h2
                    className="
                        max-w-lg
                        font-headline
                        text-5xl
                        xl:text-6xl
                        leading-tight
                        text-secondary-base
                    "
                >
                    {isLogin
                        ? "Masuk untuk lanjut menyusun dokumen."
                        : "Daftar untuk menyusun dokumen pertama."}
                </h2>

                <p
                    className="
                        mt-8
                        max-w-md
                        text-lg
                        leading-8
                        text-secondary-200
                    "
                >
                    {isLogin
                        ? "Akses kembali workspace, riwayat rekaman, dan ringkasan tugas yang sudah diproses AI."
                        : "Setelah daftar, pengguna diarahkan ke Dashboard, Workspace, Rekam Baru, Riwayat, dan Profil."}
                </p>
            </div>

            {/* Footer */}
            <div className="border-t border-white/15 pt-6">
                <p className="font-label text-xs uppercase tracking-[0.3em] text-secondary-300">
                    AI Pendamping Vokasi
                </p>
            </div>
        </aside>
    );
}