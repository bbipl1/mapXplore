import React from "react";

const AdditionalSidebar = () => {
  const sections = [
    {
      title: "About India",
      links: [
        "My India", "Political Map of India", "States and Capitals of India", "Districts of India",
        "Physical Map of India", "India Outline Map", "India River Map", "India Satellite Map",
        "India Zone Map", "Tier I And Tier II Cities of India", "Current CM and Governors of India",
        "Per Capita Income of India", "Climate Map of India", "Temperature Map of India",
        "India Seismic Zone Map", "India Topographic Map", "Mountain Ranges in India",
        "Soil Map of India", "Vegetation Map of India", "Lakes in India", "Telecom Circles Map",
        "Hydro Power Plants in India", "Thermal Power Plants in India", "Nuclear Power Plants in India",
        "Pre Partition Map of India", "Annual Rainfall in India", "Water Resources of India",
        "Map of Ruling Parties of India", "India Map in Various Languages", "Google Map India",
        "Universities in India"
      ],
    },
    {
      title: "Transport Network in India",
      links: [
        "India Road Map", "National Highways in India", "India Railway Map", "Indian Railways Timetable",
        "Railway Zones Map of India", "Konkan Railway", "Delhi Metro", "Airports in India",
        "Air Network in India", "Ports in India"
      ],
    },
    {
      title: "Facts about India",
      links: [
        "India Flag", "Independence Day Wallpapers", "India Independence Day 2019",
        "Geography of India", "History of India", "India Census Maps", "Economy of India",
        "Culture of India", "Why India Matters", "Chief Ministers of India"
      ],
    },
    {
      title: "Travel to India",
      links: [
        "Tourist Places in India", "Religious Places in India", "Taj Mahal India",
        "Taj Mahal Facts", "Char Dham Yatra", "Beaches in India", "Hill Stations in India",
        "Hotels in India", "Jyotirlinga Shrines in India"
      ],
    },
    {
      title: "States of India",
      links: ["Andhra Pradesh", "Goa", "Gujarat", "Tamilnadu"],
    },
    {
      title: "Cities of India",
      links: ["Delhi", "Mumbai", "Kolkata"],
    },
    {
      title: "World Map",
      links: ["World Continents Map", "Custom Mapping", "Major Events in 2019", "Republic Day Images"],
    },
    {
      title: "My India",
      links: [
        "Start-up India Stand-up India", "No interviews for junior posts in Govt. jobs",
        "India at the 2016 Rio Olympics", "What is Net Neutrality", "Land Acquisition Bill",
        "Child Labour in India", "Water crisis in India", "Unemployment in India",
        "Overpopulation in India", "Poverty in India", "Importance of Education", "Indus Water Treaty"
      ],
    },
  ];

  return (
    <div className="w-64 bg-gray-50 shadow-lg border-r border-gray-300 p-4">
      {sections.map((section, index) => (
        <div key={index} className="mb-5">
          {/* Section Header */}
          <h3 className="text-md font-semibold text-white bg-blue-700 px-3 py-2 rounded-t-md">
            {section.title}
          </h3>
          {/* List Items */}
          <ul className="bg-white shadow-sm rounded-b-md border border-gray-200 p-2 space-y-1">
            {section.links.map((item, idx) => (
              <li
                key={idx}
                className="text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 cursor-pointer px-2 py-1 rounded transition duration-200"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default AdditionalSidebar;
