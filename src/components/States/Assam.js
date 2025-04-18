import React from "react";
import assamImage from "../../assets/State/Assam/Assam.jpg";

const cities = [
  "Guwahati",
  "Dibrugarh",
  "Silchar",
  "Jorhat",
  "Tezpur",
  "Nagaon",
  "Tinsukia",
  "Goalpara",
  "Barpeta"
];

const Assam = () => {
  return (
    <div className="flex">
      <aside className="w-64 h-full bg-gray-100 p-4 border-r">
        <h2 className="text-xl font-semibold mb-4">Cities</h2>
        <ul className="space-y-2">
          {cities.map((city) => (
            <li key={city} className="hover:underline cursor-pointer">
              {city}
            </li>
          ))}
        </ul>
      </aside>
      <main className="p-6 max-w-5xl mx-auto">
        <img
          src={assamImage}
          alt="Assam"
          className="w-2/3 h-auto rounded-2xl shadow-md mb-6 mx-auto"
        />
        <h1 className="text-3xl font-bold mb-4">Assam</h1>
        <p className="mb-4">
          Assam, located in northeastern India, is known for its rich culture, biodiversity, and tea plantations. It is bordered by Bhutan and Arunachal Pradesh to the north and Nagaland and Manipur to the east.
        </p>
        <h2 className="text-2xl font-semibold mb-2">Capital</h2>
        <p className="mb-4">Dispur</p>
        <h2 className="text-2xl font-semibold mb-2">Districts</h2>
        <ul className="list-disc pl-5 mb-4">
          <li>Kamrup Metropolitan</li>
          <li>Dibrugarh</li>
          <li>Barpeta</li>
          <li>Sonitpur</li>
          <li>Cachar</li>
          <li>Nagaon</li>
        </ul>
        <h2 className="text-2xl font-semibold mb-2">Key Attractions</h2>
        <ul className="list-disc pl-5 mb-4">
          <li>Kaziranga National Park</li>
          <li>Majuli Island</li>
          <li>Kamakhya Temple</li>
          <li>Manas National Park</li>
          <li>Sivasagar</li>
        </ul>
        <h2 className="text-2xl font-semibold mb-2">Culture and People</h2>
        <p className="mb-4">
          Assam is home to a diverse population comprising various ethnic groups and communities. The state celebrates vibrant festivals like Bihu, and the traditional Assamese attire and dance forms are integral to its culture.
        </p>
        <h2 className="text-2xl font-semibold mb-2">Economy</h2>
        <p className="mb-4">
          The state's economy is driven by agriculture, especially tea cultivation, oil and natural gas, and tourism. Guwahati serves as the commercial and industrial hub.
        </p>
        <h2 className="text-2xl font-semibold mb-2">Transportation</h2>
        <p className="mb-4">
          Assam has a well-connected transport system with railways, roadways, and airways. The Brahmaputra River also provides inland water transport.
        </p>
      </main>
    </div>
  );
};

export default Assam;
