import React from 'react';
import dadraImage from "../../assets/State/DadraNagarHaveli/DadraNagarHaveli.jpg";

const DadraNagarHaveliComponent = () => {
  return (
    <div className="flex flex-col p-6 overflow-y-auto">
      <h1 className="text-3xl font-bold mb-4">Dadra and Nagar Haveli</h1>
      <img
        src={dadraImage}
        alt="Dadra and Nagar Haveli"
        className="w-full max-w-3xl mx-auto mb-6 rounded-xl shadow-lg"
      />
      <div className="text-sm italic text-gray-600 mb-4">
        Map highlights the National Highways, Major Roads, District Headquarter, etc.<br/>
        Disclaimer: All efforts have been made to make this image accurate. However, Mapping Digiworld Pvt Ltd and its directors do not own any responsibility for the correctness or authenticity of the same.
      </div>
      <div className="bg-white shadow-md rounded-xl p-6 space-y-4 text-justify text-base">
        <p>Dadra and Nagar Haveli is a union territory situated near India’s west coast, covering 491 sq km. It comprises two parts — Dadra, surrounded by Gujarat, and Nagar Haveli, nestled between Gujarat and Maharashtra. The UT is known for its natural beauty, lush forests, rivers, and vibrant tribal culture.</p>
        <p>Originally a Portuguese colony, it was annexed in 1779 and became a union territory in 1961. Silvassa is the capital, and the region is home to tribes like the Varlies, Kokana, Dhodia, and Dublas. Dadra includes three villages, and Nagar Haveli includes Silvassa and 68 villages.</p>
        <p>The UT features a pleasant climate, especially between November and March. Rainfall is high during the monsoon. The 2011 census reports a population of 3,43,709 with a literacy rate of 86.34%. Major attractions include Lion Safari WS, Deer Park, and riverbank gardens.</p>
        <p>Agriculture is the mainstay, with crops like rice, wheat, sugarcane, and fruits. While industry is limited, Silvassa has emerged as a growing town. Connectivity is maintained via Gujarat and Maharashtra. The nearest rail station is Vapi, and the nearest airport is in Mumbai.</p>
        <p>The culture is deeply tribal, rich in folklore and traditions. Tribes celebrate various occasions with songs and dances. Food includes wild mushrooms, bamboo shoots, and freshwater fish, influenced heavily by Gujarati cuisine.</p>
        <p>Languages spoken include Gujarati, Hindi, Marathi, Bhili, and English. Education is promoted through schools, colleges, and vocational institutions. Tourist spots like Vanganga Lake, Hirwa Van Garden, and Dudhni’s campsites attract nature lovers and families alike.</p>
        <p>Dadra and Nagar Haveli remains governed by an Administrator appointed by the President of India, and it has one parliamentary constituency but no legislative assembly.</p>
      </div>
    </div>
  );
};

export default DadraNagarHaveliComponent;
