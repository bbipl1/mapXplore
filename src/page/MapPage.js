import React from "react";
import { Link } from "react-router-dom";
import { mapTypes } from "./map/data/indiaStates";

const MapPage = () => {
	return (
		<div className="min-h-screen bg-gray-50">
			<div className="py-12 bg-gradient-to-b from-blue-900 to-green-500 text-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center">
						<h1 className="text-4xl font-bold mb-4">
							Maps of India
						</h1>
						<p className="text-xl max-w-3xl mx-auto">
							Explore detailed and interactive maps of India,
							featuring political boundaries, physical features,
							tourist spots, and transportation networks.
						</p>
					</div>
				</div>
			</div>

			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
				<h2 className="text-2xl font-bold mb-8 text-center text-blue-900">
					Discover Our Maps
				</h2>

				<div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
					{mapTypes.map((mapType) => (
						<Link
							key={mapType.id}
							to={`/maps/${mapType.id}`}
							className="group"
						>
							<div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105">
								<div className="aspect-w-16 aspect-h-9 relative">
									<img
										src={mapType.image}
										alt={mapType.name}
										className="w-full h-48 object-cover"
									/>
									<div className="absolute inset-0 bg-blue-900 bg-opacity-0 group-hover:bg-opacity-20 transition-opacity"></div>
								</div>
								<div className="p-4">
									<h3 className="font-bold text-lg text-blue-900">
										{mapType.name}
									</h3>
									<p className="text-sm text-gray-600 mt-1">
										{mapType.description}
									</p>
								</div>
							</div>
						</Link>
					))}

					<Link to="/interactive" className="group">
						<div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105">
							<div className="aspect-w-16 aspect-h-9 relative">
								<img
									src="https://www.mapsofindia.com/maps/india/india-map.jpg"
									alt="Interactive Map"
									className="w-full h-48 object-cover"
								/>
								<div className="absolute inset-0 bg-blue-900 bg-opacity-0 group-hover:bg-opacity-20 transition-opacity"></div>
							</div>
							<div className="p-4">
								<h3 className="font-bold text-lg text-blue-900">
									Interactive Map
								</h3>
								<p className="text-sm text-gray-600 mt-1">
									Explore India with our interactive SVG map
								</p>
							</div>
						</div>
					</Link>
				</div>

				<div className="mt-16 text-center">
					<h2 className="text-2xl font-bold mb-4 text-blue-900">
						About Maps of India
					</h2>
					<p className="max-w-3xl mx-auto text-gray-600">
						Our interactive maps provide comprehensive and accurate
						geographical information about India. Whether you're a
						student, researcher, tourist, or just curious about
						India's diverse landscape, our maps offer valuable
						insights into the country's political divisions,
						physical features, tourist destinations, and
						transportation networks.
					</p>
				</div>

				<div className="mt-12 bg-white rounded-lg shadow-md overflow-hidden">
					<div className="p-4 bg-yellow-500 text-blue-900">
						{" "}
						{/* Change this to your desired color */}
						<h2 className="text-xl font-bold">
							Quick Facts About India
						</h2>
					</div>
					<div className="p-4">
						<div className="grid md:grid-cols-2 gap-4 text-sm">
							<div className="flex flex-col">
								<div className="font-semibold mb-1">
									Full Name:
								</div>
								<div>Republic of India (Bharat Ganarajya)</div>
							</div>
							<div className="flex flex-col">
								<div className="font-semibold mb-1">
									Capital:
								</div>
								<div>New Delhi</div>
							</div>
							<div className="flex flex-col">
								<div className="font-semibold mb-1">
									Population:
								</div>
								<div>Approximately 1.4 billion (2023)</div>
							</div>
							<div className="flex flex-col">
								<div className="font-semibold mb-1">Area:</div>
								<div>3,287,263 square kilometers</div>
							</div>
							<div className="flex flex-col">
								<div className="font-semibold mb-1">
									Languages:
								</div>
								<div>
									Hindi and English (official), plus 22
									scheduled languages
								</div>
							</div>
							<div className="flex flex-col">
								<div className="font-semibold mb-1">
									States and Union Territories:
								</div>
								<div>28 states and 8 union territories</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<footer className="bg-blue-900 text-white py-8">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center">
						<p>
							&copy; {new Date().getFullYear()} Maps of India. All
							rights reserved.
						</p>
						<p className="text-sm mt-2">
							Data sourced from official government records and
							publications.
						</p>
					</div>
				</div>
			</footer>
		</div>
	);
};

export default MapPage;
