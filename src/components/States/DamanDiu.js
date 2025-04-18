import React from 'react';
import damanDiuImage from "../../assets/State/DamanDiu/DamanDiu.jpg";

const DamanDiuComponent = () => {
  return (
    <div className="flex flex-col p-6 overflow-y-auto">
      <h1 className="text-3xl font-bold mb-4">Daman and Diu</h1>
      <img
        src={damanDiuImage}
        alt="Daman and Diu"
        className="w-full max-w-3xl mx-auto mb-6 rounded-xl shadow-lg"
      />
      <div className="text-sm italic text-gray-600 mb-4">
        The map showing the official boundaries, district Head quarter of Diu and major places of Daman.<br/>
        Disclaimer: All efforts have been made to make this image accurate. However Mapping Digiworld Pvt Ltd and its directors do not own any responsibility for the correctness or authenticity of the same.
      </div>
      <div className="bg-white shadow-md rounded-xl p-6 space-y-4 text-justify text-base">
        <p>The second smallest union territory in India, Daman and Diu is located near Gujarat. Daman lies on the Gujarat coast while Diu is an islet in the southern fringe of the Kathiawar peninsula. It is bounded on its north and south by Bhagwan and the Kalem Rivers respectively, on its east by Gujarat and on its west by the Arabian Sea.</p>
        <p>Diu lies in the Gulf of Cambay near Veraval Port and is separated from the southern extremity of the Saurashtra peninsula by a narrow channel. The climate in Daman is mild and humid while Diu is sultry. The territory is divided into two districts and administered by appointed officials.</p>
        <p><strong>Quick Facts:</strong><br/>
        Official Website: www.daman.nic.in<br/>
        Date of Formation: May 30, 1987<br/>
        Area: 111 sq km<br/>
        Population (2011): 2,43,247<br/>
        Density: 2169/km²<br/>
        Capital: Daman<br/>
        Languages: Warli, Agri, Konkani, Gujarati, Hindi, English<br/>
        Literacy Rate: 92.28%<br/>
        Female per 1000 males: 618<br/>
        Parliamentary Constituency: 1</p>
        <p><strong>History:</strong> Daman and Diu was ruled by Chowda Rajputs, then Waghalas, and later by Muslim rulers until 1534 when the Portuguese took over. It was annexed by India in 1961. Separated from Goa in 1987, it became an independent union territory.</p>
        <p><strong>Geography:</strong> Daman lies on the west coast of India, bordered by the Arabian Sea and Kalem and Bhagwan rivers. The Damanganga River divides Daman into two. Diu lies off the southern coast of Gujarat, connected to the mainland by a narrow channel.</p>
        <p><strong>Government:</strong> The territory is administered by an administrator appointed by the President of India. The region does not have an elected legislative assembly.</p>
        <p><strong>Economy:</strong> Fishing and agriculture (paddy, groundnut, wheat, bananas, mangoes) are primary activities. There are 550 industrial units. Infrastructure includes 191 km of roads in Daman and 78 km in Diu. There are no railway stations or airports.</p>
        <p><strong>Culture:</strong> Daman and Diu's culture is a blend of Indian, tribal, and Portuguese traditions. Festivals are celebrated with grandeur, and the people’s customs are similar to Gujarat’s. Hinduism is predominant, and Gujarati is widely spoken.</p>
        <p><strong>Language:</strong> Official languages include Hindi, English, Gujarati, and Konkani. Portuguese is still spoken by the elderly. Warli and Agri dialects are also used.</p>
        <p><strong>Education:</strong> The literacy rate is high at 87.07%. Notable schools include Coast Guard Public School and Institute of Our Lady of Fatima. Daman College offers higher education with modern facilities.</p>
        <p><strong>Tourism:</strong> Key attractions include Fort of St. Jerome, Se Cathedral, and Church of Our Lady of Rosary. These Portuguese-era sites feature rich architecture and historic carvings.</p>
      </div>
    </div>
  );
};

export default DamanDiuComponent;
