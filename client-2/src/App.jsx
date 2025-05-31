 import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import SignInPages from './Pages/SignInPages';
import DashboardLayout from './dashboard/DashboardLayout';
import { Home, Team, Services, About, Profile } from './dashboard/DashboardPages';

function App() {
  return (
    <Routes>
      {/* Sign In */}
      <Route path="/" element={<SignInPages />} />

      {/* Dashboard Layout with nested pages */}
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<Navigate to="home" replace />} />
        <Route path="home" element={<Home />} />
        <Route path="team" element={<Team />} />
        <Route path="services" element={<Services />} />
        <Route path="about" element={<About />} />
        <Route path="profile" element={<Profile />} />
      </Route>

      {/* Catch-all route for 404s */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;

