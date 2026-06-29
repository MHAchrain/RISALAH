import { useState } from "react";
import { ChevronDown, Upload, Mic } from "lucide-react";
import Button from "../../../../../components/ui/Button";

export default function RecordSetup({ onNext }) {
    const [open, setOpen] = useState(false);

    const workspaces = [
        "Proposal KicauKicau",
        "Praktikum Basis Data",
        "Riset UX Akademik",
        "Bimbingan TA",
    ];

    const [selectedWorkspace, setSelectedWorkspace] = useState(workspaces[0]);

    return (
        <section>

            {/* Header */}

            <span className="font-label text-lg uppercase tracking-[0.35em] text-tertiary-base">
                Rekaman Baru
            </span>

            <h1 className="mt-4 font-headline text-6xl font-bold leading-[1.05] text-primary-900 max-w-5xl">
                Persiapan Rekam
            </h1>

            <p className="mt-6 text-xl text-stone-600">
                Alur inti: pilih workspace, rekam/unggah audio, proses AI, lalu masuk ke detail dokumen.
            </p>

            <div className="mt-12 rounded-[36px] border border-stone-300 bg-neutral-50 p-8 shadow-[8px_8px_0px_rgba(0,0,0,0.18)]">

                {/* Step */}
                <div className="flex gap-3">
                    <span className="rounded-full bg-primary-base px-5 py-2 text-xs font-label text-white">
                        1. Persiapan Rekam
                    </span>

                    <span className="rounded-full bg-neutral-200 px-5 py-2 text-xs font-label text-stone-700">
                        2. Sedang Merekam
                    </span>

                    <span className="rounded-full bg-neutral-200 px-5 py-2 text-xs font-label text-stone-700">
                        3. Sedang Diproses AI
                    </span>
                </div>

                {/* Dropdown */}
                <div className="relative mt-8">

                    <button
                        onClick={() => setOpen(!open)}
                        className="flex w-full items-center justify-between rounded-2xl border border-stone-300 bg-white px-6 py-5 transition hover:border-primary-base"
                    >
                        <span className="font-semibold text-primary-900">
                            {selectedWorkspace}
                        </span>

                        <ChevronDown
                            size={20}
                            className={`transition ${open ? "rotate-180" : ""}`}
                        />
                    </button>

                    {open && (
                        <div className="absolute left-0 right-0 top-full mt-2 overflow-hidden rounded-2xl border border-stone-300 bg-white shadow-lg z-20">

                            {workspaces.map((workspace) => (
                                <button
                                    key={workspace}
                                    onClick={() => {
                                        setSelectedWorkspace(workspace);
                                        setOpen(false);
                                    }}
                                    className={`block w-full px-6 py-4 text-left transition
                                        ${
                                            selectedWorkspace === workspace
                                                ? "bg-secondary-base font-semibold text-primary-base"
                                                : "hover:bg-stone-100"
                                        }`}
                                >
                                    {workspace}
                                </button>
                            ))}

                        </div>
                    )}

                </div>

                {/* Upload Area */}
                <div className="mt-10 flex flex-col items-center rounded-3xl border-2 border-dashed border-stone-300 py-16">

                    <button className="flex h-28 w-28 items-center justify-center rounded-full bg-tertiary-base text-white transition hover:-translate-y-1">
                        <Mic size={42} />
                    </button>

                    <button className="mt-8 flex items-center gap-2 text-stone-700 hover:text-primary-base">
                        <Upload size={18} />
                        <span className="font-medium">
                            Unggah Berkas Audio
                        </span>
                    </button>

                    <p className="mt-3 text-sm text-stone-500">
                        atau mulai rekam langsung menggunakan mikrofon
                    </p>

                    <Button
                        className="mt-8"
                        onClick={onNext}
                        variant="dash"
                    >
                        Mulai Rekam
                    </Button>

                </div>

            </div>

        </section>
    );
}