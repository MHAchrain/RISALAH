import { useState } from "react";

import RecordSetup from "./steps/RecordSetup";
import Recording from "./steps/Recording";
import Processing from "./steps/Processing";

export default function RecordSection({ onFinish }) {
    const [step, setStep] = useState("setup");
    const [selectedWorkspace, setSelectedWorkspace] = useState({
        id: "proposal-kicaukicau",
        title: "Proposal KicauKicau",
    });

    const handleSetupNext = (workspace) => {
        setSelectedWorkspace(workspace);
        setStep("recording");
    };

    const handleFinish = () => {
        onFinish?.(selectedWorkspace.id, {
            title: "Dokumentasi Rapat Terbaru",
            date: "Hari ini",
            duration: "00:15:36",
            status: "Baru diproses",
            summary:
                "AI menyusun ringkasan diskusi, keputusan utama, dan daftar tugas dari sesi rekaman terbaru.",
        });
    };

    return (
        <>
            {step === "setup" && (
                <RecordSetup onNext={handleSetupNext} />
            )}

            {step === "recording" && (
                <Recording
                    onBack={() => setStep("setup")}
                    onNext={() => setStep("processing")}
                />
            )}

            {step === "processing" && (
                <Processing
                    onBack={() => setStep("recording")}
                    onFinish={handleFinish}
                />
            )}
        </>
    );
}
