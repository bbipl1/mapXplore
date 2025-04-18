import React from "react";
// import Navbar from '../components/Navbar';
import MapDisplay from "./MapDisplay";
import { mapTypes } from "./data/indiaStates";

const PoliticalMap = () => {
	const mapData = mapTypes.find((map) => map.id === "political");

	return (
		<div className="min-h-screen bg-gray-50">
			{/* <Navbar /> */}

			<div className="py-8 bg-gradient-to-r from-blue-900 to-green-500 text-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<h1 className="text-3xl font-bold">
						Political Map of India
					</h1>
					<p className="mt-2">
						Explore India's states, union territories, and their
						capitals
					</p>
				</div>
			</div>

			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
				<MapDisplay
					mapType="Political Map"
					image={mapData.image}
					description="This political map shows the administrative divisions of India, including its 28 states and 8 union territories, along with their capitals and major cities."
				/>

				<div className="mt-8 bg-white p-6 rounded-lg shadow-md">
					<h2 className="text-xl font-bold text-blue-900 mb-4">
						About the Political Map
					</h2>
					<p className="text-gray-700">
						The political map of India displays the country's
						administrative divisions, including states and union
						territories. India is a federal union comprising 28
						states and 8 union territories. States are administered
						by their elected governments, while union territories
						are ruled directly by the central government through
						appointed administrators.
					</p>
					<p className="text-gray-700 mt-4">
						The political map highlights state boundaries, capitals,
						and major cities. It is an essential resource for
						understanding India's administrative structure,
						electoral constituencies, and governance framework.
					</p>

					<div className="mt-6">
						<h3 className="font-semibold text-india-navy mb-2">
							Key Features on This Map:
						</h3>
						<ul className="list-disc pl-5 text-gray-700 space-y-1">
							<li>28 states with their capitals</li>
							<li>8 union territories</li>
							<li>International boundaries</li>
							<li>State boundaries</li>
							<li>National capital (New Delhi)</li>
							<li>State capitals and major cities</li>
						</ul>
					</div>
				</div>

				{/* <img
					src={mapData.image}
					alt="Political Map of India"
					className="w-full max-w-3xl rounded-lg shadow-md mt-8"
				/> */}
			</div>
		</div>
	);
};

export default PoliticalMap;
