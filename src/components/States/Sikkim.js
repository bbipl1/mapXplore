import React, { useState } from "react";

const Sikkim = () => {
	const districts = [
		"East Sikkim",
		"West Sikkim",
		"North Sikkim",
		"South Sikkim",
	];

	const districtInfo = {
		"East Sikkim": `Home to Gangtok, the state capital, this district is known for its bustling markets, monasteries like Rumtek, and cultural heritage.`,
		"West Sikkim": `Known for its serene landscapes and secluded valleys, offering a quieter glimpse into Sikkim's natural beauty.`,
		"North Sikkim": `A remote region famous for high-altitude treks, stunning Himalayan vistas, and landmarks like Gurudongmar Lake.`,
		"South Sikkim": `Characterized by lush valleys and diverse communities, with a pleasant climate and rich local traditions.`,
	};

	const [selectedDistrict, setSelectedDistrict] = useState("East Sikkim");

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
						src={require("../../assets/State/Sikkim/Sikkim.jpg")}
						alt="Sikkim"
						className="w-full h-full object-cover rounded-lg shadow-md"
					/>
				</div>

				{/* State Info Section */}
				<section>
					<h1 className="text-4xl font-bold text-[#2E3A59] mb-4">
						Sikkim
					</h1>
					<p className="text-lg leading-7">
						Nestled in the Himalayas, Sikkim is known for its
						breathtaking mountain landscapes, vibrant Buddhist
						culture, and pristine natural beauty. This small state
						offers a unique blend of adventure and serenity.
					</p>
				</section>

				{/* Quick Facts */}
				<section className="mb-10">
					<h2 className="text-2xl font-semibold text-[#2E3A59] mb-3">
						Quick Facts
					</h2>
					<ul className="list-disc list-inside space-y-1">
						<li>
							<strong>Capital:</strong> Gangtok
						</li>
						<li>
							<strong>Area:</strong> 7,096 sq km
						</li>
						<li>
							<strong>Population:</strong> ~610,000 (2011 Census)
						</li>
						<li>
							<strong>Official Language:</strong> English, Nepali,
							Bhutia, Lepcha
						</li>
						<li>
							<strong>State Animal:</strong> Red Panda
						</li>
						<li>
							<strong>State Bird:</strong> Blood Pheasant
						</li>
					</ul>
				</section>

				{/* Tourism */}
				<section className="mb-10">
					<h2 className="text-2xl font-semibold text-[#2E3A59] mb-3">
						Tourism
					</h2>
					<p className="text-lg leading-7 mb-2">
						Sikkim offers adventure and culture with attractions
						like:
					</p>
					<ul className="list-disc list-inside space-y-1">
						<li>Rumtek Monastery & other Buddhist sites</li>
						<li>Majestic views of Kanchenjunga</li>
						<li>Tsomgo Lake & Gurudongmar Lake</li>
						<li>Hot springs at Yumthang Valley</li>
						<li>Scenic mountain treks</li>
					</ul>
				</section>

				{/* Geography & Climate */}
				<section className="mb-10">
					<h2 className="text-2xl font-semibold text-[#2E3A59] mb-3">
						Geography & Climate
					</h2>
					<p className="text-lg leading-7">
						Sikkim’s terrain ranges from subtropical valleys to
						alpine heights with climate varying from mild summers in
						the lower regions to harsh winters in the high
						altitudes.
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
								<li>Nearest Airport: Bagdogra</li>
							</ul>
						</div>
						<div>
							<h3 className="font-semibold text-lg">Rail</h3>
							<ul className="list-disc list-inside">
								<li>Nearest Railway Station: New Jalpaiguri</li>
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
						<li>Unicameral Legislature (32 seats)</li>
						<li>Divisions: 4 districts</li>
						<li>High Court: Sikkim High Court (Gangtok)</li>
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
						{selectedDistrict === "East Sikkim" && (
							<>
								<li>Gangtok City</li>
								<li>Rumtek Monastery</li>
								<li>Enchey Monastery</li>
							</>
						)}
						{selectedDistrict === "North Sikkim" && (
							<>
								<li>Gurudongmar Lake</li>
								<li>High-altitude Treks</li>
								<li>Scenic Himalayan views</li>
							</>
						)}
						{selectedDistrict === "West Sikkim" && (
							<>
								<li>Serene Valleys</li>
								<li>Rural charm</li>
								<li>Natural landscapes</li>
							</>
						)}
						{selectedDistrict === "South Sikkim" && (
							<>
								<li>Lush Terrains</li>
								<li>Diverse Cultural Heritage</li>
								<li>Milder Climate</li>
							</>
						)}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Sikkim;
