import { useState } from "react";

import RecordSetup from "./steps/RecordSetup";
import Recording from "./steps/Recording";
import Processing from "./steps/Processing";

export default function RecordSection() {
    const [step, setStep] = useState("setup");

    return (
        <>
            {step === "setup" && (
                <RecordSetup onNext={() => setStep("recording")} />
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
                />
            )}
        </>
    );
}