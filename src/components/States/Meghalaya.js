import React, { useState } from 'react';
import { motion } from 'framer-motion';
import meghalayaMap from '../../assets/State/Meghalaya/Meghalaya.jpg';

const Meghalaya = () => {
  const [selectedCity, setSelectedCity] = useState('Shillong');

  const cities = [
    'Shillong',
    'Cherrapunji',
    'Mawsynram',
    'Tura',
    'Dawki',
    'Nongstoin'
  ];

  const cityContent = {
    Shillong: `Shillong is the capital of Meghalaya and is known as the "Scotland of the East" due to its rolling hills and pleasant climate. It is a hub of culture, music, and education in the region. The city features colonial-era architecture, waterfalls, and vibrant markets.`,

    Cherrapunji: `Cherrapunji, also known as Sohra, is famous for receiving one of the highest amounts of rainfall in the world. It boasts stunning waterfalls, limestone caves, and living root bridges built by indigenous tribes.`,

    Mawsynram: `Mawsynram holds the record as one of the wettest places on Earth. Surrounded by lush green landscapes, it is a serene village ideal for nature enthusiasts and rain lovers.`,

    Tura: `Tura is a picturesque town located in the Garo Hills of western Meghalaya. It offers panoramic views of the surrounding hills and is rich in flora and fauna. It is also a gateway to Nokrek National Park.`,

    Dawki: `Dawki is a small town on the Indo-Bangladesh border known for the crystal-clear Umngot River. Boating in its transparent waters is a popular activity among tourists.`,

    Nongstoin: `Nongstoin is the headquarters of the West Khasi Hills district and is known for its scenic beauty, waterfalls, and traditional Khasi culture.`
  };

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="w-1/4 bg-white p-6 shadow-xl rounded-r-2xl">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800 border-b pb-2">Cities of Meghalaya</h2>
        <ul>
          {cities.map(city => (
            <li
              key={city}
              className={`cursor-pointer p-3 mb-3 rounded-lg transition-all duration-300 font-medium ${
                selectedCity === city ? 'bg-gradient-to-r from-green-400 to-blue-500 text-white' : 'bg-gray-100 hover:bg-blue-100 text-gray-800'
              }`}
              onClick={() => setSelectedCity(city)}
            >
              {city}
            </li>
          ))}
        </ul>
      </div>

      {/* Content Area */}
      <div className="flex-1 p-10 bg-gray-50 overflow-y-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-700">Explore Meghalaya</h1>
        <img
          src={meghalayaMap}
          alt="Meghalaya Map"
          className="w-full h-96 object-cover rounded-3xl shadow-lg mb-8 hover:scale-105 transition-transform duration-500"
        />
        <motion.div
          key={selectedCity}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-semibold mb-4 text-green-700">{selectedCity}</h2>
          <p className="text-lg leading-relaxed text-gray-700 whitespace-pre-line">{cityContent[selectedCity]}</p>
        </motion.div>
      </div>
    </div>
  );
};

export default Meghalaya;
