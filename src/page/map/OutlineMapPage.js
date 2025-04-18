import React from "react";
import MapDisplay from "./MapDisplay";
import { mapTypes } from "./data/indiaStates";

const OutlineMap = () => {
	const mapData = mapTypes.find((map) => map.id === "outline");

	return (
		<div className="min-h-screen bg-gray-50">
			<div className="py-8 bg-gradient-to-r from-blue-900 to-green-500 text-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<h1 className="text-3xl font-bold">Outline Map of India</h1>
					<p className="mt-2">
						View the outline boundaries of India's states and union
						territories
					</p>
				</div>
			</div>

			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
				<MapDisplay
					mapType="Outline Map"
					image={mapData.image}
					description="An outline map of India showing the boundaries of states and union territories"
				/>

				<div className="mt-8 bg-white p-6 rounded-lg shadow-md">
					<h2 className="text-xl font-bold text-blue-900 mb-4">
						About the Outline Map
					</h2>
					<p className="text-gray-700">
						The outline map of India displays the geographical
						boundaries of India's states and union territories. This
						type of map is often used in educational settings, for
						reference purposes, or as a base for thematic mapping.
						It offers a clear view of India's administrative
						divisions without additional geographical features or
						political annotations.
					</p>

					<div className="mt-6">
						<h3 className="font-semibold text-blue-900 mb-2">
							Map Features:
						</h3>
						<ul className="list-disc pl-5 text-gray-700 space-y-1">
							<li>
								Clear delineation of state and union territory
								boundaries
							</li>
							<li>Simplified map format for easy reference</li>
							<li>
								Suitable for educational purposes and base
								mapping
							</li>
							<li>
								Includes all 28 states and 8 union territories
							</li>
							<li>
								Shows India's international borders with
								neighboring countries
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default OutlineMap;
