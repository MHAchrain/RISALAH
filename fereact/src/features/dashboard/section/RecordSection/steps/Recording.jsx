import { useEffect, useState } from "react";
import Button from "../../../../../components/ui/Button";

export default function Recording({ onBack, onNext }) {
    const [seconds, setSeconds] = useState(768); // 12:48

    useEffect(() => {
        const timer = setInterval(() => {
            setSeconds((prev) => prev + 1);
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const formatTime = () => {
        const h = Math.floor(seconds / 3600);
        const m = Math.floor((seconds % 3600) / 60);
        const s = seconds % 60;

        return `${String(h).padStart(2, "0")}:${String(m).padStart(
            2,
            "0"
        )}:${String(s).padStart(2, "0")}`;
    };

    // dummy waveform
    const bars = [
        22, 30, 45, 60, 78, 95, 42, 58, 73, 88,
        100, 52, 38, 54, 68, 82, 96, 74, 40, 62,
        80, 92, 72, 48, 60, 76, 90
    ];

    return (
        <section>
            {/* Header */}
            <span className="font-label text-lg uppercase tracking-[0.35em] text-tertiary-base">
                Rekaman Baru
            </span>

            <h1 className="mt-4 font-headline text-6xl font-bold leading-[1.05] text-primary-900">
                Sedang Merekam
            </h1>

            <p className="mt-6 text-xl text-stone-600">
                Alur inti: pilih workspace, rekam/unggah audio, proses AI,
                lalu masuk ke detail dokumen.
            </p>

            {/* Card */}
            <div className="mt-12 rounded-[36px] border border-stone-300 bg-neutral-50 p-8 shadow-[8px_8px_0px_rgba(0,0,0,0.18)]">

                {/* Step */}
                <div className="flex gap-3">
                    <span className="rounded-full bg-neutral-200 px-5 py-2 text-xs font-label text-stone-700">
                        1. Persiapan Rekam
                    </span>

                    <span className="rounded-full bg-primary-base px-5 py-2 text-xs font-label text-white">
                        2. Sedang Merekam
                    </span>

                    <span className="rounded-full bg-neutral-200 px-5 py-2 text-xs font-label text-stone-700">
                        3. Sedang Diproses AI
                    </span>
                </div>

                {/* Timer */}
                <div className="mt-10 text-center">
                    <h2 className="font-label text-6xl font-bold tracking-wider text-primary-base">
                        {formatTime()}
                    </h2>
                </div>

                {/* Wave */}
                <div className="mt-12 flex h-32 items-end justify-center gap-2">
                    {bars.map((height, index) => (
                        <div
                            key={index}
                            className="w-2 rounded-full bg-green-700"
                            style={{ height: `${height}px` }}
                        />
                    ))}
                </div>

                {/* Action */}
                <div className="mt-12 flex justify-center gap-4">
                    <Button
                        variant="outline"
                        onClick={onBack}
                    >
                        Batal
                    </Button>

                    <Button
                        variant="dash"
                        onClick={onNext}
                    >
                        Selesai &amp; Proses
                    </Button>
                </div>
            </div>
        </section>
    );
}