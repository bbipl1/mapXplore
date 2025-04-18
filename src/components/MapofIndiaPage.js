import React from "react";
import AdditionalSidebar from "./AdditionalSideBar"; // Sidebar Component
import mapImage from "../assets/India.jpg"; // Replace with actual path

const MapofIndiaPage = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <AdditionalSidebar />

      {/* Main Content */}
      <div className="flex-1 p-6">
        {/* Image Section */}
        <div className="flex justify-center">
          <img src={mapImage} alt="Universal Map Solutions" className="w-full max-w-3xl rounded-lg shadow-md" />
        </div>

        {/* Text Content */}
        <div className="mt-6 text-gray-800 space-y-4">
          <p>
            India is officially known as the Republic of India. It comprises of a total of 28 states along with eight union territories. 
            India is the second most populated country in the world and the world’s largest democracy. The country’s coastline measures 
            7,517 kilometres in length, out of which 5,423 kilometres belong to peninsular India, and 2,094 kilometres belong to Andaman, 
            Nicobar and Lakshadweep island chains.
          </p>

          <p>
            Broadly, India is divided into six major zones: East India, West India, North India, South India, Northeast India, and Central India.
          </p>

          <h2 className="text-lg font-semibold mt-4">Eastern India</h2>
          <p>
            Includes Bihar, Jharkhand, Odisha, West Bengal, and Andaman and Nicobar Islands. Total population: 226,925,195. 
            Covers 418,323 sq km. Major languages: Bengali, Odia, Hindi, English, Maithili, Nepali, and Urdu.
          </p>

          <h2 className="text-lg font-semibold mt-4">Western India</h2>
          <p>
            Covers 508,052 sq km. Includes Gujarat, Goa, Maharashtra, Dadra & Nagar Haveli, and Daman & Diu. Mumbai, the financial capital of India, 
            is in Maharashtra. Official languages: Marathi, Gujarati, Konkani, and English.
          </p>

          <h2 className="text-lg font-semibold mt-4">North India</h2>
          <p>
            Includes Himachal Pradesh, Uttar Pradesh, Rajasthan, Uttarakhand, Punjab, Haryana, Delhi, Chandigarh, Ladakh, and Jammu & Kashmir. 
            Major cities: New Delhi, Lucknow, Chandigarh.
          </p>

          <h2 className="text-lg font-semibold mt-4">South India</h2>
          <p>
            Covers Tamil Nadu, Karnataka, Kerala, Andhra Pradesh, Telangana, Lakshadweep, and Puducherry. Bengaluru is the IT hub of India.
          </p>

          <h2 className="text-lg font-semibold mt-4">Northeast India</h2>
          <p>
            Includes the Seven Sister States: Arunachal Pradesh, Assam, Meghalaya, Tripura, Mizoram, Manipur, and Nagaland, along with Sikkim.
          </p>

          <h2 className="text-lg font-semibold mt-4">Central India</h2>
          <p>
            Includes Madhya Pradesh and Chhattisgarh.
          </p>

          <h2 className="text-lg font-semibold mt-4">India General Maps</h2>
          <ul className="list-disc pl-6">
            <li>India Political Map</li>
            <li>India Road Map</li>
            <li>India River Map</li>
            <li>India Vegetation Map</li>
            <li>India Nuclear Plant Map</li>
            <li>Poverty Map of India</li>
            <li>India Physical Map</li>
            <li>India Tourist Map</li>
            <li>Indian Railway Map</li>
            <li>Thermal Power Plant Map</li>
          </ul>

          <p className="text-gray-500 text-sm mt-4">Last Updated on: January 09, 2025</p>
        </div>
      </div>
    </div>
  );
};

export default MapofIndiaPage;
