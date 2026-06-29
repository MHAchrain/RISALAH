import { useState } from "react";

import Sidebar from "../../../components/layout/Sidebar";

import DashboardSection from "../section/DashboardSection";
import WorkspaceSection from "../section/WorkspaceSection/WorkspaceSection";
import RecordSection from "../section/RecordSection/RecordSection";
import HistorySection from "../section/HistorySection";
import ProfileSection from "../section/ProfileSection";

export default function MainPage() {
    const [activeMenu, setActiveMenu] = useState("dashboard");
    const [workspaceView, setWorkspaceView] = useState({
        mode: "list",
        selectedWorkspaceId: null,
        latestSession: null,
    });

    const openWorkspaceDetail = (workspaceId, latestSession = null) => {
        setWorkspaceView({
            mode: "detail",
            selectedWorkspaceId: workspaceId,
            latestSession,
        });
        setActiveMenu("workspace");
    };

    const openWorkspaceList = () => {
        setWorkspaceView({
            mode: "list",
            selectedWorkspaceId: null,
            latestSession: null,
        });
    };

    const renderContent = () => {
        switch (activeMenu) {
        case "workspace":
            return (
                <WorkspaceSection
                    view={workspaceView}
                    onOpenDetail={openWorkspaceDetail}
                    onBackToList={openWorkspaceList}
                />
            );

        case "record":
            return <RecordSection onFinish={openWorkspaceDetail} />;

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
            setActiveMenu={(menu) => {
                if (menu === "workspace") {
                    openWorkspaceList();
                    setActiveMenu("workspace");
                    return;
                }

                setActiveMenu(menu);
            }}
        />

        <main className="flex-1 overflow-y-auto p-10">
            {renderContent()}
        </main>
        </div>
    );
}
