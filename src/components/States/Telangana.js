import React, { useState } from "react";

const Telangana = () => {
	const districts = [
		"Hyderabad",
		"Karimnagar",
		"Warangal",
		"Nizamabad",
		"Khammam",
		"Nalgonda",
		"Medak",
		"Rangareddy",
	];

	const districtInfo = {
		Hyderabad: `The bustling capital, renowned for its iconic Charminar, Golconda Fort, and a flourishing IT industry. It’s a vibrant mix of history and modernity.`,
		Karimnagar: `A district with rich historical roots and agricultural prominence, featuring ancient temples and local cultural festivities.`,
		Warangal: `Home to magnificent Kakatiya-era monuments, including Warangal Fort and the Thousand Pillar Temple, reflecting its royal heritage.`,
		Nizamabad: `Known for its historic sites, scenic lakes, and a blend of cultural traditions that highlight its diverse legacy.`,
		Khammam: `A district celebrated for its cultural heritage, natural landscapes, and historical forts nestled amidst lush surroundings.`,
		Nalgonda: `Characterized by ancient temples and rural charm, Nalgonda offers a glimpse into Telangana’s traditional way of life.`,
		Medak: `Rich in history, Medak is known for its impressive Medak Cathedral and other notable architectural landmarks.`,
		Rangareddy: `An emerging industrial and suburban hub adjacent to Hyderabad, balancing rapid growth with traditional markets.`,
	};

	const [selectedDistrict, setSelectedDistrict] = useState("Hyderabad");

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
						src={require("../../assets/State/Telangana/Telangana.jpg")}
						alt="Telangana"
						className="w-full h-full object-contain rounded-lg shadow-md"
					/>
				</div>

				{/* State Info Section */}
				<section>
					<h1 className="text-4xl font-bold text-[#2E3A59] mb-4">
						Telangana
					</h1>
					<p className="text-lg leading-7">
						Formed in 2014, Telangana is a land of historical
						marvels and dynamic growth. With Hyderabad as its
						vibrant capital, the state blends rich cultural heritage
						with rapid modernization, offering scenic landscapes,
						ancient monuments, and a thriving IT corridor.
					</p>
				</section>

				{/* Quick Facts */}
				<section className="mb-10">
					<h2 className="text-2xl font-semibold text-[#2E3A59] mb-3">
						Quick Facts
					</h2>
					<ul className="list-disc list-inside space-y-1">
						<li>
							<strong>Capital:</strong> Hyderabad
						</li>
						<li>
							<strong>Area:</strong> 112,077 sq km
						</li>
						<li>
							<strong>Population:</strong> ~35 million (2011
							Census)
						</li>
						<li>
							<strong>Official Language:</strong> Telugu
						</li>
						<li>
							<strong>State Animal:</strong> Spotted Deer
						</li>
						<li>
							<strong>State Bird:</strong> Indian Roller
						</li>
					</ul>
				</section>

				{/* Tourism */}
				<section className="mb-10">
					<h2 className="text-2xl font-semibold text-[#2E3A59] mb-3">
						Tourism
					</h2>
					<p className="text-lg leading-7 mb-2">
						Telangana entices visitors with its blend of ancient
						heritage and modern attractions:
					</p>
					<ul className="list-disc list-inside space-y-1">
						<li>Charminar & Golconda Fort in Hyderabad</li>
						<li>Warangal Fort & Thousand Pillar Temple</li>
						<li>Ramoji Film City</li>
						<li>Local cultural festivals and cuisine</li>
					</ul>
				</section>

				{/* Geography & Climate */}
				<section className="mb-10">
					<h2 className="text-2xl font-semibold text-[#2E3A59] mb-3">
						Geography & Climate
					</h2>
					<p className="text-lg leading-7">
						Telangana features a mix of fertile plains, rocky
						terrain, and scenic hills. Its climate varies from hot
						summers to moderate winters, with a monsoon season that
						rejuvenates its landscapes.
					</p>
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
									Rajiv Gandhi International Airport
									(Hyderabad)
								</li>
							</ul>
						</div>
						<div>
							<h3 className="font-semibold text-lg">Rail</h3>
							<ul className="list-disc list-inside">
								<li>
									Major Junctions: Hyderabad, Secunderabad
								</li>
								<li>Extensive state-wide rail connectivity</li>
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
						<li>Unicameral Legislature</li>
						<li>
							Divided into multiple districts for administrative
							efficiency
						</li>
						<li>High Court: Telangana High Court (Hyderabad)</li>
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
						{selectedDistrict === "Hyderabad" && (
							<>
								<li>Charminar</li>
								<li>Golconda Fort</li>
								<li>Hussain Sagar Lake</li>
							</>
						)}
						{selectedDistrict === "Karimnagar" && (
							<>
								<li>Historical Temples</li>
								<li>Agricultural Heritage</li>
								<li>Cultural Festivals</li>
							</>
						)}
						{selectedDistrict === "Warangal" && (
							<>
								<li>Warangal Fort</li>
								<li>Thousand Pillar Temple</li>
								<li>Kakatiya Architecture</li>
							</>
						)}
						{selectedDistrict === "Nizamabad" && (
							<>
								<li>Nizamabad Fort</li>
								<li>Scenic Lakes</li>
								<li>Cultural Heritage</li>
							</>
						)}
						{selectedDistrict === "Khammam" && (
							<>
								<li>Historic Forts</li>
								<li>Natural Landscapes</li>
								<li>Local Markets</li>
							</>
						)}
						{selectedDistrict === "Nalgonda" && (
							<>
								<li>Ancient Temples</li>
								<li>Rural Charm</li>
								<li>Local Crafts</li>
							</>
						)}
						{selectedDistrict === "Medak" && (
							<>
								<li>Medak Cathedral</li>
								<li>Historical Ruins</li>
								<li>Architectural Marvels</li>
							</>
						)}
						{selectedDistrict === "Rangareddy" && (
							<>
								<li>Industrial Growth</li>
								<li>Tech Hubs</li>
								<li>Developing Suburbs</li>
							</>
						)}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Telangana;
