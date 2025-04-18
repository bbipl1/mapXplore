import React, { useState } from 'react';
import karnatakaMap from '../../assets/State/Karnataka/Karnataka.jpg';

const districts = [
  'Bengaluru',
  'Mysuru',
  'Mangaluru',
  'Hubballi',
  'Belagavi',
  'Ballari',
  'Davangere',
  'Tumakuru',
  'Shivamogga',
  'Kalaburagi'
];

const Karnataka = () => {
  const [selectedDistrict, setSelectedDistrict] = useState('Bengaluru');

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
        <h1 className="text-3xl font-bold mb-4 text-center">Karnataka</h1>

        <img
          src={karnatakaMap}
          alt="Karnataka Map"
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
              Karnataka is one of the well-known states in South West India. Originally, it was known as State of Mysore but was renamed Karnataka in the year 1973. Bangalore is the largest city, and also the capital of this state. Karnataka is the 6th largest state in India by population and has 30 districts. Kannada is the official and extensively spoken language. Other languages include Konkani, Tulu, and Hindi.
            </p>
            <p>
              It is bordered by Maharashtra, Goa, Kerala, Andhra Pradesh, Telangana, and Tamil Nadu. The two main rivers are Krishna in the north and Kaveri in the south. According to the 2018 Census, the population is 6.87 crore.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">Facts on Karnataka</h2>
            <ul className="list-disc list-inside">
              <li>Official Website: www.karnataka.gov.in</li>
              <li>Date of Formation: Nov 1, 1956</li>
              <li>Area: 191,791 sq km</li>
              <li>Density: 319/Km²</li>
              <li>Population (2011): 61,095,297</li>
              <li>Males Population (2011): 30,966,657</li>
              <li>Females Population (2011): 30,128,640</li>
              <li>No. of Districts: 30</li>
              <li>Capital: Bengaluru</li>
              <li>Rivers: Arkavati, Sharavati, Malaprabha, Hemavati</li>
              <li>Forests & National Parks: Bandipur NP, Nagarhole NP, Mudumalai NP</li>
              <li>Languages: Kannada, Tulu, Hindi, Bengali, Mahl</li>
              <li>Neighbours: Maharashtra, Goa, Kerala, Andhra Pradesh, Telangana, Tamil Nadu</li>
              <li>State Animal: Elephant</li>
              <li>State Bird: Indian Roller</li>
              <li>State Tree: Sandal</li>
              <li>State Flower: Lotus</li>
              <li>Net State Domestic Product (2011): ₹60,946 crore</li>
              <li>Literacy Rate (2011): 75.36%</li>
              <li>Females per 1000 males: 968</li>
              <li>Assembly constituencies: 224</li>
              <li>Parliamentary constituencies: 28</li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Karnataka;