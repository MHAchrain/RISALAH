import { Plus, Search } from "lucide-react";

import Button from "../../../../components/ui/Button";
import WorkspaceCard from "../../../../components/ui/dashboard/WorkspaceCard";

export default function WorkspaceList({ onOpenDetail, workspaces }) {
    return (
        <section>
            <span className="font-label text-lg uppercase tracking-[0.35em] text-tertiary-base">
                Workspace Saya
            </span>

            <h1 className="mt-4 max-w-5xl font-headline text-6xl font-bold leading-[1.05] text-primary-900">
                Kelola semua proyek dan ruang dokumentasi.
            </h1>

            <p className="mt-6 max-w-3xl text-xl text-stone-700">
                Search, buat workspace baru, dan masuk ke detail workspace dengan tab Ringkasan, Sesi, Tugas, Anggota.
            </p>

            <div className="mt-10 flex gap-4">
                <div className="flex flex-1 items-center gap-3 rounded-full border border-stone-300 bg-white px-6 py-4">
                    <Search size={20} className="text-stone-500" />

                    <input
                        placeholder="Cari workspace..."
                        className="flex-1 bg-transparent outline-none"
                    />
                </div>

                <Button className="px-8" variant="dash">
                    <Plus size={18} />
                    Buat Workspace Baru
                </Button>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-5">
                {workspaces.map((item) => (
                    <button
                        key={item.id}
                        onClick={() => onOpenDetail(item.id)}
                        className="text-left transition hover:-translate-y-1"
                    >
                        <WorkspaceCard {...item} />
                    </button>
                ))}
            </div>
        </section>
    );
}
