import React, { useState } from "react";

const TamilNadu = () => {
	const districts = [
		"Chennai",
		"Coimbatore",
		"Madurai",
		"Tiruchirappalli",
		"Salem",
		"Tirunelveli",
		"Erode",
		"Tiruppur",
	];

	const districtInfo = {
		Chennai: `The capital city, known for its bustling metropolitan vibe, Marina Beach, historic Fort St. George, and vibrant cultural scene.`,
		Coimbatore: `Often called the Manchester of South India, renowned for its textile industry, pleasant weather, and proximity to the Western Ghats.`,
		Madurai: `Famous for the Meenakshi Amman Temple, ancient heritage, and a rich history that blends tradition with modernity.`,
		Tiruchirappalli: `An ancient city with iconic landmarks like the Rockfort Temple and renowned for its historical significance and temples.`,
		Salem: `Known for its steel and textile industries, nestled among hills and offering a blend of urban and natural scenery.`,
		Tirunelveli: `Celebrated for its magnificent temples, waterfalls, and a deep-rooted cultural heritage.`,
		Erode: `A key hub for agriculture and textiles, known for its handloom industry and regional commerce.`,
		Tiruppur: `An emerging industrial powerhouse famed for its textile exports and vibrant market scenes.`,
	};

	const [selectedDistrict, setSelectedDistrict] = useState("Chennai");

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
						src={require("../../assets/State/TamilNadu/TamilNadu.jpg")}
						alt="Tamil Nadu"
						className="w-full h-full object-contain rounded-lg shadow-md"
					/>
				</div>

				{/* State Info Section */}
				<section>
					<h1 className="text-4xl font-bold text-[#2E3A59] mb-4">
						Tamil Nadu
					</h1>
					<p className="text-lg leading-7">
						Located in the southern tip of India, Tamil Nadu is
						famed for its rich Dravidian heritage, ancient temples,
						bustling urban centers, and picturesque landscapes from
						coastal plains to lush hills.
					</p>
				</section>

				{/* Quick Facts */}
				<section className="mb-10">
					<h2 className="text-2xl font-semibold text-[#2E3A59] mb-3">
						Quick Facts
					</h2>
					<ul className="list-disc list-inside space-y-1">
						<li>
							<strong>Capital:</strong> Chennai
						</li>
						<li>
							<strong>Area:</strong> 130,058 sq km
						</li>
						<li>
							<strong>Population:</strong> ~72 million (2011
							Census)
						</li>
						<li>
							<strong>Official Language:</strong> Tamil
						</li>
						<li>
							<strong>State Animal:</strong> Nilgiri Tahr
						</li>
						<li>
							<strong>State Bird:</strong> Emerald Dove
						</li>
					</ul>
				</section>

				{/* Tourism */}
				<section className="mb-10">
					<h2 className="text-2xl font-semibold text-[#2E3A59] mb-3">
						Tourism
					</h2>
					<p className="text-lg leading-7 mb-2">
						Tamil Nadu draws visitors with its extraordinary mix of:
					</p>
					<ul className="list-disc list-inside space-y-1">
						<li>Ancient temples such as Meenakshi Amman Temple</li>
						<li>Bustling urban experiences in Chennai</li>
						<li>Heritage sites and cultural festivals</li>
						<li>
							Scenic coastal stretches along the Bay of Bengal
						</li>
						<li>Hill stations in the Western Ghats</li>
					</ul>
				</section>

				{/* Geography & Climate */}
				<section className="mb-10">
					<h2 className="text-2xl font-semibold text-[#2E3A59] mb-3">
						Geography & Climate
					</h2>
					<p className="text-lg leading-7">
						From the fertile coastal plains to the hilly terrains of
						the Western Ghats, Tamil Nadu features a diverse
						geography. The climate is typically tropical with hot
						summers, moderate winters, and seasonal monsoons.
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
								<li>Chennai International Airport</li>
								<li>Coimbatore International Airport</li>
							</ul>
						</div>
						<div>
							<h3 className="font-semibold text-lg">Rail</h3>
							<ul className="list-disc list-inside">
								<li>
									Major Junctions: Chennai Central, Madurai
									Junction
								</li>
								<li>Extensive regional rail network</li>
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
						<li>Unicameral Legislature (234 seats)</li>
						<li>
							Numerous districts and regional administrative units
						</li>
						<li>High Court: Madras High Court (Chennai)</li>
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
						{selectedDistrict === "Chennai" && (
							<>
								<li>Marina Beach</li>
								<li>Fort St. George</li>
								<li>Kapaleeshwarar Temple</li>
							</>
						)}
						{selectedDistrict === "Coimbatore" && (
							<>
								<li>Textile Markets</li>
								<li>Marudamalai Temple</li>
								<li>Western Ghats views</li>
							</>
						)}
						{selectedDistrict === "Madurai" && (
							<>
								<li>Meenakshi Amman Temple</li>
								<li>Thirumalai Nayakkar Palace</li>
								<li>Vibrant street bazaars</li>
							</>
						)}
						{selectedDistrict === "Tiruchirappalli" && (
							<>
								<li>Rockfort Temple</li>
								<li>Historic landmarks</li>
								<li>Temple architecture</li>
							</>
						)}
						{selectedDistrict === "Salem" && (
							<>
								<li>Yercaud nearby</li>
								<li>Kiliyur Falls</li>
								<li>Industrial hubs</li>
							</>
						)}
						{selectedDistrict === "Tirunelveli" && (
							<>
								<li>Nellaiappar Temple</li>
								<li>Courtallam Falls</li>
								<li>Rich cultural heritage</li>
							</>
						)}
						{selectedDistrict === "Erode" && (
							<>
								<li>Handloom Industry</li>
								<li>Agricultural heritage</li>
								<li>Textile markets</li>
							</>
						)}
						{selectedDistrict === "Tiruppur" && (
							<>
								<li>Textile Export Hub</li>
								<li>Vibrant Markets</li>
								<li>Rapid industrial growth</li>
							</>
						)}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default TamilNadu;
