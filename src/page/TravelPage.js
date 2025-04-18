import React from "react";
import { motion } from "framer-motion";
import IndiaMap from "../assets/India.jpg";
import Sidebar from "../components/Sidebar";

const hotelsData = [
	{
		name: "The Taj Mahal Palace, Mumbai",
		description: "Iconic sea‑facing heritage hotel since 1903.",
	},
	{
		name: "Oberoi Udaivilas, Udaipur",
		description: "Palatial luxury on Lake Pichola’s banks.",
	},
	{
		name: "The Leela Palace, New Delhi",
		description:
			"Grand Mughal‑inspired architecture near diplomatic enclave.",
	},
	{
		name: "Taj Lake Palace, Udaipur",
		description: "Floating marble palace in the middle of Lake Pichola.",
	},
	{
		name: "The Oberoi Amarvilas, Agra",
		description: "Unobstructed views of the Taj Mahal from every room.",
	},
	{
		name: "Wildflower Hall, Shimla",
		description: "Himalayan retreat originally built in 1884.",
	},
	{
		name: "The Leela Kovalam, Kerala",
		description: "Clifftop resort overlooking the Arabian Sea.",
	},
	{
		name: "Rambagh Palace, Jaipur",
		description: "Former Maharaja’s residence turned luxury hotel.",
	},
	{
		name: "Taj Falaknuma Palace, Hyderabad",
		description: "19th‑century palace with Venetian chandeliers.",
	},
];

const HotelsPage = () => (
	<div className="flex min-h-screen bg-gray-100">
		<Sidebar />
		<div className="flex-1 p-6">
			<motion.div
				className="max-w-6xl mx-auto bg-white shadow-md rounded-lg p-6"
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
			>
				<motion.h1
					className="text-3xl font-bold text-center text-gray-800 mb-6"
					initial={{ opacity: 0, scale: 0.9 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.6 }}
				>
					Top Luxury Hotels in India
				</motion.h1>

				<motion.img
					src={IndiaMap}
					alt="India Map"
					className="w-full rounded-lg shadow-md mb-6"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1 }}
				/>

				<motion.p
					className="text-gray-700 mb-6"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.2, duration: 1 }}
				>
					A curated list of India’s most celebrated luxury hotels and
					palaces.
				</motion.p>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{hotelsData.map((hotel, idx) => (
						<motion.div
							key={idx}
							className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-lg shadow-sm cursor-pointer"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.4, delay: idx * 0.03 }}
							whileHover={{
								scale: 1.05,
								boxShadow: "0px 8px 20px rgba(0,0,0,0.15)",
							}}
						>
							<h2 className="text-lg font-semibold text-yellow-700">
								{hotel.name}
							</h2>
							<p className="text-gray-700">{hotel.description}</p>
						</motion.div>
					))}
				</div>
			</motion.div>
		</div>
	</div>
);

export default HotelsPage;
