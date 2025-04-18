import React from "react";
import Image from "../../assets/State/Andhrapradesh/Andhrapradesh.jpg";

const Sidebar = ({ districts, onSelect }) => (
  <div className="w-64 h-full overflow-y-auto bg-gray-100 p-4 border-r">
    <h2 className="text-xl font-semibold mb-4">Districts</h2>
    <ul>
      {districts.map((district) => (
        <li
          key={district.name}
          className="cursor-pointer hover:text-blue-600 mb-2"
          onClick={() => onSelect(district)}
        >
          {district.name}
        </li>
      ))}
    </ul>
  </div>
);

const AndhraPradeshInfo = ({ selectedDistrict }) => (
  <div className="flex-1 p-6 overflow-y-auto">
    <h1 className="text-3xl font-bold mb-4">Andhra Pradesh</h1>
    <img
      src={Image}
      alt="Andhra Pradesh Map"
      className="w-full max-w-2xl mx-auto mb-6 rounded shadow"
    />
    <div className="bg-white rounded-xl shadow p-6 mb-6 space-y-4 text-justify text-base">
      <p>
        Andhra Pradesh is a state in India, situated on the country's southeastern coast. The
        state is known for crafting of stones, doll-making, carving of idols, beautiful
        paintings, folk dances like Yaksha Ganam, Urumula Natyam, Ghato Natyam, and festivals
        like Sankranthi.
      </p>
      <p>
        The northern area of Andhra Pradesh is mountainous. The highest peak Mahendragiri rises
        1,500 m above sea level. The climate is generally hot and humid with annual rainfall
        around 125 cm. The Krishna and Godavari are the major rivers in the state.
      </p>
      <p>
        Andhra Pradesh has a single-chamber Legislative Assembly of 175 seats. It sends 11
        members to the Rajya Sabha and 25 to the Lok Sabha. In 2014, the Andhra Pradesh
        Reorganisation Act led to the formation of Telangana. Hyderabad was declared the
        temporary capital, with Vijayawada proposed as the new capital.
      </p>
      <p>
        <strong>Quick Facts:</strong><br />
        Formation: Nov 1, 1956 / June 2, 2014<br />
        Area: 1,60,200 km²<br />
        Density: 308/km²<br />
        Population (2011): 4,93,86,799<br />
        Districts: 13<br />
        Rivers: Godavari, Krishna, Tungabhadra, etc.<br />
        Forests: Nagarjunasagar-Srisailam Wildlife Sanctuary<br />
        Languages: Telugu, Urdu, Hindi, English, etc.<br />
        State Animal: Blackbuck<br />
        State Bird: Indian Roller<br />
        Capital: Hyderabad (Vijayawada proposed)
      </p>
      <p>
        <strong>History:</strong> From being part of Ashoka's empire, to the rule of the Satavahanas,
        Chalukyas, Cholas, Muslim sultanates, and Mughals — Andhra Pradesh has a deep
        historical legacy.
      </p>
      <p>
        <strong>Geography:</strong> Includes the Deccan plateau and Eastern Ghats, with Telangana in
        the north and Rayalaseema in the south, divided by the Krishna river.
      </p>
      {selectedDistrict && (
        <div className="mt-4 pt-4 border-t border-gray-200">
          <h2 className="text-xl font-semibold mb-2">
            {selectedDistrict.name} District Details
          </h2>
          <p>Population: {selectedDistrict.population.toLocaleString()}</p>
          <p>Male: {selectedDistrict.male.toLocaleString()}</p>
          <p>Female: {selectedDistrict.female.toLocaleString()}</p>
        </div>
      )}
    </div>
  </div>
);

const AndhraPradeshComponent = () => {
  const [selectedDistrict, setSelectedDistrict] = React.useState(null);

  const districts = [
    { name: "Vizianagaram", population: 2344474, male: 1161477, female: 1182997 },
    { name: "Prakasam", population: 3397448, male: 1714764, female: 1682684 },
    { name: "West Godavari", population: 3936966, male: 1964918, female: 1972048 },
    { name: "Kurnool", population: 4053463, male: 2039227, female: 2014236 },
    { name: "Srikakulam", population: 2703114, male: 1341738, female: 1361376 },
    { name: "YSR", population: 2882469, male: 1451777, female: 1430692 },
    { name: "Sri Potti Sriramulu Nellore", population: 2963557, male: 1492974, female: 1470583 },
    { name: "Visakhapatnam", population: 4290589, male: 2138910, female: 2151679 },
    { name: "Krishna", population: 4517398, male: 2267375, female: 2250023 },
  ];

  return (
    <div className="flex h-screen">
      <Sidebar districts={districts} onSelect={setSelectedDistrict} />
      <AndhraPradeshInfo selectedDistrict={selectedDistrict} />
    </div>
  );
};

export default AndhraPradeshComponent;
