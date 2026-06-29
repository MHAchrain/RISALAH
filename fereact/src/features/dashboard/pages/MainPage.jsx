import { useState } from "react";

import Sidebar from "../../../components/layout/Sidebar";

import DashboardSection from "../section/DashboardSection";
import WorkspaceSection from "../section/WorkspaceSection/WorkspaceSection";
import RecordSection from "../section/RecordSection/RecordSection";
import HistorySection from "../section/HistorySection";
import ProfileSection from "../section/ProfileSection";

export default function MainPage() {
    const [activeMenu, setActiveMenu] = useState("dashboard");

    const renderContent = () => {
        switch (activeMenu) {
        case "workspace":
            return <WorkspaceSection />;

        case "record":
            return <RecordSection />;

        case "history":
            return <HistorySection />;

        case "profile":
            return <ProfileSection />;

        default:
            return <DashboardSection />;
        }
    };

    return (
        <div className="flex min-h-screen bg-secondary-base">
        <Sidebar
            activeMenu={activeMenu}
            setActiveMenu={setActiveMenu}
        />

        <main className="flex-1 overflow-y-auto p-10">
            {renderContent()}
        </main>
        </div>
    );
}