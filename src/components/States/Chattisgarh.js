import React, { useState } from 'react';
import chhattisgarhImage from "../../assets/State/Chhattisgarh/Chhattishgarh.jpg";

const Sidebar = ({ districts, onSelect }) => (
  <div className="w-64 h-screen bg-gray-100 p-6 border-r shadow-md">
    <h2 className="text-xl font-bold mb-4 text-gray-800">Districts</h2>
    <ul className="space-y-2">
      {districts.map((district) => (
        <li
          key={district.name}
          className="cursor-pointer text-gray-700 hover:text-blue-600 transition"
          onClick={() => onSelect(district)}
        >
          {district.name}
        </li>
      ))}
    </ul>
  </div>
);

const ChhattisgarhInfo = ({ selectedDistrict }) => (
  <div className="flex-1 p-10 overflow-y-auto">
    <h1 className="text-4xl font-bold text-gray-900 text-center mb-6">Chhattisgarh</h1>
    <div className="flex justify-center mb-8">
      <img
        src={chhattisgarhImage}
        alt="Chhattisgarh"
        className="w-full max-w-md rounded-xl shadow-lg"
      />
    </div>
    <div className="bg-white shadow-lg rounded-xl p-6 text-justify text-base leading-relaxed text-gray-800">
      <p>
        On November 1, 2000, India gave birth to a new state called Chhattisgarh which was carved out of Madhya Pradesh. Chhattisgarh is rich in mineral resources and has significant power and steel industries. It is known for its cultural heritage, forests, and waterfalls. Raipur is the capital city, and the state is divided into multiple districts.
      </p>

      {selectedDistrict && (
        <div className="mt-6 border-t pt-6">
          <h2 className="text-2xl font-semibold mb-2 text-blue-700">
            {selectedDistrict.name} District Details
          </h2>
          <p>{selectedDistrict.description}</p>
        </div>
      )}
    </div>
  </div>
);

const ChhattisgarhComponent = () => {
  const [selectedDistrict, setSelectedDistrict] = useState(null);

  const districts = [
    { name: "Raipur", description: "Capital of Chhattisgarh, a major industrial and educational hub." },
    { name: "Bilaspur", description: "Known for the High Court and Achanakmar Wildlife Sanctuary." },
    { name: "Durg", description: "An important city with a strong steel industry." },
    { name: "Bastar", description: "Rich in tribal culture and home to Chitrakote Falls." },
    { name: "Korba", description: "A major center for coal mining and power generation." },
    { name: "Jagdalpur", description: "Gateway to Bastar with scenic landscapes and waterfalls." },
    { name: "Raigarh", description: "A growing industrial city, especially for power and steel." },
    { name: "Dantewada", description: "Known for tribal heritage and forests." },
    { name: "Kanker", description: "Famous for its palace, waterfalls, and tribal markets." },
    { name: "Sarguja", description: "Taat Pani hot spring and tribal culture are key highlights." },
  ];

  return (
    <div className="flex">
      <Sidebar districts={districts} onSelect={setSelectedDistrict} />
      <ChhattisgarhInfo selectedDistrict={selectedDistrict} />
    </div>
  );
};

export default ChhattisgarhComponent;
