 import React from 'react';

export function Home() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-indigo-700">Welcome to Codecraft Technologies</h2>
      <p className="text-gray-700 text-lg">
        We craft innovative digital solutions for startups and enterprises. Our goal is to turn your ideas into scalable software products that solve real-world problems.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold text-indigo-600">10+ Projects</h3>
          <p className="text-gray-600 mt-2">Delivered with top-tier quality and efficiency.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold text-indigo-600">Client First</h3>
          <p className="text-gray-600 mt-2">Custom-tailored solutions to fit your needs.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold text-indigo-600">Skilled Team</h3>
          <p className="text-gray-600 mt-2">Engineers, designers, and strategists working together.</p>
        </div>
      </div>
    </div>
  );
}

export function Team() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-indigo-700">Our Team</h2>
      <p className="text-gray-700">The driving force behind Codecraft Technologies:</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow text-center">
          <img src="https://via.placeholder.com/100" alt="Founder" className="w-24 h-24 mx-auto rounded-full mb-4" />
          <h3 className="text-xl font-semibold text-gray-800">Dinesh Karthick</h3>
          <p className="text-gray-600">Founder & Lead Developer</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow text-center">
          <img src="https://via.placeholder.com/100" alt="CTO" className="w-24 h-24 mx-auto rounded-full mb-4" />
          <h3 className="text-xl font-semibold text-gray-800">Jagadish</h3>
          <p className="text-gray-600">Chief Technical Officer</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow text-center">
          <img src="https://via.placeholder.com/100" alt="Designer" className="w-24 h-24 mx-auto rounded-full mb-4" />
          <h3 className="text-xl font-semibold text-gray-800">Sanjai Kumar</h3>
          <p className="text-gray-600">UI/UX Designer</p>
        </div>
      </div>
    </div>
  );
}

export function Services() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-indigo-700">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold text-indigo-600">Web App Development</h3>
          <p className="text-gray-700 mt-2">
            We build fast, scalable web applications using modern technologies like React, Node.js, and Django.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold text-indigo-600">Mobile App Development</h3>
          <p className="text-gray-700 mt-2">
            Native and cross-platform mobile solutions built with Flutter and React Native.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold text-indigo-600">AI & Machine Learning</h3>
          <p className="text-gray-700 mt-2">
            Integrate AI-driven features with deep learning, NLP, and computer vision models.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold text-indigo-600">UI/UX Design</h3>
          <p className="text-gray-700 mt-2">
            Clean, functional, and aesthetic interfaces that users love to interact with.
          </p>
        </div>
      </div>
    </div>
  );
}

export function About() {
  return (
    <div className="space-y-6 max-w-3xl">
      <h2 className="text-3xl font-bold text-indigo-700">About Codecraft Technologies</h2>
      <p className="text-gray-700 text-lg">
        Codecraft Technologies is a forward-thinking software company founded in Tamil Nadu. We specialize in full-stack
        development, AI-powered solutions, and user-centered design. Our team combines engineering precision with creative innovation.
      </p>
      <p className="text-gray-700">
        Whether you're a startup looking to launch your MVP or an enterprise scaling up digital operations, we provide the tools and
        talent you need to succeed in a tech-driven world.
      </p>
      <p className="text-gray-700">
        With transparency, agility, and results at our core, we ensure every project reflects our commitment to excellence.
      </p>
    </div>
  );
}

export function Profile() {
  return (
    <div className="max-w-md bg-white p-6 rounded-lg shadow space-y-4">
      <h2 className="text-2xl font-bold text-indigo-700">Your Profile</h2>
      <div>
        <p className="text-sm text-gray-500">Name</p>
        <p className="text-lg font-medium text-gray-800">Dinesh Karthick</p>
      </div>
      <div>
        <p className="text-sm text-gray-500">Role</p>
        <p className="text-lg font-medium text-gray-800">Founder & Developer</p>
      </div>
      <div>
        <p className="text-sm text-gray-500">Email</p>
        <p className="text-lg font-medium text-gray-800">dinesh@codecrafttech.in</p>
      </div>
      <div>
        <p className="text-sm text-gray-500">Location</p>
        <p className="text-lg font-medium text-gray-800">Udumalpet, Tamil Nadu</p>
      </div>
    </div>
  );
}

