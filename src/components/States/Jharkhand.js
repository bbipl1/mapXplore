import React, { useState } from 'react';
import jharkhandMap from '../../assets/State/Jharkhand/Jharkhand.jpg';

const cities = ['Ranchi', 'Jamshedpur', 'Dhanbad', 'Bokaro', 'Hazaribagh', 'Deoghar'];

const Jharkhand = () => {
  const [selectedCity, setSelectedCity] = useState('Ranchi');

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-gray-100 p-6 border-r overflow-y-auto">
        <h2 className="text-xl font-bold mb-4">Major Cities</h2>
        <ul className="space-y-2">
          {cities.map((city) => (
            <li
              key={city}
              onClick={() => setSelectedCity(city)}
              className={`cursor-pointer p-2 rounded-md text-sm font-medium ${
                selectedCity === city
                  ? 'bg-blue-500 text-white'
                  : 'hover:bg-blue-100'
              }`}
            >
              {city}
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-10 overflow-y-auto">
        <h1 className="text-3xl font-bold mb-6">Jharkhand</h1>
        <img
          src={jharkhandMap}
          alt="Map of Jharkhand"
          className="rounded-xl shadow-md max-w-4xl w-full mb-8"
        />
        
        <div className="prose max-w-4xl">
          <h2>About</h2>
          <p>Jharkhand is 'the land of forests' - endowed with rich flora and fauna...</p>
          <h3>Facts on Jharkhand</h3>
          <ul>
            <li><strong>Official Website:</strong> www.jharkhand.gov.in</li>
            <li><strong>Date of Formation:</strong> November 15, 2000</li>
            <li><strong>Area:</strong> 79,714 sq km</li>
            <li><strong>Density:</strong> 414/Km2</li>
            <li><strong>Population (2011):</strong> 3,29,88,134</li>
            <li><strong>No. of Districts:</strong> 24</li>
            <li><strong>Capital:</strong> Ranchi</li>
            <li><strong>Rivers:</strong> Damodar, Subarnarekha</li>
            <li><strong>Languages:</strong> Mundari, Kurukh, Khortha, Nagpuria, Hindi, Urdu, Santhali, and more</li>
            <li><strong>State Animal:</strong> Elephant</li>
            <li><strong>State Bird:</strong> Asian Koel</li>
            <li><strong>State Tree:</strong> Sal</li>
            <li><strong>State Flower:</strong> Palash</li>
            <li><strong>Literacy Rate (2011):</strong> 67.60%</li>
          </ul>

          <h2>History</h2>
          <p>The roots of Jharkhand can be traced to Magadha Empire...</p>

          <h2>Geography</h2>
          <p>The state is situated on Santhal Parganas and Chhota Nagpur Plateau...</p>

          <h2>Government and Politics</h2>
          <p>Chief Minister is the head of the government of Jharkhand...</p>

          <h2>Education</h2>
          <p>As per the 2011 census, the state's literacy rate is 67.60 percent...</p>

          <h2>Economy</h2>
          <p>Jharkhand is India's second largest mineral wealth producer...</p>

          <h2>Demographics</h2>
          <p>The current population of the state as per the Census 2011 is 32.96 million...</p>

          <h2>Culture</h2>
          <p>Because this state is mainly dominated by tribes, nature is considered as a vital part...</p>

          <h2>Food</h2>
          <p>Jharkhand has different kinds of dishes for different taste-buds. Some popular dishes are Dhuska, Rugra, Pitha, Litti Chokha, Malpua, and more.</p>

          <h2>Language</h2>
          <p>Hindi is the prime language of the state. People also speak Santhali, Mundari, Ho, Kharia, and others.</p>

          <h2>Transport</h2>
          <p>Jharkhand has a dense train network and a domestic airport in Ranchi...</p>

          <h2>Tourism</h2>
          <p>The state is full of forests, hills, wildlife sanctuaries, and holy shrines. Places to visit: Ranchi Hills, Daasam Falls, Sun Temple, Baidyanath Dham, Netarhat.</p>

          <h2>Major Cities</h2>
          <p>Some of the major cities of Jharkhand are Jamshedpur, Dhanbad, Ranchi, Bokaro, Deoghar, Hazaribagh, Giridih, and more.</p>
        </div>
      </div>
    </div>
  );
};

export default Jharkhand;
