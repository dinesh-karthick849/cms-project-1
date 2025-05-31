 import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/codecraft-logo.png';

const HomePages = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Header */}
      <header className="flex items-center justify-between p-6 shadow-md">
        <div className="flex items-center gap-2">
          <img src={logo} alt="Logo" className="h-10" />
          <span className="text-2xl font-bold">Codecraft Technologies</span>
        </div>
        <div className="flex items-center gap-6">
          <Link to="/about" className="hover:text-blue-600 text-lg font-medium">About Us</Link>
          <Link to="/signin" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">Sign In</Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-6 text-center bg-gradient-to-br from-blue-100 to-blue-200">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-800 mb-4">
          Empowering Innovation through Technology
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-6 max-w-2xl mx-auto">
          At Codecraft Technologies, we build cutting-edge digital solutions—from web and mobile apps to custom enterprise software.
        </p>
        <Link to="/dashboard/home" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
          Explore Our Work
        </Link>
      </section>

      {/* Features */}
      <section className="py-16 px-6 bg-white text-center">
        <h2 className="text-3xl font-bold text-blue-800 mb-8">Our Core Expertise</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="bg-blue-50 p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Web Development</h3>
            <p>We build scalable, responsive websites using modern tech stacks like React, Tailwind, and Node.js.</p>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Mobile Apps</h3>
            <p>Cross-platform mobile apps with React Native and Flutter for a seamless experience.</p>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">AI Solutions</h3>
            <p>Smart apps powered by machine learning for analytics, recommendation systems, and automation.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 border-t mt-10 text-sm text-gray-500">
        © 2025 Codecraft Technologies. All rights reserved.
      </footer>
    </div>
  );
};

export default HomePages;
