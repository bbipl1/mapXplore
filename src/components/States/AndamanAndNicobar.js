import React from "react";
import andamanImage from "../../assets/State/AndamanAndNicobar/AndamanAndNicobar.jpg";

const cities = [
  "Port Blair",
  "Havelock Island",
  "Neil Island",
  "Diglipur",
  "Mayabunder",
  "Rangat",
  "Baratang",
  "Campbell Bay",
  "Car Nicobar"
];

const AndamanAndNicobar = () => {
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
          src={andamanImage}
          alt="Andaman and Nicobar Islands"
          className="w-2/3 h-auto rounded-2xl shadow-md mb-6 mx-auto"
        />
        <h1 className="text-3xl font-bold mb-4">Andaman and Nicobar Islands</h1>
        <p className="mb-4">
          The Andaman and Nicobar Islands are a group of picturesque islands located in the Bay of Bengal. Known for their pristine beaches, rich marine biodiversity, and historical significance, they form one of the seven union territories of India. The territory comprises around 572 islands, of which only a few are open to tourists.
        </p>
        <h2 className="text-2xl font-semibold mb-2">Capital</h2>
        <p className="mb-4">Port Blair</p>
        <h2 className="text-2xl font-semibold mb-2">Districts</h2>
        <ul className="list-disc pl-5 mb-4">
          <li>Nicobar</li>
          <li>North and Middle Andaman</li>
          <li>South Andaman</li>
        </ul>
        <h2 className="text-2xl font-semibold mb-2">Key Attractions</h2>
        <ul className="list-disc pl-5 mb-4">
          <li>Cellular Jail</li>
          <li>Radhanagar Beach</li>
          <li>Havelock Island</li>
          <li>Baratang Island</li>
          <li>Limestone Caves</li>
        </ul>
        <h2 className="text-2xl font-semibold mb-2">Culture and People</h2>
        <p className="mb-4">
          The islands are home to a diverse population that includes indigenous tribes such as the Great Andamanese, Onge, Jarwa, and Sentinelese. Due to restricted access, contact with these tribes is limited to preserve their way of life. The settlers on the islands come from various parts of India, contributing to a multicultural society.
        </p>
        <h2 className="text-2xl font-semibold mb-2">Economy</h2>
        <p className="mb-4">
          The economy of the islands is mainly based on agriculture, fishing, and tourism. Port Blair is a commercial hub with infrastructure to support tourism, which is a major contributor to the local economy.
        </p>
        <h2 className="text-2xl font-semibold mb-2">Transportation</h2>
        <p className="mb-4">
          The islands are accessible via air and sea. Port Blair has a well-connected airport with flights from major Indian cities. Inter-island transportation is facilitated through ferries and boats.
        </p>
      </main>
    </div>
  );
};

export default AndamanAndNicobar;