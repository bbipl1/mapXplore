import React, { useState } from "react";

const Rajasthan = () => {
	const districts = [
		"Jaipur",
		"Jodhpur",
		"Udaipur",
		"Kota",
		"Bikaner",
		"Ajmer",
		"Alwar",
		"Bharatpur",
		"Chittorgarh",
		"Pali",
		"Sri Ganganagar",
		"Sikar",
		"Barmer",
		"Jaisalmer",
		"Nagaur",
		"Bhilwara",
	];

	const districtInfo = {
		Jaipur: `The Pink City, capital of Rajasthan, known for its historic forts, palaces, and vibrant markets. Home to Amber Fort and Hawa Mahal.`,
		Jodhpur: `The Blue City, dominated by Mehrangarh Fort. Center for traditional handicrafts and Marwar culture.`,
		Udaipur: `City of Lakes, famous for Lake Pichola and City Palace. Known as the Venice of the East.`,
		Kota: `Education hub and industrial city on the Chambal River. Known for Kota stone and coaching institutes.`,
		Bikaner: `Desert city famous for Junagarh Fort, camel safaris, and Bikaneri bhujia snacks.`,
		Ajmer: `Pilgrimage center housing the Dargah Sharif. Gateway to Pushkar Lake and annual camel fair.`,
		Alwar: `Gateway to Rajasthan, known for Sariska Tiger Reserve and Bala Qila fort.`,
		Bharatpur: `Home to Keoladeo National Park (UNESCO World Heritage Site) and Lohagarh Fort.`,
		Chittorgarh: `Historic city with Chittor Fort, symbol of Rajput valor and sacrifice.`,
		Pali: `Industrial city known for textile production and ancient temples.`,
		"Sri Ganganagar": `Northernmost city known for irrigation canal system and citrus fruits.`,
		Sikar: `Part of Shekhawati region, known for havelis and educational institutions.`,
		Barmer: `Desert district famous for traditional embroidery and wooden furniture.`,
		Jaisalmer: `Golden City in the Thar Desert, known for Jaisalmer Fort and sand dunes.`,
		Nagaur: `Historical town hosting the Nagaur Cattle Fair and Ahhichatragarh Fort.`,
		Bhilwara: `Textile manufacturing hub known as the Manchester of Rajasthan.`,
	};

	const [selectedDistrict, setSelectedDistrict] = useState("Jaipur");

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
							className={`cursor-pointer px-3 py-2 rounded-md ${
								selectedDistrict === district
									? "bg-amber-600 text-white font-semibold"
									: "hover:bg-amber-100"
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
						src={require("../../assets/State/Rajasthan/Rajasthan.jpg")}
						alt="Rajasthan"
						className="w-full h-full object-cover rounded-lg shadow-md"
					/>
				</div>

				{/* All State Info Sections */}
				<section>
					<h1 className="text-4xl font-bold text-[#2E3A59] mb-4">
						Rajasthan
					</h1>
					<p className="text-lg leading-7">
						The Land of Kings, Rajasthan is a vibrant tapestry of
						desert landscapes, majestic forts, and rich cultural
						heritage. Known for its Rajput valor, colorful
						festivals, and warm hospitality, it offers a royal
						journey through India's history and traditions.
					</p>
				</section>

				{/* Quick Facts */}
				<section className="mb-10">
					<h2 className="text-2xl font-semibold text-[#2E3A59] mb-3">
						Quick Facts
					</h2>
					<ul className="list-disc list-inside space-y-1">
						<li>
							<strong>Capital:</strong> Jaipur
						</li>
						<li>
							<strong>Area:</strong> 342,239 sq km
						</li>
						<li>
							<strong>Population:</strong> 68.5 million (2011
							Census)
						</li>
						<li>
							<strong>Official Language:</strong> Hindi
						</li>
						<li>
							<strong>State Animal:</strong> Chinkara
						</li>
						<li>
							<strong>State Bird:</strong> Great Indian Bustard
						</li>
					</ul>
				</section>

				{/* Tourism */}
				<section className="mb-10">
					<h2 className="text-2xl font-semibold text-[#2E3A59] mb-3">
						Tourism
					</h2>
					<p className="text-lg leading-7 mb-2">
						Rajasthan's royal legacy comes alive through its:
					</p>
					<ul className="list-disc list-inside space-y-1">
						<li>Amber Fort & Jaipur City Palace</li>
						<li>Udaipur's Lake Pichola</li>
						<li>Jaisalmer Desert Festival</li>
						<li>Ranthambore Tiger Reserve</li>
						<li>Pushkar Camel Fair</li>
						<li>Mehrangarh Fort in Jodhpur</li>
					</ul>
				</section>

				{/* Geography */}
				<section className="mb-10">
					<h2 className="text-2xl font-semibold text-[#2E3A59] mb-3">
						Geography & Climate
					</h2>
					<p className="text-lg leading-7">
						Features the Thar Desert and Aravalli Range. Climate
						varies from:
					</p>
					<ul className="list-disc list-inside mt-2">
						<li>Summer (Apr-Jun): 25°C to 48°C</li>
						<li>Winter (Dec-Feb): 8°C to 28°C</li>
						<li>Annual Rainfall: 200-400 mm</li>
					</ul>
				</section>

				{/* Culture & Society */}
				<section className="mb-10">
					<h2 className="text-2xl font-semibold text-[#2E3A59] mb-3">
						Culture & Society
					</h2>
					<div className="grid md:grid-cols-2 gap-4 mt-4">
						<div>
							<h3 className="font-semibold text-lg">Festivals</h3>
							<ul className="list-disc list-inside">
								<li>Gangaur Festival</li>
								<li>Teej Celebrations</li>
								<li>Desert Festival</li>
							</ul>
						</div>
						<div>
							<h3 className="font-semibold text-lg">Arts</h3>
							<ul className="list-disc list-inside">
								<li>Kathputli Puppetry</li>
								<li>Ghoomar Dance</li>
								<li>Miniature Paintings</li>
							</ul>
						</div>
					</div>
				</section>

				{/* Education */}
				<section className="mb-10">
					<h2 className="text-2xl font-semibold text-[#2E3A59] mb-3">
						Education
					</h2>
					<ul className="list-disc list-inside space-y-1">
						<li>Literacy Rate: 66.1% (2011 Census)</li>
						<li>
							Notable Institutions:
							<ul className="list-[circle] list-inside ml-4">
								<li>IIT Jodhpur</li>
								<li>MNIT Jaipur</li>
								<li>Central University of Rajasthan</li>
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
								<li>International Airport: Jaipur</li>
								<li>Domestic Airports: Jodhpur, Udaipur</li>
							</ul>
						</div>
						<div>
							<h3 className="font-semibold text-lg">Rail</h3>
							<ul className="list-disc list-inside">
								<li>Major Junctions: Jaipur, Jodhpur, Kota</li>
								<li>Palace on Wheels Luxury Train</li>
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
						<li>Unicameral Legislature (200 seats)</li>
						<li>Administrative Divisions: 7 divisions</li>
						<li>High Court: Rajasthan High Court (Jodhpur)</li>
					</ul>
				</section>
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
						{selectedDistrict === "Jaipur" && (
							<>
								<li>Amber Fort</li>
								<li>Hawa Mahal</li>
								<li>Jantar Mantar</li>
							</>
						)}
						{selectedDistrict === "Jodhpur" && (
							<>
								<li>Mehrangarh Fort</li>
								<li>Umaid Bhawan Palace</li>
								<li>Clock Tower Market</li>
							</>
						)}
						{selectedDistrict === "Udaipur" && (
							<>
								<li>City Palace</li>
								<li>Lake Pichola</li>
								<li>Jag Mandir</li>
							</>
						)}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Rajasthan;
