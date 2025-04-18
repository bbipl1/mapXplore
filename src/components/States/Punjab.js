// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import punjabImage from "../../assets/State/Punjab/Punjab.jpg";

// const Punjab = () => {
// 	const [selectedCity, setSelectedCity] = useState("Chandigarh");

// 	const cities = [
// 		"Chandigarh",
// 		"Amritsar",
// 		"Ludhiana",
// 		"Jalandhar",
// 		"Patiala",
// 		"Bathinda",
// 	];

// 	const cityContent = {
// 		Chandigarh: `Chandigarh, the shared capital of Punjab and Haryana, is a planned city known for its modern architecture and urban design. It houses the iconic Capitol Complex designed by Le Corbusier.`,

// 		Amritsar: `Amritsar is the spiritual and cultural center of Sikhism, home to the magnificent Golden Temple. The city is also known for the historic Jallianwala Bagh and the vibrant Wagah Border ceremony.`,

// 		Ludhiana: `Ludhiana is Punjab's largest city and industrial hub, renowned for its textile and manufacturing industries. It's often called the 'Manchester of India' for its industrial significance.`,

// 		Jalandhar: `Jalandhar is a major educational and sports equipment manufacturing center. It's known for its leather goods, sports industry, and historical temples.`,

// 		Patiala: `Patiala is famous for its rich cultural heritage, including the Patiala Peg, Patiala salwar, and magnificent forts like Qila Mubarak. It was once the capital of a princely state.`,

// 		Bathinda: `Bathinda is one of the oldest cities in Punjab, known for the historic Qila Mubarak fort and its growing importance as an industrial and educational hub.`,
// 	};

// 	return (
// 		<div className="flex min-h-screen">
// 			{/* Sidebar */}
// 			<div className="w-1/4 bg-white p-6 shadow-xl rounded-r-2xl">
// 				<h2 className="text-2xl font-semibold mb-6 text-gray-800 border-b pb-2">
// 					Cities of Punjab
// 				</h2>
// 				<ul>
// 					{cities.map((city) => (
// 						<li
// 							key={city}
// 							className={`cursor-pointer p-3 mb-3 rounded-lg transition-all duration-300 font-medium ${
// 								selectedCity === city
// 									? "bg-gradient-to-r from-yellow-400 to-orange-500 text-white"
// 									: "bg-gray-100 hover:bg-orange-100 text-gray-800"
// 							}`}
// 							onClick={() => setSelectedCity(city)}
// 						>
// 							{city}
// 						</li>
// 					))}
// 				</ul>
// 			</div>

// 			{/* Content Area */}
// 			<div className="flex-1 p-10 bg-gray-50 overflow-y-auto">
// 				<h1 className="text-4xl font-bold text-center mb-8 text-gray-700">
// 					Explore Punjab
// 				</h1>
// 				<img
// 					src={punjabImage}
// 					alt="Punjab Map"
// 					className="w-full h-96 object-cover rounded-3xl shadow-lg mb-8 hover:scale-105 transition-transform duration-500"
// 				/>
// 				<motion.div
// 					key={selectedCity}
// 					initial={{ opacity: 0, y: 20 }}
// 					animate={{ opacity: 1, y: 0 }}
// 					transition={{ duration: 0.5 }}
// 				>
// 					<h2 className="text-3xl font-semibold mb-4 text-orange-700">
// 						{selectedCity}
// 					</h2>
// 					<p className="text-lg leading-relaxed text-gray-700 whitespace-pre-line">
// 						{cityContent[selectedCity]}
// 					</p>
// 				</motion.div>

