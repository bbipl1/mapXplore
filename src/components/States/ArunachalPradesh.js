import React from "react";
import ArunachalImage from "../../assets/State/Arunachalpradesh/Arunachalpradesh.jpg"; // Make sure this image path is correct

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

const ArunachalPradeshInfo = ({ selectedDistrict }) => (
  <div className="flex-1 p-6 overflow-y-auto">
    <h1 className="text-3xl font-bold mb-4">Arunachal Pradesh</h1>
    <img
      src={ArunachalImage}
      alt="Arunachal Pradesh Map"
      className="w-full max-w-2xl mx-auto mb-6"
    />
    <div className="bg-white shadow-md rounded-xl p-6 mb-6 space-y-4 text-justify text-base">
      <p>
        Arunachal Pradesh is a state located in the northeastern part of India. Known for its
        pristine beauty and lush green forests, the state is also known as the 'Land of the Rising
        Sun'. It is bordered by Assam, Bhutan, China, and Myanmar.
      </p>
      <p>
        The state is predominantly mountainous, with peaks of the Great Himalayas, and rivers such
        as the Brahmaputra (Siang), Lohit, Subansiri, Dibang, and more.
      </p>
      <p>
        Arunachal Pradesh has a Legislative Assembly with 60 members. It sends 1 MP to the Rajya
        Sabha and 2 to the Lok Sabha. Itanagar is the capital, and the official website is{" "}
        <a href="http://www.arunachalpradesh.gov.in" className="text-blue-600" target="_blank">
          www.arunachalpradesh.gov.in
        </a>
        .
      </p>
      <p>
        <strong>Quick Facts:</strong><br />
        Formation: February 20, 1987<br />
        Area: 83,743 km²<br />
        Density: 17/km²<br />
        Population (2011): 13,83,727<br />
        Districts: 20<br />
        Rivers: Siang, Lohit, Dibang, Subansiri, etc.<br />
        Forests & NP: Namdapha, Mouling<br />
        Languages: Monpa, Miji, Aka, Adi, Hindi, English<br />
        State Animal: Mithun<br />
        State Bird: Great Hornbill<br />
        Capital: Itanagar<br />
        Literacy Rate: 66.95%<br />
        Female per 1000 Male: 920
      </p>
      <p>
        <strong>History:</strong> Arunachal Pradesh was originally part of Assam, later became the NEFA,
        and in 1987 became a full state. The McMahon Line forms the disputed boundary with China.
      </p>
      <p>
        <strong>Geography:</strong> Covered by the Himalayas and Patkai hills, sharing international borders
        with China, Bhutan, and Myanmar.
      </p>
      <p>
        <strong>Climate:</strong> Tundra in upper regions, temperate in mid, and subtropical at lower
        elevations.
      </p>
      <p>
        <strong>Culture:</strong> Rich in tribal culture with more than 20 major tribes and dozens of
        sub-tribes speaking over 50 languages. Famous cities include Tawang, Itanagar, Naharlagun,
        and Along.
      </p>
      <p>
        <strong>Food:</strong> Bamboo Shoot, Pika Pila, Lukter, Apong, Momo, Chura Sabzi, Meat, and Rice
        are popular.
      </p>
      {selectedDistrict && (
        <div className="mt-4 border-t pt-4">
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

const ArunachalPradeshComponent = () => {
  const [selectedDistrict, setSelectedDistrict] = React.useState(null);

  const districts = [
    { name: "Tawang", population: 49977, male: 28515, female: 21462 },
    { name: "Itanagar", population: 59321, male: 31645, female: 27676 },
    { name: "East Kameng", population: 78413, male: 39141, female: 39272 },
    { name: "West Siang", population: 112272, male: 57298, female: 54974 },
    { name: "Lower Subansiri", population: 83030, male: 42567, female: 40463 },
    { name: "Dibang Valley", population: 8004, male: 4704, female: 3300 },
    { name: "Upper Siang", population: 35289, male: 18029, female: 17260 },
    { name: "Papum Pare", population: 176385, male: 91123, female: 85262 },
    { name: "Changlang", population: 148226, male: 76349, female: 71877 },
  ];

  return (
    <div className="flex h-screen">
      <Sidebar districts={districts} onSelect={setSelectedDistrict} />
      <ArunachalPradeshInfo selectedDistrict={selectedDistrict} />
    </div>
  );
};

export default ArunachalPradeshComponent;
