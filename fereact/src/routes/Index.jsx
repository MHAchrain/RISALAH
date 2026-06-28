import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import LandingPage from '../features/home/pages/LandingPage';
import Footer from '../components/layout/Footer';

export default function AppRoutes() {
    const isLoggedIn = false; 

    return (
        <Routes>
        <Route element={
            <>
            <Navbar />
            <div className="pt-20">
                <LandingPage />
            </div>
            <Footer/>
            </>
        }>
            <Route path="/" element={<LandingPage />} />
        </Route>

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