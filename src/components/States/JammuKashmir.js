import React, { useState } from "react";

const JammuAndKashmir = () => {
	const districts = [
		"Srinagar",
		"Jammu",
		"Anantnag",
		"Baramulla",
		"Pulwama",
		"Udhampur",
		"Kathua",
		"Budgam",
	];

	const districtInfo = {
		Srinagar: `The summer capital of J&K, famous for Dal Lake, Mughal gardens, and houseboats. It's a cultural and tourism hub.`,
		Jammu: `The winter capital, known for the Vaishno Devi temple and vibrant Dogra culture.`,
		Anantnag: `A scenic district with lush meadows and important religious sites, serving as a gateway to South Kashmir.`,
		Baramulla: `Rich in natural beauty, Baramulla offers snowy landscapes and a peaceful atmosphere.`,
		Pulwama: `An agricultural heartland known for saffron fields and apple orchards.`,
		Udhampur: `A hilly district with army establishments, famous for its natural landscapes and Devika river.`,
		Kathua: `Southernmost district, noted for industrial areas and religious shrines.`,
		Budgam: `Located in central Kashmir, known for Yusmarg meadows and traditional Kashmiri life.`,
	};

	const [selectedDistrict, setSelectedDistrict] = useState("Srinagar");

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
				<div className="w-full h-64 sm:h-96">
					<img
						src={require("../../assets/State/JammuKashmir/JammuKashmir.jpg")}
						alt="Jammu and Kashmir"
						className="w-full h-full object-contain rounded-lg shadow-md"
					/>
				</div>

				<section>
					<h1 className="text-4xl font-bold text-[#2E3A59] mb-4">
						Jammu and Kashmir
					</h1>
					<p className="text-lg leading-7">
						Jammu and Kashmir, a union territory since 2019, is
						renowned for its breathtaking landscapes, religious
						significance, and cultural diversity. It includes the
						valleys of Kashmir and the plains of Jammu, offering a
						blend of Himalayan beauty and spiritual tranquility.
					</p>
				</section>

				<section className="mb-10">
					<h2 className="text-2xl font-semibold text-[#2E3A59] mb-3">
						Quick Facts
					</h2>
					<ul className="list-disc list-inside space-y-1">
						<li>
							<strong>Summer Capital:</strong> Srinagar
						</li>
						<li>
							<strong>Winter Capital:</strong> Jammu
						</li>
						<li>
							<strong>Area:</strong> 55,538 sq km
						</li>
						<li>
							<strong>Population:</strong> ~12.5 million (2011
							Census)
						</li>
						<li>
							<strong>Languages:</strong> Kashmiri, Dogri, Urdu
						</li>
						<li>
							<strong>State Animal:</strong> Hangul (Kashmir Stag)
						</li>
					</ul>
				</section>

				<section className="mb-10">
					<h2 className="text-2xl font-semibold text-[#2E3A59] mb-3">
						Tourism
					</h2>
					<p className="text-lg leading-7 mb-2">
						Jammu and Kashmir is a top destination for nature and
						spiritual tourism:
					</p>
					<ul className="list-disc list-inside space-y-1">
						<li>Dal Lake and Houseboats in Srinagar</li>
						<li>Vaishno Devi Shrine near Katra</li>
						<li>Gulmarg, Sonamarg, Pahalgam</li>
						<li>Mughal Gardens and Tulip Festival</li>
					</ul>
				</section>

				<section className="mb-10">
					<h2 className="text-2xl font-semibold text-[#2E3A59] mb-3">
						Geography & Climate
					</h2>
					<p className="text-lg leading-7">
						The region is mountainous, with snow-capped peaks,
						valleys, rivers, and forests. It experiences cold
						winters and mild summers in the valley, while Jammu
						enjoys subtropical weather.
					</p>
				</section>

				<section className="mb-10">
					<h2 className="text-2xl font-semibold text-[#2E3A59] mb-3">
						Transport
					</h2>
					<div className="grid md:grid-cols-2 gap-4">
						<div>
							<h3 className="font-semibold text-lg">Air</h3>
							<ul className="list-disc list-inside">
								<li>Srinagar & Jammu Airports</li>
							</ul>
						</div>
						<div>
							<h3 className="font-semibold text-lg">Rail</h3>
							<ul className="list-disc list-inside">
								<li>Jammu Tawi Station</li>
								<li>Ongoing rail projects to Kashmir Valley</li>
							</ul>
						</div>
					</div>
				</section>

				<section className="mb-10">
					<h2 className="text-2xl font-semibold text-[#2E3A59] mb-3">
						Government
					</h2>
					<ul className="list-disc list-inside">
						<li>Union Territory with Legislative Assembly</li>
						<li>
							Divided into districts for efficient administration
						</li>
						<li>High Court: Jammu and Kashmir High Court</li>
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
						{selectedDistrict === "Srinagar" && (
							<>
								<li>Dal Lake</li>
								<li>Mughal Gardens</li>
								<li>Houseboats</li>
							</>
						)}
						{selectedDistrict === "Jammu" && (
							<>
								<li>Vaishno Devi Temple</li>
								<li>Dogra Culture</li>
								<li>Raghunath Temple</li>
							</>
						)}
						{selectedDistrict === "Anantnag" && (
							<>
								<li>Pahalgam</li>
								<li>Martand Temple</li>
								<li>Scenic Meadows</li>
							</>
						)}
						{selectedDistrict === "Baramulla" && (
							<>
								<li>Gulmarg</li>
								<li>Snow-Capped Mountains</li>
								<li>Peaceful Vistas</li>
							</>
						)}
						{selectedDistrict === "Pulwama" && (
							<>
								<li>Saffron Fields</li>
								<li>Apple Orchards</li>
								<li>Rural Charm</li>
							</>
						)}
						{selectedDistrict === "Udhampur" && (
							<>
								<li>Devika River</li>
								<li>Hill Terrain</li>
								<li>Military Cantonment</li>
							</>
						)}
						{selectedDistrict === "Kathua" && (
							<>
								<li>Industrial Growth</li>
								<li>Sacred Shrines</li>
								<li>Punjab Border</li>
							</>
						)}
						{selectedDistrict === "Budgam" && (
							<>
								<li>Yusmarg</li>
								<li>Traditional Culture</li>
								<li>Central Location</li>
							</>
						)}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default JammuAndKashmir;
