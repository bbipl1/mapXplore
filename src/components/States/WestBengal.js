import React, { useState } from "react";

const WestBengal = () => {
	const districts = [
		"Kolkata",
		"Howrah",
		"Darjeeling",
		"Siliguri",
		"Durgapur",
		"Asansol",
		"Burdwan",
		"Kharagpur",
	];

	const districtInfo = {
		Kolkata: `The cultural capital known for its literary heritage, colonial architecture, and vibrant arts scene.`,
		Howrah: `Famous for its massive railway junction and bustling industrial zones, serving as Kolkata's twin city.`,
		Darjeeling: `Renowned for its tea gardens, panoramic Himalayan views, and the historic Darjeeling Himalayan Railway.`,
		Siliguri: `A major gateway to the Northeast with vibrant markets and a strategic transportation hub.`,
		Durgapur: `An industrial town with modern infrastructure, playing a key role in regional commerce.`,
		Asansol: `Known for its coal mining and steel production industries, with a rich working-class heritage.`,
		Burdwan: `Steeped in history with cultural contributions and significant agricultural produce.`,
		Kharagpur: `Famous for its premier technological institute and strong academic reputation.`,
	};

	const [selectedDistrict, setSelectedDistrict] = useState("Kolkata");

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
						src={require("../../assets/State/WestBengal/WestBengal.jpg")}
						alt="West Bengal"
						className="w-full h-full object-contain rounded-lg shadow-md"
					/>
				</div>

				{/* State Info Section */}
				<section>
					<h1 className="text-4xl font-bold text-[#2E3A59] mb-4">
						West Bengal
					</h1>
					<p className="text-lg leading-7">
						West Bengal in eastern India is celebrated for its rich
						cultural legacy, literary traditions, and scenic beauty,
						from the urban vibrancy of Kolkata to the serene tea
						gardens of the hills.
					</p>
				</section>

				{/* Quick Facts */}
				<section className="mb-10">
					<h2 className="text-2xl font-semibold text-[#2E3A59] mb-3">
						Quick Facts
					</h2>
					<ul className="list-disc list-inside space-y-1">
						<li>
							<strong>Capital:</strong> Kolkata
						</li>
						<li>
							<strong>Area:</strong> 88,752 sq km
						</li>
						<li>
							<strong>Population:</strong> ~91 million (2011
							Census)
						</li>
						<li>
							<strong>Official Language:</strong> Bengali, English
						</li>
					</ul>
				</section>

				{/* Tourism */}
				<section className="mb-10">
					<h2 className="text-2xl font-semibold text-[#2E3A59] mb-3">
						Tourism
					</h2>
					<p className="text-lg leading-7 mb-2">
						West Bengal offers an eclectic mix of cultural,
						historical, and natural attractions.
					</p>
					<ul className="list-disc list-inside space-y-1">
						<li>Victoria Memorial & Howrah Bridge</li>
						<li>Tea Gardens of Darjeeling</li>
						<li>Sundarbans Mangroves</li>
					</ul>
				</section>

				{/* Geography & Climate */}
				<section className="mb-10">
					<h2 className="text-2xl font-semibold text-[#2E3A59] mb-3">
						Geography & Climate
					</h2>
					<p className="text-lg leading-7">
						Ranging from fertile plains to high hill regions, West
						Bengal experiences a tropical wet-dry climate in the
						plains and a temperate climate in the hills.
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
									Netaji Subhas Chandra Bose International
									Airport, Kolkata
								</li>
							</ul>
						</div>
						<div>
							<h3 className="font-semibold text-lg">Rail</h3>
							<ul className="list-disc list-inside">
								<li>Kolkata and Howrah Railway Stations</li>
								<li>Extensive suburban rail system</li>
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
						<li>Divided into multiple administrative districts</li>
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
						{selectedDistrict === "Kolkata" && (
							<>
								<li>Cultural Hotspots</li>
								<li>Colonial Architecture</li>
								<li>Literary Heritage</li>
							</>
						)}
						{selectedDistrict === "Howrah" && (
							<>
								<li>Major Railway Junction</li>
								<li>Industrial Hubs</li>
								<li>Riverfront Areas</li>
							</>
						)}
						{selectedDistrict === "Darjeeling" && (
							<>
								<li>Tea Gardens</li>
								<li>Himalayan Views</li>
								<li>Heritage Railway</li>
							</>
						)}
						{selectedDistrict === "Siliguri" && (
							<>
								<li>Gateway to the Northeast</li>
								<li>Vibrant Markets</li>
								<li>Transport Hub</li>
							</>
						)}
						{selectedDistrict === "Durgapur" && (
							<>
								<li>Industrial Infrastructure</li>
								<li>Modern Developments</li>
								<li>Urban Planning</li>
							</>
						)}
						{selectedDistrict === "Asansol" && (
							<>
								<li>Coal Mining</li>
								<li>Steel Production</li>
								<li>Working-class Culture</li>
							</>
						)}
						{selectedDistrict === "Burdwan" && (
							<>
								<li>Historical Significance</li>
								<li>Agricultural Richness</li>
								<li>Cultural Festivals</li>
							</>
						)}
						{selectedDistrict === "Kharagpur" && (
							<>
								<li>Academic Excellence</li>
								<li>Technological Hub</li>
								<li>Innovative Spirit</li>
							</>
						)}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default WestBengal;
