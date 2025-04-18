import React, { useState } from "react";
import haryanaImage from "../../assets/State/Haryana/Haryana.jpg"; // make sure the image exists at this path

const HaryanaSidebar = () => {
  const [selectedDistrict, setSelectedDistrict] = useState(null);

  const districts = [
    "Ambala", "Bhiwani", "Charkhi Dadri", "Faridabad", "Fatehabad",
    "Gurugram", "Hisar", "Jhajjar", "Jind", "Kaithal",
    "Karnal", "Kurukshetra", "Mahendragarh", "Nuh", "Palwal",
    "Panchkula", "Panipat", "Rewari", "Rohtak", "Sirsa",
    "Sonipat", "Yamunanagar"
  ];

  const haryanaInfo = `
Haryana, a state in north India formed on November 1, 1966, has a very fertile land and is called the Green Land of India. The state of Delhi is landlocked on three sides by Haryana. The capital city of Haryana is Chandigarh, which is also the capital of Punjab. The largest city of Haryana is Faridabad. The state of Haryana is stretched over an area of 44,212 sq. km.

Haryana can be divided into two natural areas; sub-Himalayan Terai and Indo-Gangetic plain. The plain is fertile and slopes from north to south with a height above sea level, averaging between 700 and 900 ft. South-west of Haryana is dry, sandy and barren. Haryana has no perennial river. The Ghaggar river flows through Haryana and passes through northern fringes of the state.

Official Website: www.haryana.gov.in
Date of Formation: November 1, 1966
Area: 44,212 sq km
Density: 573/Km2
Population (2011): 2,53,51,462
Capital: Chandigarh
Languages: Hindi, Punjabi, Urdu, Haryanvi
State Animal: Black Buck
State Bird: Black Francolin
State Tree: Sacred fig
State Flower: Lotus
Literacy Rate (2011): 83.78%
Females per 1000 males: 877
Assembly Constituency: 90
Parliamentary Constituency: 10

The region now known as Haryana has been the birthplace of the Hindu religion and many ancient civilizations. Urban settlements in Ghaggar Valley date from 3000 BC. It was the home of the legendary Bharata dynasty. The Mahabharata's epic battle between the Kauravas and Pandavas took place at Kurukshetra. Incorporated into the Mauryan Empire in the 3rd century BC, the area later became a power base for the Mughals.

Geographically located at 30.73° N and 76.78° E, Haryana lies in the northern part of India. Parts of it are included in the National Capital Region (NCR). It is bordered by Himachal Pradesh and Punjab in the north, Uttar Pradesh and Uttarakhand in the east, and Rajasthan in the south and west.

The state's economy is largely agricultural with more than 75% of the population involved in farming. Major crops include wheat, rice, oil seeds, sugarcane, cotton, potatoes, pulses, barley, millet, and maize. Haryana also leads in dairy and animal husbandry. Delhi acts as the main air traffic hub for the region.

Haryana is governed by a Chief Minister with executive powers and a ceremonial Governor. The unicameral legislature has 90 seats. The state sends 10 members to the Lok Sabha and 5 to the Rajya Sabha. The state is divided into 22 districts for local governance.

Educationally, Haryana has a literacy rate of 76.64% as per the 2011 census. Major cities like Rohtak, Sonepat, and Gurugram have become education hubs. Institutions like the National Brain Research Centre are located here.

Though Haryanvi is the mother tongue, the official languages include Hindi, Punjabi, and English. Other dialects spoken include Bangru, Bagri, and Ahirwati.

About 90% of the population are Hindus. The Sikh population is primarily in the northeast and northwest, while Muslims are mostly in the southeastern districts. Jats form the agricultural backbone of the state.

Popular tourist destinations in Haryana include:
- Badhkal Lake
- Dumdama Lake
- Kurukshetra
- Morni Hills
- Panipat
- Sultanpur Bird Sanctuary
- Tilyar Lake
- Yadavindra Gardens

Haryana experiences very hot summers (up to 50°C) and cold winters (down to 1°C). Monsoon season is from July to September, accounting for 80% of rainfall and occasional floods. The best time to visit is from October to March.

Famous for its rich history and industrial growth, Haryana is a hub for automobile and IT industries. It leads India in tractor, two-wheeler, and passenger car production as well as milk and food grain output.
`;

  return (
    <div className="flex flex-col md:flex-row h-full min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-full md:w-1/4 bg-white shadow-lg p-6">
        <h2 className="text-xl font-bold mb-4">Districts</h2>
        <ul className="space-y-2">
          {districts.map((district) => (
            <li
              key={district}
              onClick={() => setSelectedDistrict(district)}
              className={`cursor-pointer px-4 py-2 rounded-md hover:bg-gray-200 transition ${
                selectedDistrict === district ? "bg-blue-100 font-semibold" : ""
              }`}
            >
              {district}
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <h1 className="text-3xl font-bold mb-4">Haryana</h1>
        <img
          src={haryanaImage}
          alt="Haryana"
          className="w-full max-w-lg rounded-lg shadow-md mb-6"
        />
        <div className="text-gray-800 whitespace-pre-wrap text-sm leading-relaxed">
          {haryanaInfo}
        </div>
      </main>
    </div>
  );
};

export default HaryanaSidebar;
