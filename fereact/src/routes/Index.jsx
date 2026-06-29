import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import LandingPage from '../features/home/pages/LandingPage';
import MainPage from '../features/dashboard/pages/MainPage';

export default function AppRoutes() {

    return (
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path='/dashboard' element={<MainPage/>} />

            {/* <Route path="/auth" element={
                isLoggedIn ? <Navigate to="/dashboard" replace /> : <AuthPage />
            } /> */}

            {/* 3. ROUTE PRIVATE/PROTECTED (Dashboard) */}
            {/* <Route path="/dashboard" element={
                isLoggedIn ? <Dashboard /> : <Navigate to="/auth" replace />
            } /> */}

            {/* 4. FALLBACK (Jika URL ngawur, arahkan ke Landing Page) */}
            {/* <Route path="*" replace element={<Navigate to="/" />} /> */}
        </Routes>
    );
}