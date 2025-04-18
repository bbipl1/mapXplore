import React, { useState } from "react";

const Tripura = () => {
	const districts = [
		"West Tripura",
		"South Tripura",
		"North Tripura",
		"Dhalai",
	];

	const districtInfo = {
		"West Tripura": `Home to Agartala, known for its historical sites and vibrant cultural heritage.`,
		"South Tripura": `Rich in natural beauty and tribal traditions, showcasing scenic landscapes.`,
		"North Tripura": `Offers lush green hills and unique cultural experiences in rural settings.`,
		Dhalai: `Known for its picturesque nature and rural charm with untouched environments.`,
	};

	const [selectedDistrict, setSelectedDistrict] = useState("West Tripura");

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
						src={require("../../assets/State/Tripura/Tripura.jpg")}
						alt="Tripura"
						className="w-full h-full object-contain rounded-lg shadow-md"
					/>
				</div>

				{/* State Info Section */}
				<section>
					<h1 className="text-4xl font-bold text-[#2E3A59] mb-4">
						Tripura
					</h1>
					<p className="text-lg leading-7">
						Tripura, nestled in the Northeast, combines rich tribal
						traditions with natural beauty and historical landmarks.
						Its scenic landscapes and cultural diversity make it a
						unique destination.
					</p>
				</section>

				{/* Quick Facts */}
				<section className="mb-10">
					<h2 className="text-2xl font-semibold text-[#2E3A59] mb-3">
						Quick Facts
					</h2>
					<ul className="list-disc list-inside space-y-1">
						<li>
							<strong>Capital:</strong> Agartala
						</li>
						<li>
							<strong>Area:</strong> 10,491 sq km
						</li>
						<li>
							<strong>Population:</strong> ~3.67 million
						</li>
						<li>
							<strong>Official Language:</strong> Bengali,
							Kokborok
						</li>
					</ul>
				</section>

				{/* Tourism */}
				<section className="mb-10">
					<h2 className="text-2xl font-semibold text-[#2E3A59] mb-3">
						Tourism
					</h2>
					<p className="text-lg leading-7 mb-2">
						Tripura attracts with its ancient palaces, cultural
						festivals, and natural reserves.
					</p>
					<ul className="list-disc list-inside space-y-1">
						<li>Ujjayanta Palace</li>
						<li>Neermahal</li>
						<li>Heritage villages</li>
					</ul>
				</section>

				{/* Geography & Climate */}
				<section className="mb-10">
					<h2 className="text-2xl font-semibold text-[#2E3A59] mb-3">
						Geography & Climate
					</h2>
					<p className="text-lg leading-7">
						Tripura features a tropical savanna climate with
						distinct wet and dry seasons, complemented by rolling
						hills and dense forests.
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
								<li>Maharaja Bir Bikram Airport, Agartala</li>
							</ul>
						</div>
						<div>
							<h3 className="font-semibold text-lg">Rail</h3>
							<ul className="list-disc list-inside">
								<li>Agartala Railway Station</li>
								<li>Regional rail connections</li>
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
							Divided into 8 districts (current status may vary)
						</li>
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
						{selectedDistrict === "West Tripura" && (
							<>
								<li>Agartala City Center</li>
								<li>Heritage Sites</li>
								<li>Cultural Hubs</li>
							</>
						)}
						{selectedDistrict === "South Tripura" && (
							<>
								<li>Scenic Villages</li>
								<li>Local Markets</li>
								<li>Natural Landscapes</li>
							</>
						)}
						{selectedDistrict === "North Tripura" && (
							<>
								<li>Lush Hills</li>
								<li>Tribal Culture</li>
								<li>Rural Charm</li>
							</>
						)}
						{selectedDistrict === "Dhalai" && (
							<>
								<li>Rustic Beauty</li>
								<li>Forest Areas</li>
								<li>Peaceful Countryside</li>
							</>
						)}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Tripura;
