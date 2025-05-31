 import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import HomePages from './pages/HomePages';
import AboutPages from './pages/AboutPages';
import SignInPages from './pages/SignInPages';

import DashboardLayout from './dashboard/DashboardLayout';
import { Home, Team, Services, About, Profile } from './dashboard/DashboardPages';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePages />} />
      <Route path="/about" element={<AboutPages />} />
      <Route path="/signin" element={<SignInPages />} />

      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<Navigate to="home" replace />} />
        <Route path="home" element={<Home />} />
        <Route path="team" element={<Team />} />
        <Route path="services" element={<Services />} />
        <Route path="about" element={<About />} />
        <Route path="profile" element={<Profile />} />
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;


