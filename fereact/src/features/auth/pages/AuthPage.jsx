import { useState } from "react";

import AuthBrandPanel from "../../../components/ui/auth/AuthBrandPanel";
import AuthForm from "../../../components/ui/auth/AuthForm";

export default function AuthPage() {
    const [mode, setMode] = useState("login");

    return (
        <main className="flex min-h-screen items-center bg-secondary-base px-6 py-10 md:px-12 lg:px-20">
            <section className="mx-auto flex w-full max-w-7xl flex-col overflow-hidden rounded-[36px] border border-stone-300 bg-neutral-50 shadow-[16px_16px_0px_rgba(28,43,51,0.22)] lg:min-h-200 lg:flex-row">
                <AuthBrandPanel mode={mode} />

                <AuthForm
                    mode={mode}
                    onSwitchMode={() =>
                        setMode((currentMode) =>
                            currentMode === "login" ? "register" : "login"
                        )
                    }
                />
            </section>
        </main>
    );
}
