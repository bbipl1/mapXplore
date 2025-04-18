import React from 'react';
import delhiImage from "../../assets/State/Delhi/Delhi.jpg";

const DelhiComponent = () => {
  return (
    <div className="flex flex-col p-6 overflow-y-auto">
      <h1 className="text-3xl font-bold mb-4">Delhi</h1>
      <img
        src={delhiImage}
        alt="Delhi"
        className="w-full max-w-3xl mx-auto mb-6 rounded-xl shadow-lg"
      />
      <div className="text-sm italic text-gray-600 mb-4">
        The map showing official boundaries and major landmarks of Delhi.<br/>
        Disclaimer: All efforts have been made to ensure accuracy. However, Mapping Digiworld Pvt Ltd and its directors do not take responsibility for authenticity.
      </div>
      <div className="bg-white shadow-md rounded-xl p-6 space-y-4 text-justify text-base">
        <p><strong>About Delhi:</strong> Delhi, the capital of India, is a vibrant blend of the ancient and the modern. Situated on the Yamuna River, it covers 1483 sq. km and borders Haryana and Uttar Pradesh. Known for its historic landmarks and cosmopolitan culture, Delhi is Northern India's commercial and cultural hub.</p>

        <p><strong>Quick Facts:</strong><br/>
        Official Website: www.Delhi.gov.in<br/>
        Date of Formation: Feb 1, 1992<br/>
        Area: 1483 sq km<br/>
        Density: 11297/km²<br/>
        Population (2011): 16,787,941<br/>
        Capital: New Delhi<br/>
        Languages: Hindi, English, Punjabi, Urdu<br/>
        Literacy Rate: 87.40%<br/>
        Female per 1000 males: 866<br/>
        Districts: 11<br/>
        Rivers: Yamuna<br/>
        Forests & Parks: National Zoological Park, Asola Bhatti WS<br/>
        State Bird: Sparrow<br/>
        Neighbouring States: Haryana, Uttar Pradesh<br/>
        Assembly Constituencies: 70<br/>
        Parliamentary Constituencies: 7</p>

        <p><strong>History:</strong> Delhi has witnessed several historical epochs. Founded in its modern form by Shah Jahan in 1638, it has roots dating back to the 12th century. Conquered by Qutubuddin Aibak and influenced by the Mughals, Delhi has a layered and rich history.</p>

        <p><strong>Climate and Geography:</strong> Delhi experiences extreme climates—hot summers and chilly winters. It has a tropical steppe climate, with the monsoon bringing relief from June to October. Average annual temperature: 25.3°C.</p>

        <p><strong>Demographics:</strong> Delhi ranks second in population among Indian cities. With a density of 11,297/km² and a literacy rate of 87.40%, it reflects rapid urbanization. The sex ratio stands at 866 females per 1000 males.</p>

        <p><strong>Society and Culture:</strong> A melting pot of cultures, Delhi is cosmopolitan in nature. Influences from all over India, especially Punjabi culture, shape its social fabric. Western culture and mass media have also deeply impacted Delhi's lifestyle.</p>

        <p><strong>Languages:</strong> Delhi is multilingual—Hindi, English, Punjabi, and Urdu are widely spoken. Hindi is predominant, while English is common among the younger generation. Urdu and Punjabi also have significant speakers.</p>

        <p><strong>Tourism:</strong> Delhi offers a rich palette of historic and modern attractions—Red Fort, Qutub Minar, India Gate, Rashtrapati Bhavan, Akshardham, Jama Masjid, and Lotus Temple are just a few. The city is a favorite destination for global and domestic tourists.</p>

        <p><strong>Economy:</strong> As a service-heavy city, Delhi thrives on IT, commerce, education, and manufacturing. It is a business nucleus for Northern India, hosting major events at Pragati Maidan and India Expo Center. Key hubs include Connaught Place and Nehru Place.</p>

        <p><strong>Government and Politics:</strong> Delhi is governed by NDMC, MCD, and DCB. It has 11 districts and is home to the Supreme Court of India and multiple legislative and judicial bodies.</p>

        <p><strong>Education:</strong> A leader in education, Delhi hosts top institutions like JNU, Delhi University, and Jamia Millia Islamia. It has 160+ colleges and numerous schools serving over 2 million students.</p>

        <p><strong>Transportation:</strong> Delhi is well-connected via air (IGI Airport), rail (5 major stations), and road (NH 1, 2, 8, 10, 24). The Delhi Metro, a world-class rapid transit system, connects the city and NCR.</p>

        <p><strong>IT in Delhi and NCR:</strong> A hub for IT/ITES companies, Delhi NCR accounts for significant software exports. It hosts tech giants in various SEZs and IT parks across Noida, Gurugram, and Delhi.</p>

        <p><strong>Major Commercial Hubs:</strong><br/>
        - <strong>Pragati Maidan:</strong> Premier exhibition complex.<br/>
        - <strong>India Expo Center:</strong> High-tech event venue.<br/>
        - <strong>Connaught Place:</strong> Iconic shopping and business district.<br/>
        - <strong>Nehru Place:</strong> Leading IT and electronics market.</p>

        <p><strong>Issues and Challenges:</strong> Rapid urbanization has brought challenges like traffic congestion, pollution, water scarcity, unauthorized colonies, and environmental degradation.</p>
      </div>
    </div>
  );
};

export default DelhiComponent;