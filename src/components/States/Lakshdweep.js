import React, { useState } from 'react';
import lakshadweepMap from '../../assets/State/Lakshadweep/Lakshadweep.jpg';

const islands = [
  'Andrott',
  'Amini',
  'Agatti',
  'Bitra',
  'Chetlat',
  'Kadmat',
  'Kalpeni',
  'Kavaratti',
  'Kiltan',
  'Minicoy'
];

const Lakshadweep = () => {
  const [selectedIsland, setSelectedIsland] = useState('Kavaratti');

  return (
    <div className="flex max-w-6xl mx-auto p-6">
      {/* Sidebar */}
      <aside className="w-1/4 pr-6">
        <h2 className="text-xl font-semibold mb-4">Islands</h2>
        <ul className="space-y-2">
          {islands.map((island) => (
            <li
              key={island}
              className={`cursor-pointer px-3 py-2 rounded-lg hover:bg-blue-100 ${selectedIsland === island ? 'bg-blue-200 font-semibold' : ''}`}
              onClick={() => setSelectedIsland(island)}
            >
              {island}
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Content */}
      <main className="w-3/4">
        <h1 className="text-3xl font-bold mb-4 text-center">Lakshadweep</h1>

        <img
          src={lakshadweepMap}
          alt="Lakshadweep Map"
          className="rounded-lg shadow-md w-full mb-4"
        />
        <p className="text-sm italic text-center text-gray-500 mb-8">
          Map showing islands and geographical features. <br />
          Disclaimer: All efforts have been made to make this image accurate. However Mapping Digiworld Pvt Ltd and its directors do not own any responsibility for the correctness or authenticity of the same.
        </p>

        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold">About Lakshadweep</h2>
            <p>
              Lakshadweep, in the Arabian Sea, is the smallest union territory of India. It consists of 36 islands, including 12 atolls, 5 banks, 3 reefs, and several islets. The name means "hundred thousand islands" in Malayalam and Sanskrit. Known for its pristine beaches and marine biodiversity, Lakshadweep is a prime destination for eco-tourism.
            </p>
            <p>
              The capital, Kavaratti, is a scenic and peaceful island. Languages spoken include Malayalam, Mahi, Tamil, and Hindi. The total land area is only 32 sq km, and only 10 of the islands are inhabited.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">Facts on Lakshadweep</h2>
            <ul className="list-disc list-inside">
              <li>Official Website: www.lakshadweep.gov.in</li>
              <li>Date of Formation: Nov 1, 1956</li>
              <li>Area: 32 sq km</li>
              <li>Density: 2000/Km²</li>
              <li>Population (2011): 64,473</li>
              <li>Males: 33,123</li>
              <li>Females: 31,350</li>
              <li>No. of Districts: 1</li>
              <li>Capital: Kavaratti</li>
              <li>Forests & National Parks: Pitti Bird Sanctuary</li>
              <li>Languages: Divehi, Malayalam, Jeseri, Tamil, Mahi, English</li>
              <li>State Animal: Butterfly fish</li>
              <li>State Bird: Noddy Tern</li>
              <li>State Tree: Bread fruit</li>
              <li>Literacy Rate: 92.28%</li>
              <li>Females per 1000 males: 946</li>
              <li>Parliamentary Constituency: 1</li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Lakshadweep;
