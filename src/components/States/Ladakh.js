import React, { useState } from "react";
import ladakhMap from "../../assets/State/Ladakh/ladakh.jpg"; // Replace with actual Ladakh map path

const districts = ["Leh", "Kargil"];

const Ladakh = () => {
	const [selectedDistrict, setSelectedDistrict] = useState("Leh");

	return (
		<div className="flex max-w-6xl mx-auto p-6">
			{/* Sidebar */}
			<aside className="w-1/4 pr-6">
				<h2 className="text-xl font-semibold mb-4">Districts</h2>
				<ul className="space-y-2">
					{districts.map((district) => (
						<li
							key={district}
							className={`cursor-pointer px-3 py-2 rounded-lg hover:bg-blue-100 ${
								selectedDistrict === district
									? "bg-blue-200 font-semibold"
									: ""
							}`}
							onClick={() => setSelectedDistrict(district)}
						>
							{district}
						</li>
					))}
				</ul>
			</aside>

			{/* Main Content */}
			<main className="w-3/4">
				<h1 className="text-3xl font-bold mb-4 text-center">Ladakh</h1>

				<img
					src={ladakhMap}
					alt="Ladakh Map"
					className="rounded-lg shadow-md w-full mb-4"
				/>
				<p className="text-sm italic text-center text-gray-500 mb-8">
					Map showing major roads, railways, rivers, national
					highways, etc. <br />
					Disclaimer: All efforts have been made to make this image
					accurate. However Mapping Digiworld Pvt Ltd and its
					directors do not own any responsibility for the correctness
					or authenticity of the same.
				</p>

				<section className="space-y-6">
					<div>
						<h2 className="text-2xl font-semibold">About Ladakh</h2>
						<p>
							Ladakh was formed from the state of Jammu and
							Kashmir on October 31, 2019, following the
							abrogation of Article 370. It comprises two
							districts — <strong>Leh</strong> and{" "}
							<strong>Kargil</strong> — and is administered as a
							Union Territory directly by the central government.
						</p>
						<p>
							Ladakh has its own police force and receives direct
							funding from the Centre. It comes under the
							jurisdiction of the Jammu & Kashmir High Court and
							follows central civil service rules. The first
							Lieutenant Governor of Ladakh was Radha Krishna
							Mathur.
						</p>
					</div>

					<div>
						<h2 className="text-2xl font-semibold">
							Transportation
						</h2>
						<p>
							Ladakh has around 1,800 km of roads, of which 800 km
							are surfaced. The{" "}
							<strong>Kushok Bakula Rimpochee Airport</strong> in
							Leh connects Ladakh to Delhi and other major cities.
							Kargil also has a functioning airport.
						</p>
					</div>

					<div>
						<h2 className="text-2xl font-semibold">Quick Facts</h2>
						<ul className="list-disc list-inside">
							<li>Date of Formation: October 31, 2019</li>
							<li>Districts: Leh, Kargil</li>
							<li>
								Union Territory governed by: Ministry of Home
								Affairs
							</li>
							<li>Judiciary: Under Jammu & Kashmir High Court</li>
							<li>First LG: R.K. Mathur</li>
							<li>Key Airports: Leh, Kargil</li>
							<li>Languages: Ladakhi, Urdu, Hindi, English</li>
							<li>
								Famous for: Buddhist monasteries, mountains,
								lakes like Pangong Tso & Tso Moriri
							</li>
						</ul>
					</div>
				</section>
			</main>
		</div>
	);
};

export default Ladakh;
