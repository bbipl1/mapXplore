import React from "react";
import MapDisplay from "./MapDisplay";
import { mapTypes } from "./data/indiaStates";
// import map from "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Physical_Map_of_India.jpg/975px-Physical_Map_of_India.jpg";

const PhysicalMap = () => {
	const mapData = mapTypes.find((map) => map.id === "physical");

	return (
		<div className="min-h-screen bg-gray-50">
			<div className="py-8 bg-gradient-to-r from-blue-900 to-green-500 text-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<h1 className="text-3xl font-bold">
						Physical Map of India
					</h1>
					<p className="mt-2">
						Explore India's diverse geography, mountains, rivers,
						and plateaus
					</p>
				</div>
			</div>

			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
				<MapDisplay
					mapType="Physical Map"
					image={mapData.image}
					description="This physical map displays the geographical features of India, including mountains, plains, plateaus, rivers, and water bodies."
				/>

				<div className="mt-8 bg-white p-6 rounded-lg shadow-md">
					<h2 className="text-xl font-bold text-blue-900 mb-4">
						About the Physical Map
					</h2>
					<p className="text-gray-700">
						The physical map of India showcases the diverse
						geographical features that characterize the Indian
						subcontinent. India's geography is marked by the mighty
						Himalayan range in the north, the Indo-Gangetic plains,
						the peninsular plateau region, coastal plains, and
						numerous river systems.
					</p>
					<p className="text-gray-700 mt-4">
						This map illustrates elevation levels, mountain ranges,
						river systems, plateaus, plains, and other natural
						features that shape India's landscape and influence its
						climate, agriculture, and human settlement patterns.
					</p>

					<div className="mt-6">
						<h3 className="font-semibold text-blue-900 mb-2">
							Key Features on This Map:
						</h3>
						<ul className="list-disc pl-5 text-gray-700 space-y-1">
							<li>Himalayan mountain range in the north</li>
							<li>Indo-Gangetic plains</li>
							<li>
								Deccan Plateau in central and southern India
							</li>
							<li>Western and Eastern Ghats</li>
							<li>
								Major river systems including the Ganges,
								Brahmaputra, and Godavari
							</li>
							<li>Desert regions like the Thar Desert</li>
							<li>Natural lakes and water bodies</li>
							<li>
								Coastal plains along the Arabian Sea and Bay of
								Bengal
							</li>
						</ul>
					</div>
				</div>

				<img
					src={mapData.image}
					alt="Political Map of India"
					className="w-full max-w-3xl rounded-lg shadow-md mt-8"
				/>
			</div>
		</div>
	);
};

export default PhysicalMap;
