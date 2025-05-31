 import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePages = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-100 to-white flex flex-col">
      {/* Navbar */}
      <div className="flex justify-between items-center px-8 py-6 shadow-md bg-white">
        <h1 className="text-3xl font-bold text-indigo-600">Codecraft Technologies</h1>
        <button
          onClick={() => navigate('/signin')}
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-lg"
        >
          Sign In
        </button>
      </div>

      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center text-center px-6 py-16">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-800 mb-4">
          We Build Smart Solutions for a Smarter Future
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mb-6">
          Codecraft Technologies is an innovative tech company committed to delivering high-quality digital solutions. We
          specialize in full-stack development, AI-based applications, UI/UX design, and enterprise tools that help businesses
          grow in the digital age.
        </p>
        <button
          onClick={() => navigate('/about')}
          className="bg-indigo-600 hover:bg-indigo-700 text-white text-lg px-6 py-3 rounded-xl shadow-md transition"
        >
          Learn About Us
        </button>
      </div>

      {/* Services Preview */}
      <div className="px-10 py-10 bg-indigo-50">
        <h3 className="text-2xl font-semibold text-center mb-6 text-indigo-800">What We Do</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h4 className="text-xl font-semibold text-indigo-700">Full-Stack Development</h4>
            <p className="mt-2 text-gray-600">Robust and scalable web applications using modern technologies like React, Node.js, and MongoDB.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h4 className="text-xl font-semibold text-indigo-700">AI & Automation</h4>
            <p className="mt-2 text-gray-600">Smart solutions using Machine Learning, Natural Language Processing, and data-driven insights.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h4 className="text-xl font-semibold text-indigo-700">UI/UX & Branding</h4>
            <p className="mt-2 text-gray-600">Intuitive and stunning user experiences to boost engagement and brand identity.</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-auto py-4 bg-white border-t text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Codecraft Technologies. All rights reserved.
      </footer>
    </div>
  );
};

export default HomePages;


 