// 				{/* General Punjab Information */}
// 				<div className="mt-12">
// 					<h2 className="text-3xl font-bold mb-6 text-blue-800">
// 						About Punjab
// 					</h2>
// 					<div className="space-y-6 text-gray-700 text-lg leading-relaxed whitespace-pre-line">
// 						<p>
// 							<strong>Tourism of Punjab:</strong> Known as the
// 							'Land of Five Rivers', Punjab offers spiritual sites
// 							like the Golden Temple, historical monuments, and
// 							vibrant rural tourism... More Details...
// 						</p>
// 						<p>
// 							<strong>History and Geography:</strong> One of the
// 							oldest civilizations in the world, Punjab was the
// 							center of the Indus Valley Civilization. The region
// 							has witnessed numerous historical empires and
// 							events... More Details...
// 						</p>
// 						<p>
// 							<strong>Society and Culture:</strong> Punjabis are
// 							known for their warm hospitality, lively festivals,
// 							and rich cultural heritage. The state is a melting
// 							pot of Sikh, Hindu, and Muslim traditions... More
// 							Details...
// 						</p>
// 						<p>
// 							<strong>Government of Punjab:</strong> A
// 							parliamentary system with a unicameral legislature.
// 							The capital is Chandigarh, a union territory serving
// 							as joint capital with Haryana... More Details...
// 						</p>
// 						<p>
// 							<strong>Economy and Infrastructure:</strong> Major
// 							agricultural producer (India's wheat basket),
// 							growing industrial sector, and significant
// 							contributions to sports goods and textiles... More
// 							Details...
// 						</p>
// 						<p>
// 							<strong>Hotels of Punjab:</strong> Range from luxury
// 							heritage properties to budget accommodations,
// 							particularly in religious tourism centers... More
// 							Details...
// 						</p>
// 						<p>
// 							<strong>Capital:</strong> Chandigarh
// 						</p>
// 						<p>
// 							<strong>Area:</strong> 50,362 sq. km
// 						</p>
// 						<p>
// 							<strong>Population:</strong> 27,743,338 (2011
// 							Census)
// 						</p>
// 						<p>
// 							<strong>Weather:</strong> Summer: 25°C–45°C, Winter:
// 							0°C–20°C, Avg Rainfall: 649 mm annually
// 						</p>
// 						<p>
// 							<strong>Rivers:</strong> Sutlej, Beas, Ravi, Chenab,
// 							and Jhelum (Five Rivers)
// 						</p>
// 						<p>
// 							<strong>Minerals:</strong> Sand, clay, limestone,
// 							and silica
// 						</p>
// 						<p>
// 							<strong>Demographics:</strong> Majority
// 							Punjabi-speaking population with significant Sikh
// 							population
// 						</p>
// 						<p>
// 							<strong>Festivals:</strong> Baisakhi, Lohri,
// 							Gurpurab, Hola Mohalla
// 						</p>
// 						<p>
// 							<strong>Dance Forms:</strong> Bhangra, Giddha,
// 							Sammi, Jhumar
// 						</p>
// 						<p>
// 							<strong>Languages:</strong> Punjabi (official),
// 							Hindi, English
// 						</p>
// 						<p>
// 							<strong>Religions:</strong> Sikhism (57.7%),
// 							Hinduism (38.5%), Islam, Christianity, Jainism
// 						</p>
// 						<p>
// 							<strong>Education:</strong> Literacy rate: 76%.
// 							Notable institutes: PEC University, Thapar
// 							Institute, Punjab Agricultural University
// 						</p>
// 						<p>
// 							<strong>Transport:</strong> Major airports in
// 							Chandigarh and Amritsar. Extensive rail network with
// 							major junctions at Ludhiana and Jalandhar
// 						</p>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

// export default Punjab;

import React, { useState } from "react";

