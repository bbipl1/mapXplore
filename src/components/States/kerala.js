import React, { useState } from 'react';
import keralaMap from '../../assets/State/Kerala/kerala.jpg';

const districts = [
  'Thiruvananthapuram',
  'Kollam',
  'Pathanamthitta',
  'Alappuzha',
  'Kottayam',
  'Idukki',
  'Ernakulam',
  'Thrissur',
  'Palakkad',
  'Malappuram',
  'Kozhikode',
  'Wayanad',
  'Kannur',
  'Kasaragod'
];

const Kerala = () => {
  const [selectedDistrict, setSelectedDistrict] = useState('Thiruvananthapuram');

  return (
    <div className="flex max-w-6xl mx-auto p-6">
      {/* Sidebar */}
      <aside className="w-1/4 pr-6">
        <h2 className="text-xl font-semibold mb-4">Districts</h2>
        <ul className="space-y-2">
          {districts.map((district) => (
            <li
              key={district}
              className={`cursor-pointer px-3 py-2 rounded-lg hover:bg-blue-100 ${selectedDistrict === district ? 'bg-blue-200 font-semibold' : ''}`}
              onClick={() => setSelectedDistrict(district)}
            >
              {district}
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Content */}
      <main className="w-3/4">
        <h1 className="text-3xl font-bold mb-4 text-center">Kerala</h1>

        <img
          src={keralaMap}
          alt="Kerala Map"
          className="rounded-lg shadow-md w-full mb-4"
        />
        <p className="text-sm italic text-center text-gray-500 mb-8">
          Map showing major roads, railways, rivers, national highways, etc. <br />
          Disclaimer: All efforts have been made to make this image accurate. However Mapping Digiworld Pvt Ltd and its directors do not own any responsibility for the correctness or authenticity of the same.
        </p>

        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold">About</h2>
            <p>
              Kerala is a state located on the southwestern coast of India. Known for its scenic backwaters, tropical greenery, and rich cultural traditions, Kerala is often referred to as "God's Own Country." The capital is Thiruvananthapuram, and Malayalam is the official language.
            </p>
            <p>
              Kerala shares its borders with Karnataka and Tamil Nadu, and it has a long coastline along the Arabian Sea. The state is a major tourist destination, famous for Ayurveda, classical arts, temples, and festivals. According to the 2011 Census, Kerala has a population of about 3.34 crore.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">Facts on Kerala</h2>
            <ul className="list-disc list-inside">
              <li>Official Website: www.kerala.gov.in</li>
              <li>Date of Formation: Nov 1, 1956</li>
              <li>Area: 38,863 sq km</li>
              <li>Density: 860/Km²</li>
              <li>Population (2011): 33,406,061</li>
              <li>Males Population (2011): 16,027,412</li>
              <li>Females Population (2011): 17,378,649</li>
              <li>No. of Districts: 14</li>
              <li>Capital: Thiruvananthapuram</li>
              <li>Rivers: Periyar, Bharathappuzha, Pamba</li>
              <li>Forests & National Parks: Periyar NP, Silent Valley NP, Eravikulam NP</li>
              <li>Languages: Malayalam, English, Tamil</li>
              <li>Neighbours: Karnataka, Tamil Nadu, Arabian Sea</li>
              <li>State Animal: Indian Elephant</li>
              <li>State Bird: Great Hornbill</li>
              <li>State Tree: Coconut Tree</li>
              <li>State Flower: Kanikonna (Golden Shower)</li>
              <li>Net State Domestic Product (2011): ₹2,76,796 crore</li>
              <li>Literacy Rate (2011): 94.00%</li>
              <li>Females per 1000 males: 1084</li>
              <li>Assembly constituencies: 140</li>
              <li>Parliamentary constituencies: 20</li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Kerala;