import React, { useState, useRef, useEffect } from "react";
import Logo from "../assets/image.png";
import { FaSearch, FaAngleDown } from "react-icons/fa";

const Navbar = () => {
	const [dropdowns, setDropdowns] = useState({
		states: false,
		// cities: false,
		// maps: false,
		// indiaTravel: false,
		// myIndia: false,
		// utilities: false,
		// ourChannel: false,
		// whatsNew: false,
	});

	const [searchQuery, setSearchQuery] = useState("");

	const dropdownRefs = {
		states: useRef(null),
		cities: useRef(null),
		maps: useRef(null),
		indiaTravel: useRef(null),
		myIndia: useRef(null),
		utilities: useRef(null),
		ourChannel: useRef(null),
		whatsNew: useRef(null),
	};

	const handleClickOutside = (event) => {
		Object.keys(dropdownRefs).forEach((key) => {
			if (
				dropdownRefs[key].current &&
				!dropdownRefs[key].current.contains(event.target)
			) {
				setDropdowns((prev) => ({ ...prev, [key]: false }));
			}
		});
	};

	useEffect(() => {
		document.addEventListener("mousedown", handleClickOutside);
		return () =>
			document.removeEventListener("mousedown", handleClickOutside);
	}, []);

	const toggleDropdown = (key) => {
		setDropdowns((prev) => ({ ...prev, [key]: !prev[key] }));
	};

	const handleSearch = () => {
		if (searchQuery.trim() !== "") {
			window.location.href = `https://www.google.com/search?q=${encodeURIComponent(
				searchQuery
			)}`;
		}
	};

	const handleKeyPress = (event) => {
		if (event.key === "Enter") {
			handleSearch();
		}
	};

	const dropdownItems = {
		states: [
			{ text: "Andhra Pradesh", path: "/states/andhra-pradesh" },
			{ text: "Arunachal Pradesh", path: "/states/arunachal-pradesh" },
			{ text: "Assam", path: "/states/assam" },
			{ text: "Bihar", path: "/states/bihar" },
			{ text: "Chhattisgarh", path: "/states/chhattisgarh" },
			{ text: "Goa", path: "/states/goa" },
			{ text: "Gujarat", path: "/states/gujarat" },
			{ text: "Haryana", path: "/states/haryana" },
			{ text: "More...", path: "/states" },
		],

		// cities: [
		// 	"Delhi",
		// 	"Mumbai",
		// 	"Kolkata",
		// 	"Chennai",
		// 	"Bangalore",
		// 	{ text: "More...", path: "/cities" },
		// ],
		// maps: [
		// 	"Political Map",
		// 	"Physical Map",
		// 	"Outline Map",
		// 	"Railway Map",
		// 	"Road Map",
		// 	{ text: "More...", path: "/maps" },
		// ],
		// indiaTravel: [
		// 	"Hotels in India",
		// 	"Tourist Places in India",
		// 	"Hill Stations",
		// 	"Beaches in India",
		// 	"Religious Places in India",
		// 	{ text: "More...", path: "/travel" },
		// ],
		// myIndia: [
		// 	"Movie Reviews",
		// 	"Travel",
		// 	"Society",
		// 	"Government",
		// 	"Indian Food",
		// 	"Politics",
		// 	{ text: "More...", path: "/myindia" },
		// ],
		// utilities: [
		// 	"Pin Codes",
		// 	"STD Search",
		// 	"Railway Time Table",
		// 	"Flight Schedule",
		// 	"Distance Calculator",
		// 	"IFSC Code",
		// 	{ text: "More...", path: "/utilities" },
		// ],
		// ourChannel: [
		// 	"Education",
		// 	"Election",
		// 	"Sports",
		// 	"Bharat ka Manchitra",
		// 	{ text: "More...", path: "/ourchannel" },
		// ],
		// whatsNew: [
		// 	"Upcoming Bollywood Movies",
		// 	"Fair and Festival in India",
		// 	"Events India",
		// 	"Biographies of Famous Personalities",
		// 	{ text: "More...", path: "/whatsnew" },
		// ],
	};

	return (
		<nav className="bg-white shadow-md">
			<div className="flex justify-between items-center px-8 py-3 border-b">
				<div className="flex items-center space-x-3">
					<img
						src={Logo}
						alt="Maps of India"
						className="h-12 rounded-md shadow-sm"
					/>
					<span className="text-2xl font-bold text-red-600">
						mapXplore
					</span>
				</div>

				{/* Google Search */}
				<div className="flex items-center bg-gray-100 border rounded-full px-4 py-2 space-x-2 shadow-sm">
					<input
						type="text"
						placeholder="Search anything..."
						className="outline-none bg-transparent w-64 text-sm px-2"
						value={searchQuery}
						onChange={(e) => setSearchQuery(e.target.value)}
						onKeyDown={handleKeyPress}
					/>
					<button
						className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 rounded-full transition-all"
						onClick={handleSearch}
					>
						<FaSearch />
					</button>
				</div>
			</div>

			<div className="bg-blue-600 text-white text-sm flex px-8 relative z-10">
				<a
					href="/"
					className="px-5 py-3 hover:bg-blue-700 transition-all font-bold"
				>
					Home
				</a>
				{Object.keys(dropdownItems).map((key) => (
					<div className="relative" key={key} ref={dropdownRefs[key]}>
						<button
							onClick={() => toggleDropdown(key)}
							className="flex items-center gap-1 px-5 py-3 hover:bg-blue-700 transition-all"
						>
							{key.replace(/([A-Z])/g, " $1").trim()}{" "}
							<FaAngleDown />
						</button>
						{dropdowns[key] && (
							<div className="absolute left-0 mt-2 w-64 bg-white text-black shadow-lg rounded-lg overflow-hidden z-20 border">
								{dropdownItems[key].map((item, index) =>
									typeof item === "string" ? (
										<a
											key={index}
											href={`/${key}/${item
												.split(" ")[0]
												.toLowerCase()}`}
											className="block px-4 py-2 hover:bg-gray-200 transition-all"
										>
											{item}
										</a>
									) : (
										<a
											key={index}
											href={item.path}
											className="block px-4 py-2 hover:bg-gray-200 transition-all font-bold text-blue-600"
										>
											{item.text}
										</a>
									)
								)}
							</div>
						)}
					</div>
				))}
			</div>

			<div className="px-8 py-3 text-sm text-red-600 bg-gray-100 border-t">
				For Custom/Business Map Quote{" "}
				<span className="font-bold">+91 9079230431</span> |
				<a
					href="mailto:apoorv@mappingdigiworld.com"
					className="text-blue-600 underline"
				>
					saurabhindo6655@gmail.com
				</a>
			</div>
		</nav>
	);
};

export default Navbar;
