import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const sidebarSections = [
    // {
    //   title: "Maps of India",
    //   links: [
    //     { name: "Map of India", path: "/map-of-india" },
    //     { name: "Physical Map of India", path: "/physical-map" },
    //     { name: "Outline Map of India", path: "/outline-map" },
    //     { name: "More...", path: "/moreinfopage" },
    //   ],
    // },
    // {
    //   title: "India Maps And Views",
    //   links: [
    //     { name: "India Geography", path: "/india-geography" },
    //     { name: "History of India", path: "/history" },
    //     { name: "India Census Maps", path: "/census-maps" },
    //     { name: "Business and Economy", path: "/business-economy" },
    //     { name: "India Culture", path: "/india-culture" },
    //     { name: "More...", path: "/india-maps-and-views" },
    //   ],
    // },
    // {
    //   title: "Transport Network In India",
    //   links: [
    //     { name: "Road Map of India", path: "/road-map" },
    //     { name: "India Rail Network", path: "/rail-network" },
    //     { name: "Air Network in India", path: "/air-network" },
    //     { name: "Ports in India & waterways", path: "/ports-waterways" },
    //     { name: "More...", path: "/transport-network" },
    //   ],
    // },
    // {
    //   title: "India Travel",
    //   links: [
    //     { name: "Hotels in India", path: "/hotels" },
    //     { name: "Temples in India", path: "/temples" },
    //     { name: "Hill Stations", path: "/hill-stations" },
    //     { name: "More...", path: "/india-travel" },
    //   ],
      
    // },
    {
      title: "India States & Union Territories",
      links: [
        { name: "Kerala", path: "/kerala" },
        { name: "Goa", path: "/goa" },
        { name: "Gujarat", path: "/gujarat" },
        { name: "Rajasthan", path: "/rajasthan" },
        { name: "More...", path: "/state-ut" },
      ],
    },
    // {
    //   title: "Cities Of India",
    //   links: [
    //     { name: "Top 10 Cities of India", path: "/top-cities" },
    //     { name: "Bangalore", path: "/bangalore" },
    //     { name: "Mumbai", path: "/mumbai" },
    //     { name: "Chennai", path: "/chennai" },
    //     { name: "More...", path: "/cities" },
    //   ],
    // },
    // {
    //   title: "Driving Direction Maps",
    //   links: [
    //     { name: "National Highways", path: "/national-highways" },
    //     { name: "Intra City Maps", path: "/intra-city-maps" },
    //     { name: "More...", path: "/driving-maps" },
    //   ],
    // },
    // {
    //   title: "World Map",
    //   links: [{ name: "World Map", path: "/world-map" }],
    // },
    // {
    //   title: "Product & Services",
    //   links: [
    //     { name: "India Maps Store", path: "/maps-store" },
    //     { name: "Custom Mapping", path: "/custom-mapping" },
    //     { name: "Location Locator Solutions", path: "/location-solutions" },
    //     { name: "More...", path: "/products-services" },
    //   ],
    // },
    // {
    //   title: "Our Channels",
    //   links: [
    //     { name: "Current Events", path: "/current-events" },
    //     { name: "India Automobiles", path: "/india-automobiles" },
    //     { name: "Live Cricket Score", path: "/live-cricket-score" },
    //     { name: "India News", path: "/india-news" },
    //   ],
    // },
    // {
    //   title: "Indien Karten",
    //   links: [
    //     { name: "Karten von Goa", path: "/karten-goa" },
    //     { name: "Landkarten von Kerala", path: "/landkarten-kerala" },
    //     { name: "Landkarten von Rajasthan", path: "/landkarten-rajasthan" },
    //     { name: "More...", path: "/indien-karten" },
    //   ],
    // },
    
  ];

  return (
    <aside className="w-full md:w-1/4 bg-white p-4 shadow-md">
      <h2 className="text-lg font-semibold text-blue-600">Quick-Links</h2>
      {sidebarSections.map((section, index) => (
        <div key={index} className="mt-4">
          <h3 className="text-md font-semibold text-white bg-blue-600 px-2 py-1">
            {section.title}
          </h3>
          <ul className="mt-2 text-sm space-y-2">
            {section.links.map((link, i) => (
              <li key={i}>
                <Link to={link.path} className="text-gray-700 hover:text-blue-600">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </aside>
  );
};

export default Sidebar;
