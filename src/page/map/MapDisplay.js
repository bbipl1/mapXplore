import React, { useState } from "react";
import { Link } from "react-router-dom";
import { indiaStates } from "./data/indiaStates";

const MapDisplay = ({ mapType, image, description }) => {
	const [hoveredState, setHoveredState] = useState(null);
	const [selectedState, setSelectedState] = useState(null);

	const handleStateHover = (stateId) => {
		setHoveredState(stateId);
	};

	const handleStateClick = (stateId) => {
		setSelectedState(stateId === selectedState ? null : stateId);
	};

	const getStateById = (id) => {
		return indiaStates.find((state) => state.id === id);
	};

	return (
		<div className="flex flex-col lg:flex-row gap-6 w-full max-w-7xl mx-auto p-4">
			<div className="lg:w-2/3 bg-white rounded-lg shadow-md overflow-hidden">
				<div className="p-4 bg-blue-900 text-white">
					<h2 className="text-xl font-bold">{mapType} of India</h2>
					<p className="text-sm mt-1 text-gray-200">{description}</p>
				</div>
				<div className="p-4 bg-gray-50">
					<div className="flex flex-wrap gap-2">
						{indiaStates.map((state) => (
							<button
								key={state.id}
								className={`px-2 py-1 text-xs rounded transition-colors ${
									hoveredState === state.id ||
									selectedState === state.id
										? "bg-india-saffron text-blue-900"
										: "bg-gray-200 text-gray-700 hover:bg-gray-300"
								}`}
								onMouseEnter={() => handleStateHover(state.id)}
								onMouseLeave={() => setHoveredState(null)}
								onClick={() => handleStateClick(state.id)}
							>
								{state.name}
							</button>
						))}
					</div>
				</div>
				<div className="relative p-4 bg-white border-b border-gray-200">
					<img
						src={image}
						alt={`${mapType} of India`}
						className="w-full h-auto object-contain"
					/>

					{/* Interactive overlay would go here in a production app */}
					{/* This would use SVG paths or image maps for actual state boundaries */}
					<div className="absolute top-4 left-4 bg-white bg-opacity-75 p-2 rounded shadow text-sm">
						<p>Hover over a state to see details</p>
					</div>
				</div>
			</div>

			<div className="lg:w-1/3 bg-white rounded-lg shadow-md overflow-hidden">
				<div className="p-4 bg-green-500 text-white">
					<h2 className="text-xl font-bold">State Information</h2>
				</div>
				<div className="p-4">
					{selectedState || hoveredState ? (
						<StateInfo
							state={getStateById(selectedState || hoveredState)}
						/>
					) : (
						<div className="text-center py-8">
							<p className="text-gray-500">
								Select a state to view details
							</p>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

const StateInfo = ({ state }) => {
	if (!state) return null;

	return (
		<div className="animate-fadeIn">
			<div className="flex items-center gap-4 mb-4">
				<h3 className="text-2xl font-bold text-india-navy">
					{state.name}
				</h3>
			</div>

			<img
				src={state.image}
				alt={state.name}
				className="w-full h-40 object-contain mb-4"
			/>

			<div className="space-y-2 text-sm">
				<div className="flex justify-between">
					<span className="font-semibold">Capital:</span>
					<span>{state.capital}</span>
				</div>
				<div className="flex justify-between">
					<span className="font-semibold">Population:</span>
					<span>{state.population}</span>
				</div>
				<div className="flex justify-between">
					<span className="font-semibold">Area:</span>
					<span>{state.area}</span>
				</div>
				<div className="flex justify-between">
					<span className="font-semibold">Language:</span>
					<span>{state.language}</span>
				</div>
			</div>

			<p className="mt-4 text-sm text-gray-700">{state.description}</p>

			<div className="mt-4">
				<Link
					to={`/state/${state.id}`}
					className="block w-full py-2 text-center bg-[#F4A300] text-india-navy font-medium rounded hover:bg-opacity-90 transition-colors"
				>
					View Detailed Map
				</Link>
			</div>
		</div>
	);
};

export default MapDisplay;
