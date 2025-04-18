import React from 'react';
import OdishaMap from '../../assets/State/Odisha/Odisha.jpg'; // Replace with actual path

const cities = [
  'Bhubaneshwar', 'Puri', 'Konark', 'Cuttack', 'Bargarh',
  'Jeypore', 'Barbil', 'Paradip', 'Rourkela', 'Sambalpur', 'Daringbadi', 'Gopalpur'
];

const OdishaPage = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-full md:w-1/5 bg-white border-r border-gray-300 p-4">
        <h2 className="text-xl font-semibold mb-4 text-indigo-600">Cities in Odisha</h2>
        <ul className="space-y-2">
          {cities.map((city, idx) => (
            <li key={idx} className="text-gray-700 hover:text-indigo-500 cursor-pointer">{city}</li>
          ))}
        </ul>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-6 overflow-y-auto">
        {/* Map */}
        <div className="w-full mb-6">
          <img
            src={OdishaMap}
            alt="Map of Odisha"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Description */}
        <section className="space-y-6 text-gray-800">
          <h1 className="text-3xl font-bold text-indigo-700">Odisha</h1>
          <p>
            Odisha lies on the east coast of the Indian subcontinent. Bhubaneswar is the capital...
          </p>

          <h2 className="text-2xl font-semibold text-indigo-600 mt-4">Facts on Odisha</h2>
          <ul className="list-disc list-inside">
            <li>Date of Formation: April 1, 1936</li>
            <li>Area: 155,707 sq km</li>
            <li>Population (2011): 41,974,218</li>
            <li>Capital: Bhubaneswar</li>
            <li>State Animal: Sambar Deer</li>
            <li>State Bird: Indian roller</li>
            <li>Official Language: Oriya</li>
            {/* Add more if needed */}
          </ul>

          <h2 className="text-2xl font-semibold text-indigo-600 mt-4">History</h2>
          <p>
            The history of Odisha dates back to many centuries... It was known as Kalinga in ancient times.
            Emperor Ashoka’s conquest of Kalinga in 261 BC was a turning point that led to his transformation.
          </p>

          <h2 className="text-2xl font-semibold text-indigo-600 mt-4">Geography</h2>
          <p>
            Odisha lies along the Bay of Bengal and features lush coastal plains, plateaus, and mountains...
          </p>

          <h2 className="text-2xl font-semibold text-indigo-600 mt-4">Tourism</h2>
          <p>
            Known for the Sun Temple at Konark, the Jagannath Temple at Puri, and its beautiful beaches like Chandipur...
          </p>

          <h2 className="text-2xl font-semibold text-indigo-600 mt-4">Government and Politics</h2>
          <p>
            Odisha has a unicameral legislature with 147 Assembly constituencies. The High Court is in Cuttack.
          </p>

          <h2 className="text-2xl font-semibold text-indigo-600 mt-4">Education</h2>
          <p>
            Odisha is home to top institutions like NIT Rourkela, KIIT, and Odisha University of Agriculture...
          </p>

          <h2 className="text-2xl font-semibold text-indigo-600 mt-4">Economy</h2>
          <p>
            Agriculture and mining drive the economy. It is rich in coal, iron, and bauxite. Rourkela has India's first steel plant.
          </p>

          <h2 className="text-2xl font-semibold text-indigo-600 mt-4">Transport</h2>
          <p>
            Odisha is well-connected via NH 5, 6, 23, 42, and 43, along with railways like Rajdhani and Coromandal Express...
          </p>

          <h2 className="text-2xl font-semibold text-indigo-600 mt-4">Languages</h2>
          <p>
            Oriya is the primary language. Other languages spoken include Hindi, Urdu, Bengali, and Telugu...
          </p>

          <h2 className="text-2xl font-semibold text-indigo-600 mt-4">Culture & Society</h2>
          <p>
            Odisha’s culture is deeply rooted in temple traditions, classical Odissi dance, and rich cuisine like Kadali Manja Rai and Chaatu Rai...
          </p>
        </section>
      </main>
    </div>
  );
};

export default OdishaPage;
