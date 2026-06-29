import { useEffect, useMemo, useState } from "react";

import WorkspaceDetail from "./WorkspaceDetail";
import WorkspaceList from "./WorkspaceList";

const initialWorkspaces = [
    {
        id: "proposal-kicaukicau",
        title: "Proposal KicauKicau",
        type: "Tugas Akhir · 4 anggota",
        task: "8/10",
        progress: 75,
        sessions: [
            {
                title: "Review Proposal Bab 2",
                date: "24 Jun 2026",
                duration: "00:42:18",
                status: "Selesai",
                summary:
                    "Pembahasan fokus pada perbaikan landasan teori, batasan masalah, dan pembagian revisi antar anggota.",
            },
        ],
    },
    {
        id: "praktikum-basis-data",
        title: "Praktikum Basis Data",
        type: "Praktikum · 6 anggota",
        task: "5/8",
        progress: 62,
        sessions: [
            {
                title: "Pembagian Modul Normalisasi",
                date: "22 Jun 2026",
                duration: "00:31:44",
                status: "Selesai",
                summary:
                    "Tim membagi pengerjaan laporan normalisasi, ERD, dan validasi query SQL.",
            },
        ],
    },
    {
        id: "riset-ux-akademik",
        title: "Riset UX Akademik",
        type: "Proyek Kelompok · 3 anggota",
        task: "11/12",
        progress: 88,
        sessions: [
            {
                title: "Sintesis Wawancara Mahasiswa",
                date: "20 Jun 2026",
                duration: "00:28:06",
                status: "Selesai",
                summary:
                    "Hasil wawancara dipetakan menjadi pain point utama dan peluang perbaikan alur layanan akademik.",
            },
        ],
    },
    {
        id: "bimbingan-ta",
        title: "Bimbingan TA",
        type: "Bimbingan · 2 anggota",
        task: "3/6",
        progress: 50,
        sessions: [],
    },
];

export default function WorkspaceSection({
    view,
    onOpenDetail,
    onBackToList,
}) {
    const [activeTab, setActiveTab] = useState("ringkasan");

    useEffect(() => {
        if (view?.latestSession) {
            setActiveTab("sesi");
        }
    }, [view?.latestSession]);

    const workspaces = useMemo(() => {
        if (!view?.latestSession || !view?.selectedWorkspaceId) {
            return initialWorkspaces;
        }

        return initialWorkspaces.map((workspace) => {
            if (workspace.id !== view.selectedWorkspaceId) {
                return workspace;
            }

            return {
                ...workspace,
                sessions: [view.latestSession, ...workspace.sessions],
            };
        });
    }, [view?.latestSession, view?.selectedWorkspaceId]);

    const selectedWorkspace =
        workspaces.find((workspace) => workspace.id === view?.selectedWorkspaceId) ??
        workspaces[0];

    if (view?.mode === "detail") {
        return (
            <WorkspaceDetail
                activeTab={activeTab}
                latestSession={view.latestSession}
                onBack={onBackToList}
                onChangeTab={setActiveTab}
                workspace={selectedWorkspace}
            />
        );
    }

    return (
        <WorkspaceList
            onOpenDetail={(workspaceId) => onOpenDetail(workspaceId)}
            workspaces={workspaces}
        />
    );
}
