import React from 'react';

const AboutPages = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 px-6 py-10">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-700 mb-6">About Codecraft Technologies</h1>

        <p className="text-lg mb-4">
          At <span className="font-semibold text-blue-600">Codecraft Technologies</span>, we are committed to delivering innovative digital solutions that help businesses grow and evolve in the ever-changing tech landscape. 
          With a team of highly skilled developers, designers, and strategists, we specialize in crafting custom software, web applications, and mobile apps tailored to client needs.
        </p>

        <h2 className="text-2xl font-semibold mt-8 text-blue-600">🌟 Our Mission</h2>
        <p className="text-base mt-2">
          To empower businesses with cutting-edge technology solutions that are scalable, efficient, and user-friendly.
        </p>

        <h2 className="text-2xl font-semibold mt-6 text-blue-600">💼 What We Offer</h2>
        <ul className="list-disc list-inside space-y-2 mt-2 text-base">
          <li>Custom Web & Mobile App Development</li>
          <li>UI/UX Design and Prototyping</li>
          <li>Cloud Integration and Deployment</li>
          <li>Maintenance & Technical Support</li>
          <li>Data-Driven Business Intelligence Solutions</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 text-blue-600">🤝 Why Choose Us?</h2>
        <ul className="list-disc list-inside space-y-2 mt-2 text-base">
          <li>Client-Centric Approach</li>
          <li>Agile Development Methodology</li>
          <li>Expert Team with Proven Experience</li>
          <li>100% Transparency & Timely Delivery</li>
        </ul>

        <div className="mt-10 text-center">
          <p className="text-lg font-medium">Want to know more or work with us?</p>
          <a
            href="/signin"
            className="inline-block mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutPages;
