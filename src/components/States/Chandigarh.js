import React, { useState } from 'react';
import chandigarhImage from "../../assets/State/Chandigarh/Chandigarh.jpg";

const Sidebar = ({ sectors, onSelect }) => (
  <div className="w-64 h-full overflow-y-auto bg-gray-100 p-4 border-r">
    <h2 className="text-xl font-semibold mb-4">Sectors</h2>
    <ul>
      {sectors.map((sector) => (
        <li
          key={sector.name}
          className="cursor-pointer hover:text-blue-600 mb-2"
          onClick={() => onSelect(sector)}
        >
          {sector.name}
        </li>
      ))}
    </ul>
  </div>
);

const ChandigarhInfo = ({ selectedSector }) => (
  <div className="flex-1 p-6 overflow-y-auto">
    <h1 className="text-3xl font-bold mb-4">Chandigarh</h1>
    <img
      src={chandigarhImage}
      alt="Chandigarh"
      className="w-full max-w-2xl mx-auto mb-6 rounded-xl shadow-lg"
    />
    <div className="bg-white shadow-md rounded-xl p-6 mb-6 space-y-4 text-justify text-base">
      <p>
        Chandigarh, the capital of both Punjab and Haryana, is a union territory in India and one of the best-planned cities in the country. Known for its architecture by Le Corbusier, green spaces, and high standard of living, it features well-organized sectors with dedicated purposes.
      </p>
      {selectedSector && (
        <div className="mt-4 border-t pt-4">
          <h2 className="text-xl font-semibold mb-2">
            {selectedSector.name} Sector Details
          </h2>
          <p>{selectedSector.description}</p>
        </div>
      )}
    </div>
  </div>
);

const ChandigarhComponent = () => {
  const [selectedSector, setSelectedSector] = useState(null);

  const sectors = [
    { name: "Sector 1", description: "Includes Capitol Complex, the seat of government buildings." },
    { name: "Sector 17", description: "Chandigarh's commercial and shopping hub." },
    { name: "Sector 22", description: "One of the oldest sectors, known for local markets." },
    { name: "Sector 35", description: "A lively area with restaurants and nightlife." },
    { name: "Sector 43", description: "Major transport hub with inter-state bus terminal." },
    { name: "Sector 16", description: "Location of Postgraduate Institute of Medical Education and Research (PGIMER)." },
    { name: "Sector 10", description: "Known for the Government Museum and Art Gallery." },
  ];

  return (
    <div className="flex h-screen">
      <Sidebar sectors={sectors} onSelect={setSelectedSector} />
      <ChandigarhInfo selectedSector={selectedSector} />
    </div>
  );
};

export default ChandigarhComponent;