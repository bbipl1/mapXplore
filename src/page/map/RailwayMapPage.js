import React from "react";
import MapDisplay from "./MapDisplay";
import { mapTypes } from "./data/indiaStates";

const RailwayMap = () => {
	const mapData = mapTypes.find((map) => map.id === "railway");

	return (
		<div className="min-h-screen bg-gray-50">
			<div className="py-8 bg-gradient-to-r from-blue-900 to-green-500 text-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<h1 className="text-3xl font-bold">Railway Map of India</h1>
					<p className="mt-2">
						Explore India's extensive railway network connecting
						cities and regions
					</p>
				</div>
			</div>

			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
				<MapDisplay
					mapType="Railway Map"
					image={mapData.image}
					description="This railway map shows India's extensive rail network, including major railway lines, junctions, and stations across the country."
				/>

				<div className="mt-8 bg-white p-6 rounded-lg shadow-md">
					<h2 className="text-xl font-bold text-india-navy mb-4">
						About the Railway Map
					</h2>
					<p className="text-gray-700">
						Indian Railways is one of the largest railway networks
						in the world, spanning over 67,000 kilometers and
						connecting cities, towns, and villages across the
						country. This railway map illustrates the extensive
						network of rail lines, major junctions, and stations
						throughout India.
					</p>
					<p className="text-gray-700 mt-4">
						Railways serve as the backbone of public transportation
						in India, carrying millions of passengers daily and
						facilitating the movement of goods. The network is
						divided into zones and divisions for efficient
						management and operation.
					</p>

					<div className="mt-6">
						<h3 className="font-semibold text-india-navy mb-2">
							Key Features on This Map:
						</h3>
						<ul className="list-disc pl-5 text-gray-700 space-y-1">
							<li>Major railway zones and divisions</li>
							<li>
								Broad gauge, meter gauge, and narrow gauge lines
							</li>
							<li>Important railway junctions</li>
							<li>
								Major railway stations in metropolitan cities
							</li>
							<li>High-speed corridors</li>
							<li>
								Railway connections to neighboring countries
							</li>
							<li>Suburban railway networks in major cities</li>
							<li>
								Famous railway routes like the Konkan Railway
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default RailwayMap;
