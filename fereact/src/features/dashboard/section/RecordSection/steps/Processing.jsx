import { useEffect, useState } from "react";

export default function Processing({ onFinish }) {

    const steps = [
        "Mengunggah audio...",
        "Mentranskripsi percakapan...",
        "Menyusun ringkasan...",
        "Mendeteksi tugas & action item...",
        "Menyiapkan dokumen..."
    ];

    const [currentStep, setCurrentStep] = useState(0);

    useEffect(() => {
        if (currentStep < steps.length - 1) {
            const timer = setTimeout(() => {
                setCurrentStep((prev) => prev + 1);
            }, 900);

            return () => clearTimeout(timer);
        }

        const finishTimer = setTimeout(() => {
            onFinish?.();
        }, 1500);

        return () => clearTimeout(finishTimer);
    }, [currentStep, onFinish]);

    return (
        <section>

            {/* Header */}

            <span className="font-label text-lg uppercase tracking-[0.35em] text-tertiary-base">
                Rekaman Baru
            </span>

            <h1 className="mt-4 font-headline text-6xl font-bold leading-[1.05] text-primary-900">
                Sedang Diproses AI
            </h1>

            <p className="mt-6 text-xl text-stone-600">
                Alur inti: pilih workspace, rekam/unggah audio, proses AI, lalu masuk ke detail dokumen.
            </p>

            {/* Card */}

            <div className="mt-12 rounded-[36px] border border-stone-300 bg-neutral-50 p-8 shadow-[8px_8px_0px_rgba(0,0,0,0.18)]">

                {/* Step */}

                <div className="flex gap-3">
                    <span className="rounded-full bg-neutral-200 px-5 py-2 text-xs font-label text-stone-700">
                        1. Persiapan Rekam
                    </span>

                    <span className="rounded-full bg-neutral-200 px-5 py-2 text-xs font-label text-stone-700">
                        2. Sedang Merekam
                    </span>

                    <span className="rounded-full bg-primary-base px-5 py-2 text-xs font-label text-white">
                        3. Sedang Diproses AI
                    </span>
                </div>

                <div className="flex flex-col items-center py-20">

                    {/* Spinner */}

                    <div className="h-16 w-16 rounded-full border-4 border-stone-200 border-t-primary-base animate-spin" />

                    {/* Title */}

                    <h2 className="mt-10 text-center font-headline text-5xl font-black text-primary-900">
                        AI sedang menyusun dokumentasi...
                    </h2>

                    {/* Progress */}

                    <div className="mt-10 w-full max-w-xl">

                        {steps.map((step, index) => (

                            <div
                                key={step}
                                className={`flex items-center gap-4 rounded-xl px-4 py-3 transition-all duration-300
                                    ${
                                        index === currentStep
                                            ? "bg-secondary-base"
                                            : ""
                                    }`}
                            >

                                <div
                                    className={`flex h-7 w-7 items-center justify-center rounded-full text-sm font-bold
                                        ${
                                            index < currentStep
                                                ? "bg-green-600 text-white"
                                                : index === currentStep
                                                ? "bg-primary-base text-white"
                                                : "bg-stone-200 text-stone-600"
                                        }`}
                                >
                                    {index < currentStep ? "✓" : index + 1}
                                </div>

                                <span
                                    className={`text-lg
                                        ${
                                            index <= currentStep
                                                ? "text-primary-900 font-semibold"
                                                : "text-stone-500"
                                        }`}
                                >
                                    {step}
                                </span>

                            </div>

                        ))}

                    </div>

                    <p className="mt-10 text-center text-stone-600">
                        Setelah selesai, Anda akan langsung diarahkan
                        <br />
                        ke halaman detail workspace.
                    </p>

                </div>

            </div>

        </section>
    );
}