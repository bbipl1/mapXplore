import React from "react";
import { motion } from "framer-motion";
import IndiaMap from "../assets/india_major_city.jpg";
import Sidebar from "../components/Sidebar";

const citiesData = [
	{ name: "Mumbai", description: "Financial capital of the country." },
	{
		name: "Delhi",
		description:
			"Political capital through antiquity, medieval and modern India.",
	},
	{
		name: "Kolkata",
		description:
			"Port city on the east coast; one of the most densely populated areas.",
	},
	{ name: "Chennai", description: "Hub of the Indian automobile industry." },
	{
		name: "Bengaluru",
		description:
			"Also known as India's Silicon Valley for its IT industry.",
	},
	{
		name: "Hyderabad",
		description:
			"Known for its old‑world nawabi culture and biotech industry.",
	},
	{
		name: "Jaipur",
		description: "The Pink City, famous for palaces and royal culture.",
	},
	{
		name: "Jabalpur",
		description: "Army headquarters for five central Indian states.",
	},
	{
		name: "Agra",
		description: "Home to the Taj Mahal; top tourist destination.",
	},
	{
		name: "Varanasi",
		description: "One of the oldest cities and major Hindu pilgrim spot.",
	},
	{
		name: "Lucknow",
		description: "Former cultural capital; famed for nawabi cuisine.",
	},
	{
		name: "Kanpur",
		description:
			"Center for heavy industry, technology and food processing.",
	},
	{
		name: "Allahabad",
		description: "Also called Prayag; city of prime ministers.",
	},
	{
		name: "Ahmedabad",
		description: "Textile city, known as the Manchester of the East.",
	},
	{
		name: "Chandigarh",
		description:
			"Planned city with the highest per capita income in India.",
	},
	{
		name: "Amritsar",
		description: "Home to the Golden Temple; top Sikh pilgrimage.",
	},
	{
		name: "Aizawl",
		description: "Largest city in Mizoram with 88% literacy.",
	},
	{
		name: "Bhopal",
		description: "One of India's greenest industrial cities.",
	},
	{
		name: "Bhubaneshwar",
		description: "City of temples; site of ancient Kalinga.",
	},
	{ name: "Bhilai", description: "India's steel city." },
	{ name: "Coimbatore", description: "Hub of the cotton textile industry." },
	{
		name: "Darjeeling",
		description: "Himalayan city famous for tea plantations.",
	},
	{ name: "Dehradun", description: "Capital of Uttarakhand; 89% literacy." },
	{
		name: "Faridabad",
		description: "Largest city in Haryana; known for its industries.",
	},
	{
		name: "Ghaziabad",
		description: "UP's most industrialized city; 93% literacy.",
	},
	{ name: "Noida", description: "One of UP's planned industrial cities." },
	{ name: "Guwahati", description: "Largest metro in northeast India." },
	{
		name: "Gwalior",
		description: "Historic city now a regional education hub.",
	},
	{
		name: "Gurgaon",
		description: "Millennial city with very high per capita income.",
	},
	{ name: "Haridwar", description: "Pilgrim city; venue of the Kumbh Mela." },
	{ name: "Imphal", description: "Capital of Manipur; 91% literacy." },
	{ name: "Jalandhar", description: "Hub of sports goods manufacturing." },
	{
		name: "Jammu",
		description: "Winter capital of J&K; home to Vaishno Devi.",
	},
	{
		name: "Jamshedpur",
		description: "India's first planned industrial city.",
	},
	{ name: "Jhansi", description: "Gateway to the Bundelkhand region." },
	{
		name: "Kochi",
		description: "Port city; most densely populated in Kerala.",
	},
	{
		name: "Kozhikode",
		description: "Ancient spice city; top residential hub.",
	},
	{
		name: "Ludhiana",
		description: "Largest city in Punjab; major industrial center.",
	},
	{
		name: "Madurai",
		description: "One of the world's oldest cities; cultural hub.",
	},
	{
		name: "Meerut",
		description: "Second‑largest army cantonment; education hub.",
	},
	{
		name: "Mysore",
		description: "Cultural capital of Karnataka; known for silk.",
	},
	{
		name: "Nagpur",
		description: "One of the cleanest cities; orange trade center.",
	},
	{ name: "Nashik", description: "Wine industry city on the Western Ghats." },
	{
		name: "Nellore",
		description: "Fast‑developing; known for rice and jowar.",
	},
	{
		name: "Patna",
		description: "Ancient seat of learning; capital of Bihar.",
	},
	{
		name: "Pune",
		description: "Educational hub and growing industrial city.",
	},
	{ name: "Raipur", description: "Capital of Chhattisgarh; 87% literacy." },
	{
		name: "Rajahmundry",
		description: "Major cloth and bullion market on Godavari.",
	},
	{
		name: "Rajkot",
		description: "Fastest growing in Gujarat; 80% literacy.",
	},
	{
		name: "Ranchi",
		description: "Capital of Jharkhand; industrialized city.",
	},
	{ name: "Ratlam", description: "One of the best cities to buy gold." },
	{ name: "Solapur", description: "Top industrial city of Maharashtra." },
	{
		name: "Srinagar",
		description: "Famous for Himalayan beauty on the Jhelum.",
	},
	{ name: "Surat", description: "Diamond business hub; fastest growing." },
	{ name: "Siliguri", description: "Transit hub for northeast India." },
	{
		name: "Thiruvananthapuram",
		description: "Largest city in Kerala; IT destination.",
	},
	{ name: "Vishakhapatnam", description: "Important southeast port city." },
	{ name: "Thane", description: "Mumbai’s most populated suburb." },
];

const CitiesPage = () => (
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
					Major Cities of India
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
					Here are India’s top cities by 2011 census population, along
					with a quick fact about each.
				</motion.p>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{citiesData.map((city, i) => (
						<motion.div
							key={i}
							className="bg-green-50 border-l-4 border-green-500 p-4 rounded-lg shadow-sm cursor-pointer"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.4, delay: i * 0.02 }}
							whileHover={{
								scale: 1.05,
								boxShadow: "0px 8px 20px rgba(0,0,0,0.15)",
							}}
						>
							<h2 className="text-lg font-semibold text-green-700">
								{city.name}
							</h2>
							<p className="text-gray-700">{city.description}</p>
						</motion.div>
					))}
				</div>
			</motion.div>
		</div>
	</div>
);

export default CitiesPage;
