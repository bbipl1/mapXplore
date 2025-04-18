import React, { useState } from "react";

const Uttarakhand = () => {
	const districts = ["Dehradun", "Nainital", "Haridwar", "Chamoli", "Almora"];

	const districtInfo = {
		Dehradun: `The capital region noted for its pleasant climate, educational institutions, and gateways to hill stations.`,
		Nainital: `A famed hill station recognized for its shimmering lake and colonial charm.`,
		Haridwar: `One of India's holiest cities where pilgrims flock to the sacred Ganges.`,
		Chamoli: `Offers rugged Himalayan landscapes, adventure treks, and spiritual sites.`,
		Almora: `Known for its rich cultural legacy, panoramic mountain views, and serene environment.`,
	};

	const [selectedDistrict, setSelectedDistrict] = useState("Dehradun");

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
						src={require("../../assets/State/Uttarakhand/Uttarakhand.jpg")}
						alt="Uttarakhand"
						className="w-full h-full object-contain rounded-lg shadow-md"
					/>
				</div>

				{/* State Info Section */}
				<section>
					<h1 className="text-4xl font-bold text-[#2E3A59] mb-4">
						Uttarakhand
					</h1>
					<p className="text-lg leading-7">
						Nestled in the Himalayas, Uttarakhand is renowned for
						its spiritual centers, breath­taking landscapes, and
						adventure activities amidst pristine nature.
					</p>
				</section>

				{/* Quick Facts */}
				<section className="mb-10">
					<h2 className="text-2xl font-semibold text-[#2E3A59] mb-3">
						Quick Facts
					</h2>
					<ul className="list-disc list-inside space-y-1">
						<li>
							<strong>Capital:</strong> Dehradun
						</li>
						<li>
							<strong>Area:</strong> 53,483 sq km
						</li>
						<li>
							<strong>Population:</strong> ~10 million
						</li>
						<li>
							<strong>Official Language:</strong> Hindi, English
						</li>
					</ul>
				</section>

				{/* Tourism */}
				<section className="mb-10">
					<h2 className="text-2xl font-semibold text-[#2E3A59] mb-3">
						Tourism
					</h2>
					<p className="text-lg leading-7 mb-2">
						Uttarakhand is famed for its pilgrimage sites, hill
						stations, and adventure tourism.
					</p>
					<ul className="list-disc list-inside space-y-1">
						<li>Har Ki Pauri in Haridwar</li>
						<li>Nainital Lake</li>
						<li>Jim Corbett National Park</li>
					</ul>
				</section>

				{/* Geography & Climate */}
				<section className="mb-10">
					<h2 className="text-2xl font-semibold text-[#2E3A59] mb-3">
						Geography & Climate
					</h2>
					<p className="text-lg leading-7">
						From the foothills to alpine peaks, Uttarakhand
						experiences a range of climates—from subtropical in the
						lower regions to frigid in the high mountains.
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
								<li>Jolly Grant Airport, Dehradun</li>
							</ul>
						</div>
						<div>
							<h3 className="font-semibold text-lg">Rail</h3>
							<ul className="list-disc list-inside">
								<li>Dehradun Railway Station</li>
								<li>Regional routes across hill regions</li>
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
							Divided into multiple districts for regional
							administration
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
						{selectedDistrict === "Dehradun" && (
							<>
								<li>Educational Hubs</li>
								<li>Scenic Valleys</li>
								<li>Gateway to Hill Stations</li>
							</>
						)}
						{selectedDistrict === "Nainital" && (
							<>
								<li>Lake District Charm</li>
								<li>Colonial Architecture</li>
								<li>Hiking Trails</li>
							</>
						)}
						{selectedDistrict === "Haridwar" && (
							<>
								<li>Spiritual Pilgrimage</li>
								<li>Ganga Aarti</li>
								<li>Cultural Heritage</li>
							</>
						)}
						{selectedDistrict === "Chamoli" && (
							<>
								<li>Himalayan Treks</li>
								<li>Adventure Sports</li>
								<li>Pristine Nature</li>
							</>
						)}
						{selectedDistrict === "Almora" && (
							<>
								<li>Local Art & Culture</li>
								<li>Mountain Views</li>
								<li>Peaceful Countryside</li>
							</>
						)}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Uttarakhand;
