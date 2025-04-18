import React, { useState } from 'react';

const Nagaland = () => {
  const districts = [
    'Kohima',
    'Dimapur',
    'Mokokchung',
    'Mon',
    'Tuensang',
    'Zunheboto',
    'Phek',
    'Wokha',
    'Peren',
    'Longleng',
    'Kiphire',
    'Noklak',
    'Tseminyu',
    'Chümoukedima',
    'Niuland',
    'Shamator',
  ];

  const [selectedDistrict, setSelectedDistrict] = useState('Kohima');

  return (
    <div className="flex flex-col md:flex-row px-4 sm:px-10 md:px-20 py-10 text-[#333] gap-10">
      {/* Left Sidebar: District List */}
      <div className="md:w-1/4 w-full bg-gray-100 rounded-lg shadow-md p-4 h-fit sticky top-10">
        <h2 className="text-xl font-bold mb-4 text-[#2E3A59]">Districts</h2>
        <ul className="space-y-2">
          {districts.map((district) => (
            <li
              key={district}
              className={`cursor-pointer px-3 py-2 rounded-md ${
                selectedDistrict === district
                  ? 'bg-blue-600 text-white font-semibold'
                  : 'hover:bg-blue-100'
              }`}
              onClick={() => setSelectedDistrict(district)}
            >
              {district}
            </li>
          ))}
        </ul>
      </div>

      {/* Right Content Area */}
      <div className="md:w-3/4 w-full">
        {/* Image */}
        <div className="w-full h-64 sm:h-96 mb-10">
          <img
            src={require('../../assets/State/Nagaland/Nagaland.jpg')}
            alt="Nagaland"
            className="w-full h-full object-cover rounded-lg shadow-md"
          />
        </div>

        {/* About Section */}
        <section className="mb-10">
          <h1 className="text-4xl font-bold text-[#2E3A59] mb-4">Nagaland</h1>
          <p className="text-lg leading-7">
            Nagaland, located in the northeastern part of India, is a land of vibrant tribes, pristine landscapes,
            and rich cultural heritage. Known as the “Land of Festivals,” each tribe in Nagaland celebrates its own
            unique traditions and customs...
          </p>
        </section>

        {/* Add all your remaining sections below this point (Quick Facts, Tourism, Geography, Culture...) */}
        
        {/* Example: Tourism */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-[#2E3A59] mb-3">Tourism</h2>
          <p className="text-lg leading-7 mb-2">
            Nagaland is famous for its scenic beauty, tribal culture, and vibrant festivals...
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>Hornbill Festival, Kisama</li>
            <li>Dzukou Valley – Famous for trekking</li>
            {/* rest of your tourism list */}
          </ul>
        </section>

        {/* Copy-paste all your existing sections here exactly as you wrote them earlier */}
        {/* Geography, Culture & Society, Food, Education, Transport, Government, Famous Personalities */}

        {/* Example Footer */}
        <div className="mt-10">
          <h2 className="text-xl font-bold text-[#2E3A59] mb-4">
            Selected District: {selectedDistrict}
          </h2>
          <p className="text-lg">You can show dynamic district-specific data here in future.</p>
        </div>
      </div>
    </div>
  );
};

export default Nagaland;
