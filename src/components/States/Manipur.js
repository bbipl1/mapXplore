import React, { useState } from 'react';
import { motion } from 'framer-motion';
import manipurMap from '../../assets/State/Manipur/Manipur.jpg';

const Manipur = () => {
  const [selectedCity, setSelectedCity] = useState('Imphal');

  const cities = [
    'Imphal',
    'Kaina',
    'Bishnupur',
    'Loktak Lake',
    'Moreh',
    'Keibul Lamjao National Park'
  ];

  const cityContent = {
    Imphal: `Manipur is situated in the Northeast region of India. Imphal is the capital of Manipur. The state comprises people of various cultures such as Kuki, Naga, Pangal and Mizo, who speak different languages. The total area covered by Manipur is 22,347 square kilometers. Manipur shares its borders with Nagaland, Mizoram, and Assam. The state shares its international borders with Myanmar.

About Manipur

Manipur is paradise on earth. It literally means "The Jeweled Land". Manipur is richly endowed with natural beauty and splendour. It is home to Sangai, a rare species of deer and Siroy Lily, the only terrestrial lily grown on the hill tops of Siroi hill. St. Clair Grimwood described it as "A pretty place, more beautiful than many show places of the world." Late Pandit Jawaharlal Nehru paid a fitting tribute by describing it as "Jewel of India"...`,

    Kaina: `Kaina is a sacred place of the Hindus located in Manipur. It is believed to be associated with Shri Govindajee, and the temple here is surrounded by lush greenery, making it a serene spot for both spiritual and nature lovers.`,

    Bishnupur: `Bishnupur is famous for its ancient temples and historical significance in Manipur. It is known for the Vishnu Temple built in the 15th century and also serves as a cultural hub.`,

    'Loktak Lake': `Loktak Lake is the largest freshwater lake in northeast India. It is known for its phumdis (floating islands) and is home to the endangered Sangai deer found in the Keibul Lamjao National Park, the only floating national park in the world.`,

    Moreh: `Moreh is a border town in Manipur that serves as a trade gateway between India and Myanmar. It is known for its cultural diversity and bustling local markets.`,

    'Keibul Lamjao National Park': `This is the only floating national park in the world and is located on Loktak Lake. It is home to the endangered Sangai deer, the state animal of Manipur, and offers a unique ecological experience.`
  };

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="w-1/4 bg-gray-100 p-6 shadow-md">
        <h2 className="text-xl font-bold mb-4">Cities of Manipur</h2>
        <ul>
          {cities.map(city => (
            <li
              key={city}
              className={`cursor-pointer p-2 mb-2 rounded hover:bg-blue-200 ${
                selectedCity === city ? 'bg-blue-500 text-white' : 'bg-white text-black'
              }`}
              onClick={() => setSelectedCity(city)}
            >
              {city}
            </li>
          ))}
        </ul>
      </div>

      {/* Content Area */}
      <div className="flex-1 p-8 overflow-y-auto">
        <img
          src={manipurMap}
          alt="Manipur Map"
          className="w-full h-96 object-cover rounded-2xl shadow mb-8"
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold mb-4">{selectedCity}</h1>
          <p className="text-lg whitespace-pre-line">{cityContent[selectedCity]}</p>
        </motion.div>
      </div>
    </div>
  );
};

export default Manipur;
