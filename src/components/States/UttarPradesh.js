import React, { useState } from "react";

const UttarPradesh = () => {
	const districts = [
		"Lucknow",
		"Kanpur",
		"Agra",
		"Varanasi",
		"Noida",
		"Ghaziabad",
		"Prayagraj",
	];

	const districtInfo = {
		Lucknow: `The capital city renowned for its Nawabi architecture, rich cultural legacy, and vibrant culinary scene.`,
		Kanpur: `An industrial and commercial hub with a deep historical background and dynamic urban growth.`,
		Agra: `World-famous for the Taj Mahal and Mughal-era heritage, a top destination for history and architecture enthusiasts.`,
		Varanasi: `One of the oldest inhabited cities, a spiritual epicenter along the Ganges with vibrant rituals and traditions.`,
		Noida: `A modern city known for its IT industries, commercial centers, and rapid urban development.`,
		Ghaziabad: `An important industrial city experiencing fast-paced growth and modernization.`,
		Prayagraj: `Steeped in history and spirituality, known for its grand Kumbh Mela and the confluence of sacred rivers.`,
	};

	const [selectedDistrict, setSelectedDistrict] = useState("Lucknow");

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
						src={require("../../assets/State/UttarPradesh/UttarPradesh.jpg")}
						alt="Uttar Pradesh"
						className="w-full h-full object-contain rounded-lg shadow-md"
					/>
				</div>

				{/* State Info Section */}
				<section>
					<h1 className="text-4xl font-bold text-[#2E3A59] mb-4">
						Uttar Pradesh
					</h1>
					<p className="text-lg leading-7">
						Uttar Pradesh, located in northern India, is steeped in
						ancient history and spirituality. The state is home to
						iconic monuments, bustling cities, and revered
						pilgrimage sites.
					</p>
				</section>

				{/* Quick Facts */}
				<section className="mb-10">
					<h2 className="text-2xl font-semibold text-[#2E3A59] mb-3">
						Quick Facts
					</h2>
					<ul className="list-disc list-inside space-y-1">
						<li>
							<strong>Capital:</strong> Lucknow
						</li>
						<li>
							<strong>Area:</strong> 243,286 sq km
						</li>
						<li>
							<strong>Population:</strong> ~199 million (2011
							Census)
						</li>
						<li>
							<strong>Official Language:</strong> Hindi, Urdu
						</li>
					</ul>
				</section>

				{/* Tourism */}
				<section className="mb-10">
					<h2 className="text-2xl font-semibold text-[#2E3A59] mb-3">
						Tourism
					</h2>
					<p className="text-lg leading-7 mb-2">
						The state attracts visitors with a blend of historical
						monuments, sacred sites, and cultural festivities.
					</p>
					<ul className="list-disc list-inside space-y-1">
						<li>Taj Mahal in Agra</li>
						<li>Lucknow’s heritage bazaars</li>
						<li>Spiritual Ghats in Varanasi</li>
					</ul>
				</section>

				{/* Geography & Climate */}
				<section className="mb-10">
					<h2 className="text-2xl font-semibold text-[#2E3A59] mb-3">
						Geography & Climate
					</h2>
					<p className="text-lg leading-7">
						Characterized by fertile plains along the Ganges and a
						humid subtropical climate, Uttar Pradesh experiences hot
						summers, cool winters, and a monsoon season.
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
								<li>Chaudhary Charan Singh Airport, Lucknow</li>
							</ul>
						</div>
						<div>
							<h3 className="font-semibold text-lg">Rail</h3>
							<ul className="list-disc list-inside">
								<li>Lucknow, Kanpur, Varanasi Junctions</li>
								<li>Extensive rail network</li>
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
							Divided into multiple districts for effective
							governance
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
						{selectedDistrict === "Lucknow" && (
							<>
								<li>Historical Architecture</li>
								<li>Culinary Delights</li>
								<li>Heritage Markets</li>
							</>
						)}
						{selectedDistrict === "Kanpur" && (
							<>
								<li>Industrial Heritage</li>
								<li>Riverfront Areas</li>
								<li>Modern Developments</li>
							</>
						)}
						{selectedDistrict === "Agra" && (
							<>
								<li>Taj Mahal</li>
								<li>Mughal Monuments</li>
								<li>Heritage Walks</li>
							</>
						)}
						{selectedDistrict === "Varanasi" && (
							<>
								<li>Spiritual Ghats</li>
								<li>Cultural Rituals</li>
								<li>Ancient Temples</li>
							</>
						)}
						{selectedDistrict === "Noida" && (
							<>
								<li>IT & Commercial Hub</li>
								<li>Modern Infrastructure</li>
								<li>Planned Urban Layout</li>
							</>
						)}
						{selectedDistrict === "Ghaziabad" && (
							<>
								<li>Industrial Zones</li>
								<li>Rapid Urbanization</li>
								<li>Connectivity</li>
							</>
						)}
						{selectedDistrict === "Prayagraj" && (
							<>
								<li>Historical Confluences</li>
								<li>Religious Gatherings</li>
								<li>Rich Traditions</li>
							</>
						)}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default UttarPradesh;
