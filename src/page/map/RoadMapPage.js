import React from "react";
import MapDisplay from "./MapDisplay";
import { mapTypes } from "./data/indiaStates";

const RoadMap = () => {
	const mapData = mapTypes.find((map) => map.id === "road");
	return (
		<div className="min-h-screen bg-gray-50">
			<div className="py-8 bg-gradient-to-r from-blue-900 to-green-500 text-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<h1 className="text-3xl font-bold">Road Map of India</h1>
					<p className="mt-2">
						Explore India's national highways, expressways, and
						major road networks
					</p>
				</div>
			</div>

			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
				<MapDisplay
					mapType="Road Map"
					image={mapData.image}
					description="A detailed map showing India's national highways, expressways, and major road networks"
				/>

				<div className="mt-8 bg-white p-6 rounded-lg shadow-md">
					<h2 className="text-xl font-bold text-india-navy mb-4">
						About the Road Map
					</h2>
					<p className="text-gray-700">
						The road map of India illustrates the country's
						extensive network of highways, expressways, and major
						roads connecting its states, cities, and towns. India's
						road network is one of the largest in the world,
						spanning over 5.8 million kilometers. The National
						Highways Authority of India (NHAI) manages the national
						highway network, which connects major cities and
						economic centers across the country.
					</p>

					<div className="mt-6">
						<h3 className="font-semibold text-india-navy mb-2">
							Map Features:
						</h3>
						<ul className="list-disc pl-5 text-gray-700 space-y-1">
							<li>National Highways (NH) with route numbers</li>
							<li>Expressways and major motorways</li>
							<li>State highways and important district roads</li>
							<li>Major cities and transport hubs</li>
							<li>
								Border crossings and international connections
							</li>
							<li>Distance indicators between major cities</li>
						</ul>
					</div>

					<div className="mt-6">
						<h3 className="font-semibold text-india-navy mb-2">
							Key Road Projects:
						</h3>
						<ul className="list-disc pl-5 text-gray-700 space-y-1">
							<li>
								Golden Quadrilateral: Connecting Delhi, Mumbai,
								Chennai, and Kolkata
							</li>
							<li>
								North-South Corridor: From Srinagar to
								Kanyakumari
							</li>
							<li>
								East-West Corridor: From Silchar to Porbandar
							</li>
							<li>
								Mumbai-Delhi Expressway: One of the longest
								expressways in India
							</li>
							<li>
								Bharatmala Pariyojana: A massive highway
								development project
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default RoadMap;