const Punjab = () => {
	const districts = [
		"Amritsar",
		"Ludhiana",
		"Jalandhar",
		"Patiala",
		"Bathinda",
		"Mohali",
		"Firozpur",
		"Hoshiarpur",
		"Kapurthala",
		"Moga",
		"Pathankot",
		"Rupnagar",
		"Sangrur",
		"Fazilka",
		"Barnala",
		"Faridkot",
	];

	const districtInfo = {
		Amritsar: `Spiritual capital housing the Golden Temple, important center for Sikh history and culture. Major economic hub with thriving tourism and handicrafts industry.`,
		Ludhiana: `Industrial powerhouse known as 'Manchester of India'. Major center for bicycle, auto parts, and textile manufacturing.`,
		Jalandhar: `Sports equipment manufacturing hub with strong educational institutions. Known for leather goods and religious diversity.`,
		Patiala: `City of royalty with Qila Mubarak complex. Famous for Patiala peg, traditional footwear, and Phulkari embroidery.`,
		Bathinda: `Energy hub with thermal plants and oil refinery. Home to historic Qila Mubarak fort and modern educational institutions.`,
		Mohali: `IT and technology hub adjacent to Chandigarh. Hosts PCA Stadium and major tech parks.`,
		Firozpur: `Border district with important military presence. Known for Hussainiwala Memorial and riverine landscape.`,
		Hoshiarpur: `Agricultural district famous for wood craftsmanship and Shivalik foothills landscape.`,
		Kapurthala: `'Paris of Punjab' with French-inspired architecture. Known for Jagatjit Palace and textile industries.`,
		Moga: `Agricultural heartland with major dairy cooperatives. Birthplace of Milkha Singh.`,
		Pathankot: `Gateway to Himachal Pradesh and Jammu. Strategic military location and transportation hub.`,
		Rupnagar: `Ancient site of Indus Valley civilization. Home to Ropar Wetland and major cement plants.`,
		Sangrur: `Agricultural research hub with dryland farming expertise. Known for horse breeding and folk music.`,
		Fazilka: `Border town with unique 'Gabria' festival. Emerging center for cotton trade and agro-processing.`,
		Barnala: `Textile manufacturing center with historic Gurudwaras. Known for handloom products.`,
		Faridkot: `Historical principality with architectural landmarks. Center for medical education and steel industries.`,
	};

	const [selectedDistrict, setSelectedDistrict] = useState("Amritsar");

	return (
		<div className="flex flex-col md:flex-row px-4 sm:px-10 md:px-20 py-10 text-[#333] gap-10">
			{/* Left Sidebar: District List */}
			<div className="md:w-1/4 w-full bg-gray-100 rounded-lg shadow-md p-4 h-fit sticky top-10">
				<h2 className="text-xl font-bold mb-4 text-[#2E3A59]">
					Districts
				</h2>
				<ul className="space-y-2">
					{districts.map((district) => (
						<li
							key={district}
							className={`cursor-pointer px-3 py-2 rounded-md ${selectedDistrict === district
									? "bg-orange-600 text-white font-semibold"
									: "hover:bg-orange-100"
								}`}
							onClick={() => setSelectedDistrict(district)}
						>
							{district}
						</li>
					))}
				</ul>
			</div>

			{/* Center Content Area */}
			<div className="md:w-2/4 w-full space-y-10">
				{/* Image */}
				<div className="w-full h-64 sm:h-96">
					<img
						src={require("../../assets/State/Punjab/Punjab.jpg")}
						alt="Punjab"
						className="w-full h-full object-cover rounded-lg shadow-md"
					/>
				</div>

				{/* All State Info Sections */}
				<section>
					<h1 className="text-4xl font-bold text-[#2E3A59] mb-4">
						Punjab
					</h1>
					<p className="text-lg leading-7">
						Punjab is a state located in the northwestern region of India, known for its rich culture, fertile land, and vibrant history. The word Punjab means "Land of Five Rivers" — referring to the Beas, Chenab, Jhelum, Ravi, and Sutlej rivers. The state is celebrated for its agriculture, music, cuisine, and warm-hearted people.


					</p>
				</section>

				{/* Quick Facts */}
				<section className="mb-10">
					<h2 className="text-2xl font-semibold text-[#2E3A59] mb-3">
						Quick Facts
					</h2>
					<ul className="list-disc list-inside space-y-1">
						<li>
							<strong>Capital:</strong> Chandigarh (Union
							Territory)
						</li>
						<li>
							<strong>Area:</strong> 50,362 sq km
						</li>
						<li>
							<strong>Population:</strong> 27.7 million (2011
							Census)
						</li>
						<li>
							<strong>Official Language:</strong> Punjabi
						</li>
						<li>
							<strong>State Animal:</strong> Blackbuck
						</li>
						<li>
							<strong>State Bird:</strong> Northern Goshawk
						</li>
					</ul>
				</section>

				{/* Tourism */}
				<section className="mb-10">
					<h2 className="text-2xl font-semibold text-[#2E3A59] mb-3">
						Tourism
					</h2>
					<p className="text-lg leading-7 mb-2">
						Punjab offers a unique blend of spiritual, historical,
						and cultural experiences:
					</p>
					<ul className="list-disc list-inside space-y-1">
						<li>
							Golden Temple - Sikhism's holiest shrine in Amritsar
						</li>
						<li>Wagah Border - Daily flag-lowering ceremony</li>
						<li>
							Jallianwala Bagh - Historic memorial in Amritsar
						</li>
						<li>Anandpur Sahib - Birthplace of Khalsa</li>
						<li>Sheesh Mahal - Mirror Palace in Patiala</li>
						<li>
							Harike Wetland - Largest bird sanctuary in North
							India
						</li>
					</ul>
				</section>

				{/* Geography */}
				<section className="mb-10">
					<h2 className="text-2xl font-semibold text-[#2E3A59] mb-3">
						Geography & Climate
					</h2>
					<p className="text-lg leading-7">
						Punjab's fertile alluvial plains are fed by five rivers:
						Sutlej, Beas, Ravi, Chenab, and Jhelum. The state
						experiences extreme continental climate:
					</p>
					<ul className="list-disc list-inside mt-2">
						<li>Summer (Apr-Jun): 25°C to 45°C</li>
						<li>Winter (Dec-Feb): 0°C to 20°C</li>
						<li>Monsoon (Jul-Sep): 649 mm average rainfall</li>
					</ul>
				</section>

				{/* Culture & Society */}
				<section className="mb-10">
					<h2 className="text-2xl font-semibold text-[#2E3A59] mb-3">
						Culture & Society
					</h2>
					<p className="text-lg leading-7">
						Punjabi culture is characterized by its zest for life,
						expressed through:
					</p>
					<div className="grid md:grid-cols-2 gap-4 mt-4">
						<div>
							<h3 className="font-semibold text-lg">Festivals</h3>
							<ul className="list-disc list-inside">
								<li>Baisakhi - Harvest festival (April)</li>
								<li>Lohri - Winter solstice celebration</li>
								<li>
									Gurpurabs - Sikh religious commemorations
								</li>
							</ul>
						</div>
						<div>
							<h3 className="font-semibold text-lg">Arts</h3>
							<ul className="list-disc list-inside">
								<li>Bhangra & Giddha folk dances</li>
								<li>Punjabi folk music (Dhol rhythms)</li>
								<li>Phulkari embroidery tradition</li>
							</ul>
						</div>
					</div>
				</section>

				{/* Food */}
				{/* <section className="mb-10">
					<h2 className="text-2xl font-semibold text-[#2E3A59] mb-3">
						Cuisine
					</h2>
					<p className="text-lg leading-7">
						Punjabi cuisine is known for its rich, buttery flavors
						and tandoori preparations:
					</p>
					<div className="grid md:grid-cols-2 gap-4 mt-4">
						<div>
							<h3 className="font-semibold text-lg">
								Signature Dishes
							</h3>
							<ul className="list-disc list-inside">
								<li>Makki di Roti & Sarson da Saag</li>
								<li>Butter Chicken & Dal Makhani</li>
								<li>Amritsari Kulcha & Chole</li>
							</ul>
						</div>
						<div>
							<h3 className="font-semibold text-lg">Beverages</h3>
							<ul className="list-disc list-inside">
								<li>Lassi (sweet & salty yogurt drink)</li>
								<li>Punjabi Chai (masala tea)</li>
								<li>Sugarcane juice</li>
							</ul>
						</div>
					</div>
				</section> */}

				{/* Education */}
				<section className="mb-10">
					<h2 className="text-2xl font-semibold text-[#2E3A59] mb-3">
						Education
					</h2>
					<ul className="list-disc list-inside space-y-1">
						<li>Literacy Rate: 76.68% (2021)</li>
						<li>
							Notable Institutions:
							<ul className="list-[circle] list-inside ml-4">
								<li>
									Punjab Agricultural University, Ludhiana
								</li>
								<li>
									Thapar Institute of Engineering & Technology
								</li>
								<li>Guru Nanak Dev University, Amritsar</li>
							</ul>
						</li>
					</ul>
				</section>

				{/* Transport */}
				<section className="mb-10">
					<h2 className="text-2xl font-semibold text-[#2E3A59] mb-3">
						Transport
					</h2>
					<div className="grid md:grid-cols-2 gap-4">
						<div>
							<h3 className="font-semibold text-lg">Air</h3>
							<ul className="list-disc list-inside">
								<li>
									International Airport: Sri Guru Ram Dass Jee
									(Amritsar)
								</li>
								<li>Domestic Airport: Chandigarh</li>
							</ul>
						</div>
						<div>
							<h3 className="font-semibold text-lg">Rail</h3>
							<ul className="list-disc list-inside">
								<li>
									Major Junctions: Ludhiana, Jalandhar,
									Amritsar
								</li>
								<li>Express Routes: Shatabdi, Jan Shatabdi</li>
							</ul>
						</div>
					</div>
				</section>

				{/* Government */}
				<section className="mb-10">
					<h2 className="text-2xl font-semibold text-[#2E3A59] mb-3">
						Government
					</h2>
					<ul className="list-disc list-inside">
						<li>Unicameral Legislature (117 seats)</li>
						<li>
							Administrative Divisions: 5 divisions, 23 districts
						</li>
						<li>
							High Court: Punjab and Haryana High Court
							(Chandigarh)
						</li>
					</ul>
				</section>

				{/* Famous Personalities */}
				{/* <section className="mb-10">
					<h2 className="text-2xl font-semibold text-[#2E3A59] mb-3">
						Famous Personalities
					</h2>
					<div className="grid md:grid-cols-2 gap-4">
						<div>
							<h3 className="font-semibold text-lg">
								Historical
							</h3>
							<ul className="list-disc list-inside">
								<li>Guru Nanak Dev Ji (Sikhism founder)</li>
								<li>Maharaja Ranjit Singh (Lion of Punjab)</li>
							</ul>
						</div>
						<div>
							<h3 className="font-semibold text-lg">
								Contemporary
							</h3>
							<ul className="list-disc list-inside">
								<li>Milkha Singh (Flying Sikh athlete)</li>
								<li>Diljit Dosanjh (Actor/Singer)</li>
								<li>Abhinav Bindra (Olympic shooter)</li>
							</ul>
						</div>
					</div>
				</section> */}
			</div>

			{/* Right Sidebar: District Info */}
			<div className="md:w-1/4 w-full bg-white rounded-lg shadow-md p-6 h-fit sticky top-10">
				<h2 className="text-2xl font-bold mb-4 text-[#2E3A59] border-b pb-2">
					{selectedDistrict} District
				</h2>
				<p className="text-lg leading-relaxed text-gray-700">
					{districtInfo[selectedDistrict]}
				</p>
				<div className="mt-6">
					<h3 className="text-lg font-semibold mb-2">Key Features</h3>
					<ul className="list-disc list-inside space-y-1 text-gray-600">
						{selectedDistrict === "Amritsar" && (
							<>
								<li>Golden Temple Complex</li>
								<li>Jallianwala Bagh</li>
								<li>Handicraft Markets</li>
							</>
						)}
						{selectedDistrict === "Ludhiana" && (
							<>
								<li>Cycle Industry Cluster</li>
								<li>Punjab Agricultural University</li>
								<li>Rakh Bagh Park</li>
							</>
						)}
						{/* Add features for other districts */}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Punjab;
