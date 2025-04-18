import React from "react";
import biharImage from "../../assets/State/Bihar/Bihar.jpg";

const cities = [
  "Patna",
  "Gaya",
  "Bhagalpur",
  "Muzaffarpur",
  "Darbhanga",
  "Purnia",
  "Arrah",
  "Begusarai",
  "Katihar"
];

const Bihar = () => {
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
          src={biharImage}
          alt="Bihar"
          className="w-2/3 h-auto rounded-2xl shadow-md mb-6 mx-auto"
        />
        <h1 className="text-3xl font-bold mb-4">Bihar</h1>
        <p className="mb-4">
          The ancient name of Bihar was "Vihara" which means monastery. It is located in the eastern part of India. Area wise Bihar is the thirteenth largest state and the third most populated state in India. The flora and fauna of this state is enriched by the river Ganges that flows through Bihar before getting distributed in Bengal's deltoid zone. Bihar also has a vast forest land that covers an area of 6,764 km².
        </p>
        <h2 className="text-2xl font-semibold mb-2">Capital</h2>
        <p className="mb-4">Patna</p>
        <h2 className="text-2xl font-semibold mb-2">Districts</h2>
        <p className="mb-4">38</p>
        <h2 className="text-2xl font-semibold mb-2">Key Attractions</h2>
        <ul className="list-disc pl-5 mb-4">
          <li>Bodhgaya and Mahabodhi Temple</li>
          <li>Ruins of Nalanda</li>
          <li>Stupa in Rajgir</li>
          <li>Lion Pillars at Vaishali</li>
          <li>Emperor Sher Shah Suri's Mausoleum</li>
          <li>Navlakha Palace Ruins</li>
          <li>World Peace Pagoda</li>
          <li>Royal Bhutan Monastery</li>
        </ul>
        <h2 className="text-2xl font-semibold mb-2">Culture and People</h2>
        <p className="mb-4">
          Bihar is the birthplace of Gautam Buddha and Lord Mahavira. Festivals like Chhath Puja and Sama Chakeva are unique to the region. The state is rich in folk music and dance traditions such as Sohar, Sumangali, Katnigeet, and Ropnigeet. Popular folk dances include gond naach, dhobi naach, and jhumar naach.
        </p>
        <h2 className="text-2xl font-semibold mb-2">Economy</h2>
        <p className="mb-4">
          The economy has shown substantial growth in recent years. Development with justice was a key motto leading to progress. The state is reducing the per capita income gap with the rest of India steadily.
        </p>
        <h2 className="text-2xl font-semibold mb-2">Transportation</h2>
        <p className="mb-4">
          Bihar has 29 national highways and several state highways. Patna, Muzaffarpur, Darbhanga, and Gaya are key railway hubs. Bus services and car rentals like EazeeCab also support intra-state travel.
        </p>
        <h2 className="text-2xl font-semibold mb-2">Languages</h2>
        <p className="mb-4">
          Major languages include Hindi, Bhojpuri, Maithili, Magahi, Angika, and Bajjika. Hindi is the official language, while Urdu is also widely used.
        </p>
      </main>
    </div>
  );
};

export default Bihar;
