import React from "react";
import HimachalPradeshMap from "../../assets/State/HimachalPradesh/HimachalPradesh.jpg"; // ✅ Renamed to avoid conflict

const HimachalPradesh = () => {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-gray-100 p-4">
        <h2 className="text-xl font-bold mb-4">Districts</h2>
        <ul className="space-y-2 text-blue-800">
          <li>Bilaspur</li>
          <li>Chamba</li>
          <li>Hamirpur</li>
          <li>Kangra</li>
          <li>Kinnaur</li>
          <li>Kullu</li>
          <li>Lahaul and Spiti</li>
          <li>Mandi</li>
          <li>Shimla</li>
          <li>Sirmaur</li>
          <li>Solan</li>
          <li>Una</li>
        </ul>
      </div>

      {/* Content */}
      <div className="flex-1 p-6">
        <h1 className="text-3xl font-bold mb-4">Himachal Pradesh</h1>
        <img
          src={HimachalPradeshMap}
          alt="Himachal Pradesh Map"
          className="w-full max-w-md mb-6"
        />

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">About</h2>
          <p>
            Referred to as Dev Bhoomi or "Land of Gods", Himachal Pradesh is bordered by Jammu & Kashmir to the north, Punjab to the west, Uttar Pradesh to the south, and Uttarakhand to the east. The name "Himachal" means "the land of snow". Shimla is the capital, and the state is famous for its scenic beauty, lush valleys, snow-capped peaks, and vibrant culture.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Quick Facts</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Official Website: www.himachal.gov.in</li>
            <li>Date of Formation: Jan 25, 1971</li>
            <li>Area: 55,673 sq km</li>
            <li>Population (2011): 6,864,602 (M: 3,481,873 | F: 3,382,729)</li>
            <li>Density: 123/km²</li>
            <li>No. of Districts: 12</li>
            <li>Capital: Shimla</li>
            <li>Rivers: Ravi, Beas, Chenab, Sutlej, Yamuna</li>
            <li>Forests/National Parks: Great Himalayan NP, Pin Valley NP, Chail WS</li>
            <li>Languages: Hindi, English, Punjabi, Kinnauri, Pahari, Kangri, Dogri</li>
            <li>State Animal: Snow Leopard</li>
            <li>State Bird: Western Tragopan</li>
            <li>State Tree: Deodar</li>
            <li>State Flower: Pink Rhododendron</li>
            <li>Literacy Rate (2011): 68.74%</li>
            <li>Assembly Constituencies: 68</li>
            <li>Parliamentary Constituencies: 4</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">History</h2>
          <p>
            Himachal Pradesh has a rich heritage with roots in the Indus Valley Civilization. Over time, Mongols, Aryans, Mughals, Gorkhas, and eventually the British ruled over the area. It became a union territory post-independence and gained full statehood in 1971. Its peaceful valleys and strategic importance shaped its evolution through ages.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Geography</h2>
          <p>
            Nestled in the Western Himalayas, the elevation ranges from 350m to over 6500m. Himachal's geography is divided into the Shivaliks, Inner Himalayas, and Greater Himalayas. It's known for snowy mountains, rivers, alpine pastures, and forests. The rivers Beas, Ravi, and Sutlej originate here. Climate varies from semi-arctic to semi-tropical, with snowfall common in higher altitudes.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Government and Politics</h2>
          <p>
            The state has 12 districts, 75 tehsils, 52 subdivisions, and over 20,000 villages. The legislature is unicameral with 68 assembly seats. Political power largely alternates between Congress and BJP. The Chief Minister leads the state government. Himachal has 4 Lok Sabha and 3 Rajya Sabha seats.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Education</h2>
          <p>
            A former British summer capital, Himachal has high literacy rates. Hamirpur leads in literacy. The state has quality schools (CBSE/ICSE), universities, engineering/medical colleges, and NGOs working in education. It is the first Indian state to offer universal access to elementary education.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Economy</h2>
          <p>
            Himachal has developed from one of India’s most backward regions into a prosperous one. Its economy is driven by horticulture, hydroelectric power, tourism, and agriculture. The state is India's leading producer of apples and is known as the “Apple State”.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Tourism & Culture</h2>
          <p>
            Himachal's multilingual and multicultural character is shown in its festivals, handicrafts, and folk dances. Famous destinations include Shimla, Manali, Dalhousie, Kullu, Chamba, Kangra, and Spiti Valley. Arts include pashmina weaving, wooden crafts, and traditional jewelry. Local dances like Naati, Losar, and songs based on ragas are cultural treasures.
          </p>
        </section>
      </div>
    </div>
  );
};

export default HimachalPradesh;
