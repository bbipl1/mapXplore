import React, { useState } from 'react';
import madhyaPradeshMap from '../../assets/State/MadhyaPradesh/Madhyapradesh.jpg';

const cities = [
  'Bhopal',
  'Indore',
  'Gwalior',
  'Jabalpur',
  'Ujjain',
  'Sagar',
  'Rewa',
  'Satna',
  'Ratlam',
  'Dewas',
  'Chhindwara',
  'Katni',
  'Khandwa',
  'Shivpuri',
  'Vidisha'
];

const MadhyaPradesh = () => {
  const [selectedCity, setSelectedCity] = useState('Bhopal');

  return (
    <div className="flex max-w-6xl mx-auto p-6">
      {/* Sidebar */}
      <aside className="w-1/4 pr-6">
        <h2 className="text-xl font-semibold mb-4">Cities</h2>
        <ul className="space-y-2">
          {cities.map((city) => (
            <li
              key={city}
              className={`cursor-pointer px-3 py-2 rounded-lg hover:bg-blue-100 ${selectedCity === city ? 'bg-blue-200 font-semibold' : ''}`}
              onClick={() => setSelectedCity(city)}
            >
              {city}
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Content */}
      <main className="w-3/4">
        <h1 className="text-3xl font-bold mb-4 text-center">Madhya Pradesh</h1>

        <img
          src={madhyaPradeshMap}
          alt="Madhya Pradesh Map"
          className="rounded-lg shadow-md w-full mb-4"
        />
        <p className="text-sm italic text-center text-gray-500 mb-8">
          Map showing major roads, railways, rivers, national highways, etc. <br />
          Disclaimer: All efforts have been made to make this image accurate. However Mapping Digiworld Pvt Ltd and its directors do not own any responsibility for the correctness or authenticity of the same.
        </p>

        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold">About Madhya Pradesh</h2>
            <p>
              Landlocked in the central part of the country, Madhya Pradesh is bordered by the states of Rajasthan to its northwest, Uttar Pradesh to its north, Chhattisgarh to its east, Maharashtra to its south, and Gujarat to its west. Madhya Pradesh had the honour of being the largest state of the country until Chhattisgarh was carved out of it on November 1, 2000.
            </p>
            <p>
              Madhya Pradesh has a mixed topography that consists of both hills and plains. The state has three predominant seasons: winter (November to February), summer (March to May), and the monsoon season (June to September). During the winter, average temperatures range from 10° to 27° C (50° to 81° F). Summers are hot, with an average temperature of 29° C (85° F) and a high temperature that at times reaches 48° C (118° F). During the monsoon season average temperature lies between average 19° to 30° C (66° to 86°). Madhya Pradesh receives an average annual rainfall of about 1200 mm (nearly 50 inches), of which 90 percent falls during the monsoon season. The capital of the state is Bhopal.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">Facts on Madhya Pradesh</h2>
            <ul className="list-disc list-inside">
              <li>Official Website: www.mp.nic.in</li>
              <li>Date of Formation: Nov 1, 1956</li>
              <li>Area: 308,244 sq km</li>
              <li>Density: 236/Km²</li>
              <li>Population (2011): 72,626,809</li>
              <li>Males Population (2011): 37,612,306</li>
              <li>Females Population (2011): 35,014,503</li>
              <li>No. of Districts: 51</li>
              <li>Capital: Bhopal</li>
              <li>Rivers: Narmada, Tapti, Ken, Betwa, Son, Chambal</li>
              <li>Forests & National Parks: Bandhavgarh NP, Kanha NP, Pench NP, Kheoni WS</li>
              <li>Languages: Punjabi, Malvi, Nimadi, Punjabi, Bhilodi, Gondi, Korku, Kalto, Nihali</li>
              <li>Neighbours: Maharashtra, Gujarat, Rajasthan, Uttar Pradesh, Chhattisgarh</li>
              <li>State Animal: Swamp Deer</li>
              <li>State Bird: Paradise Fly-catcher</li>
              <li>State Tree: Banyan</li>
              <li>Net State Domestic Product (2011): ₹32,222 crore</li>
              <li>Literacy Rate (2011): 82.91%</li>
              <li>Females per 1000 males: 930</li>
              <li>Assembly constituencies: 230</li>
              <li>Parliamentary constituencies: 29</li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
};

export default MadhyaPradesh;