import React from 'react';
import goaImage from '../../assets/State/Goa/Goa.jpg'; // Make sure the image is in the correct folder

const Goa = () => {
  return (
    <div className="flex flex-col items-center p-4">
      <img
        src={goaImage}
        alt="Goa"
        className="w-full max-h-[400px] object-cover rounded-2xl shadow-md mb-6"
      />
      <div className="w-full p-6 bg-white rounded-2xl shadow-md">
        <h2 className="text-2xl font-bold mb-4">Goa</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Goa, the smallest state in India by area, is renowned for its beautiful beaches, Portuguese heritage, and vibrant nightlife. Located on the western coast of India, Goa boasts a unique blend of Indian and European cultures. It's one of the most popular tourist destinations in the country, drawing both domestic and international visitors throughout the year.
        </p>

        <h3 className="text-xl font-semibold mb-2">Capital</h3>
        <p className="text-gray-700 mb-4">Panaji</p>

        <h3 className="text-xl font-semibold mb-2">Major Cities</h3>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li>Panaji</li>
          <li>Vasco da Gama</li>
          <li>Margao</li>
          <li>Mapusa</li>
        </ul>

        <h3 className="text-xl font-semibold mb-2">Key Facts</h3>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li>Area: 3,702 sq km</li>
          <li>Population: 14,58,545 (2011 Census)</li>
          <li>Official Language: Konkani</li>
          <li>Other Spoken Languages: Marathi, English, Hindi</li>
          <li>Districts: North Goa and South Goa</li>
          <li>State Animal: Gaur</li>
          <li>State Bird: Black Crested Bulbul</li>
          <li>State Tree: Matti</li>
        </ul>

        <h3 className="text-xl font-semibold mb-2">Tourism Highlights</h3>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li>Beaches: Baga, Anjuna, Colva, Palolem</li>
          <li>Churches: Basilica of Bom Jesus, Se Cathedral</li>
          <li>Wildlife Sanctuaries: Bhagwan Mahavir, Bondla, Cotigao</li>
          <li>Festivals: Goa Carnival, Sunburn Festival, Sao Joao</li>
        </ul>

        <h3 className="text-xl font-semibold mb-2">Culture & Heritage</h3>
        <p className="text-gray-700">
          Goa’s culture is a vibrant mix of Hindu and Portuguese traditions. The state is famous for its seafood, music, and dance forms like Fugdi and Dekhnni. Architecture in Goa reflects its colonial past, with many well-preserved churches and heritage homes.
        </p>
      </div>
    </div>
  );
};

export default Goa;
