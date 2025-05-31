 import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function AboutPages() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <header className="flex justify-between items-center p-6 bg-white shadow">
        <h1 className="text-indigo-600 font-bold text-3xl">Codecraft Technologies</h1>
        <button
          onClick={() => navigate('/signin')}
          className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
        >
          Sign In
        </button>
      </header>

      <main className="flex-grow max-w-5xl mx-auto p-10">
        <h2 className="text-4xl font-extrabold mb-6 text-center text-indigo-700">
          About Codecraft Technologies
        </h2>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          Codecraft Technologies is a leading software development company specializing in delivering
          innovative and custom digital solutions to businesses worldwide. Founded with a vision to
          empower organizations through technology, we combine cutting-edge tools and industry best
          practices to create impactful software products.
        </p>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          Our expertise spans across full-stack web development, mobile applications, cloud solutions,
          and enterprise software. With a highly skilled team of engineers, designers, and strategists,
          we partner closely with clients to turn their ideas into scalable and secure solutions.
        </p>
        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
          At Codecraft, we believe in innovation, quality, and customer satisfaction. Our agile
          approach ensures rapid delivery while maintaining flexibility to adapt to evolving business
          needs. Join us on this journey to craft the future of technology.
        </p>

        <div className="flex justify-center">
          <button
            onClick={() => navigate('/')}
            className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition"
          >
            Back to Home
          </button>
        </div>
      </main>

      <footer className="py-4 text-center text-gray-500 bg-gray-100">
        © {new Date().getFullYear()} Codecraft Technologies. All rights reserved.
      </footer>
    </div>
  );
}

