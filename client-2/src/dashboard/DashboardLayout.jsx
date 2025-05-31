 import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

const navigation = [
  { name: 'Dashboard', path: '/dashboard/home' },
  { name: 'Team', path: '/dashboard/team' },
  { name: 'Services', path: '/dashboard/services' },
  { name: 'About', path: '/dashboard/about' },
  { name: 'Profile', path: '/dashboard/profile' },
];

const DashboardLayout = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md flex flex-col justify-between">
        <div>
          <div className="p-6 text-center border-b border-gray-200">
            <h1 className="text-2xl font-bold text-indigo-600">Codecraft</h1>
            <p className="text-sm text-gray-500 mt-1">Technologies Dashboard</p>
          </div>
          <nav className="mt-6 space-y-1 px-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`block px-4 py-2 rounded-md transition ${
                  isActive(item.path)
                    ? 'bg-indigo-100 text-indigo-700 font-semibold'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
        <div className="p-4 border-t border-gray-200">
          <button className="w-full px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition">
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-6">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;


