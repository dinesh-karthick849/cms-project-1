import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePages = () => {
  const navigate = useNavigate();

  const handleSignIn = () => navigate('/signin');
  const handleAbout = () => navigate('/about');

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-800">
      {/* Header */}
      <header className="flex justify-between items-center p-6 shadow bg-white">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src="/logo192.png" // replace with your actual logo path
            alt="Codecraft Logo"
            className="h-10 w-10"
          />
          <span className="text-2xl font-bold text-indigo-700">Codecraft Technologies</span>
        </div>
        <button
          onClick={handleSignIn}
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md"
        >
          Sign In
        </button>
      </header>

      {/* Hero Section */}
      <section className="text-center py-16 px-6 bg-gradient-to-br from-indigo-100 to-white transition-all">
        <h1 className="text-4xl md:text-5xl font-extrabold text-indigo-800 mb-4 animate-fade-in">
          Smart Digital Solutions for Modern Businesses
        </h1>
        <p className="text-lg max-w-2xl mx-auto text-gray-600">
          We design, develop and deliver software systems that streamline operations, elevate experiences,
          and integrate AI technologies to drive innovation.
        </p>
        <button
          onClick={handleAbout}
          className="mt-6 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg text-lg"
        >
          About Us
        </button>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6 md:px-20 bg-white">
        <h2 className="text-3xl font-bold text-center text-indigo-700 mb-10">Our Core Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: 'Full-Stack Development', desc: 'Robust web and mobile apps built with modern frameworks.' },
            { title: 'AI Integration', desc: 'Embed smart, learning-based systems into your business operations.' },
            { title: 'UI/UX Design', desc: 'Human-centered designs that deliver delightful user experiences.' }
          ].map(({ title, desc }, i) => (
            <div key={i} className="bg-indigo-50 p-6 rounded-lg shadow hover:shadow-md transition">
              <h3 className="text-xl font-semibold text-indigo-700">{title}</h3>
              <p className="mt-2 text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Client Logos */}
      <section className="bg-gray-50 py-12 px-6">
        <h2 className="text-center text-xl font-semibold text-gray-700 mb-6">Trusted by Startups & Enterprises</h2>
        <div className="flex flex-wrap justify-center gap-10">
          {['/client1.png', '/client2.png', '/client3.png'].map((src, i) => (
            <img key={i} src={src} alt={`Client ${i + 1}`} className="h-12 w-auto grayscale hover:grayscale-0 transition" />
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-6 md:px-20 bg-white">
        <h2 className="text-2xl font-bold text-center text-indigo-700 mb-10">What Our Clients Say</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            { name: "Anand Raj", feedback: "Codecraft transformed our vision into a full-fledged platform in record time!" },
            { name: "Meera N", feedback: "Their attention to UX and deep tech knowledge gave us an edge in the market." }
          ].map(({ name, feedback }, i) => (
            <div key={i} className="border-l-4 border-indigo-600 pl-4">
              <p className="text-gray-600 italic">"{feedback}"</p>
              <p className="mt-2 font-semibold text-indigo-700">— {name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-4 text-sm text-gray-500 border-t">
        © {new Date().getFullYear()} Codecraft Technologies. Built with ❤️ in Tamil Nadu.
      </footer>
    </div>
  );
};

export default HomePages;
