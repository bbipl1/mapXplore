import React, { useState } from 'react';
import maharashtraMap from '../../assets/State/Maharashtra/Maharashtra.jpg';

const districts = [
  'Mumbai',
  'Pune',
  'Nagpur',
  'Nashik',
  'Aurangabad',
  'Solapur',
  'Amravati',
  'Kolhapur',
  'Thane',
  'Latur'
];

const Maharashtra = () => {
  const [selectedDistrict, setSelectedDistrict] = useState('Mumbai');

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
        <h1 className="text-3xl font-bold mb-4 text-center">Maharashtra</h1>

        <img
          src={maharashtraMap}
          alt="Maharashtra Map"
          className="rounded-lg shadow-md w-full mb-4"
        />
        <p className="text-sm italic text-center text-gray-500 mb-8">
          Map showing major roads, railways, rivers, national highways, etc. <br />
          Disclaimer: All efforts have been made to make this image accurate. However Mapping Digiworld Pvt Ltd and its directors do not own any responsibility for the correctness or authenticity of the same.
        </p>

        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold">About Maharashtra</h2>
            <p>
              Maharashtra, located in the western peninsular region of India, is the second-most populous state and third-largest by area. It is bordered by the Arabian Sea to the west and shares boundaries with Gujarat, Madhya Pradesh, Chhattisgarh, Telangana, Karnataka, and Goa. Its capital, Mumbai, is also the financial capital of India.
            </p>
            <p>
              The state has diverse geography including coastal regions, the Western Ghats, and the Deccan plateau. It experiences a tropical monsoon climate. Maharashtra has a rich cultural heritage and is known for its forts, caves, pilgrimage centers, and festivals.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">Facts on Maharashtra</h2>
            <ul className="list-disc list-inside">
              <li>Official Website: www.maharashtra.gov.in</li>
              <li>Date of Formation: May 1, 1960</li>
              <li>Area: 307,713 sq km</li>
              <li>Density: 365/Km²</li>
              <li>Population (2011): 112,374,333</li>
              <li>Males Population (2011): 58,243,056</li>
              <li>Females Population (2011): 54,131,277</li>
              <li>No. of Districts: 36</li>
              <li>Capital: Mumbai</li>
              <li>Rivers: Godavari, Krishna, Bhima, Tapi, Wardha</li>
              <li>Forests & National Parks: Sanjay Gandhi NP, Tadoba NP, Navegaon NP, Pench NP</li>
              <li>Languages: Marathi, Hindi, English, Urdu, Konkani</li>
              <li>Neighbours: Gujarat, Madhya Pradesh, Chhattisgarh, Telangana, Karnataka, Goa</li>
              <li>State Animal: Indian Giant Squirrel</li>
              <li>State Bird: Yellow-footed Green Pigeon</li>
              <li>State Tree: Mango</li>
              <li>Net State Domestic Product (2011): ₹18.56 lakh crore</li>
              <li>Literacy Rate (2011): 82.34%</li>
              <li>Females per 1000 males: 929</li>
              <li>Assembly constituencies: 288</li>
              <li>Parliamentary constituencies: 48</li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Maharashtra;
