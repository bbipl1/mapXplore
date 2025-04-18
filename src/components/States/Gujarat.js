import React, { useState } from "react";
import gujaratImage from "../../assets/State/Gujarat/Gujarat.jpg"; // update this to actual Gujarat map image

const GujaratSidebar = () => {
  const [selectedCity, setSelectedCity] = useState(null);

  const cities = [
    "Ahmedabad", "Surat", "Vadodara", "Rajkot", "Bhavnagar", "Jamnagar",
    "Junagadh", "Gandhinagar", "Anand", "Navsari", "Bharuch", "Vapi",
    "Morbi", "Mehsana", "Nadiad", "Porbandar", "Gondal", "Veraval",
    "Godhra", "Palanpur"
  ];

  const gujaratInfo = `
Gujarat or "the land of the legends" is one of the most important states situated in the western part of the country. Geographically bordered by the vast Arabian Sea and Pakistani province of Sindh on the west, Rajasthan on the north, Maharashtra with Diu, Dadra, Daman union territories on the south and Madhya Pradesh on the east, Gujarat stand unique in its topographical as well as geographical landscape...

Official Website: www.gujaratindia.com
Date of Formation: May 1, 1960
Area: 1,96,244 km2
Density: 308/Km2
Population (2011): 6,04,39,692
Capital: Gandhinagar
Languages: English, Gujarati, Sindhi, Marwari, Kutchi, Urdu, Hindi, Sourashtra, Vasavi
State Animal: Asiatic Lion
State Bird: Greater Flamingo
State Tree: Mango
State Flower: Marigold (Galgota)
Literacy Rate (2011): 76.64%
Female per 1000 males: 918
Assembly Constituency: 182
Parliamentary Constituency: 26
`;

  return (
    <div className="flex flex-col md:flex-row h-full w-full">
      {/* Sidebar */}
      <div className="w-full md:w-64 bg-gray-100 p-4 shadow-md">
        <h2 className="text-xl font-bold mb-4">Districts</h2>
        <ul className="space-y-2">
          {cities.map((city) => (
            <li
              key={city}
              className={`cursor-pointer px-3 py-2 rounded-lg hover:bg-blue-100 transition ${
                selectedCity === city ? "bg-blue-200" : ""
              }`}
              onClick={() => setSelectedCity(city)}
            >
              {city}
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        <h1 className="text-3xl font-bold mb-4">Gujarat</h1>
        <img
          src={gujaratImage}
          alt="Gujarat Map"
          className="w-full max-w-md mb-6 rounded shadow"
        />
        <div>
          <p className="whitespace-pre-wrap text-sm">{gujaratInfo}</p>
        </div>
      </div>
    </div>
  );
};

export default GujaratSidebar;
