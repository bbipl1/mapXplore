import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as IndiaMap } from "../assets/Indian.svg"; // Adjust the path as needed

const idToSlugMap = {
	// ... (as defined above)
	"IN-AN": "andaman-nicobar",
	"IN-AP": "andhra-pradesh",
	"IN-AR": "arunachal-pradesh",
	"IN-AS": "assam",
	"IN-BR": "bihar",
	"IN-CH": "chandigarh",
	"IN-CT": "chhattisgarh",
	"IN-DN": "dadra-nagar-haveli",
	"IN-DD": "daman-diu",
	"IN-DL": "delhi",
	"IN-GA": "goa",
	"IN-GJ": "gujarat",
	"IN-HR": "haryana",
	"IN-HP": "himachal-pradesh",
	"IN-JH": "jharkhand",
	"IN-KA": "karnataka",
	"IN-KL": "kerala",
	"IN-LD": "lakshadweep",
	"IN-MP": "madhya-pradesh",
	"IN-MH": "maharashtra",
	"IN-MN": "manipur",
	"IN-ML": "meghalaya",
	"IN-MZ": "mizoram",
	"IN-NL": "nagaland",
	"IN-OD": "odisha",
	"IN-PB": "punjab",
	"IN-PY": "puducherry",
	"IN-RJ": "rajasthan",
	"IN-SK": "sikkim",
	"IN-TN": "tamil-nadu",
	"IN-TG": "telangana",
	"IN-TR": "tripura",
	"IN-UP": "uttar-pradesh",
	"IN-UT": "uttarakhand",
	"IN-WB": "west-bengal",
	"IN-LA": "ladakh",
	"IN-JK": "jammu-kashmir",
};

const WelcomeSection = () => {
	const navigate = useNavigate();

	useEffect(() => {
		const svg = document.getElementById("india-svg");
		if (!svg) return;

		const paths = svg.querySelectorAll("path");

		paths.forEach((path) => {
			const stateId = path.id;
			const slug = idToSlugMap[stateId];

			if (slug) {
				path.style.cursor = "pointer";
				path.addEventListener("mouseenter", () => {
					path.style.opacity = 0.7;
				});
				path.addEventListener("mouseleave", () => {
					path.style.opacity = 1;
				});
				path.addEventListener("click", () => {
					navigate(`/states/${slug}`);
				});
			} else {
				console.log(`No slug found for state ID: ${stateId}`);
			}
		});

		// Cleanup event listeners on unmount
		return () => {
			paths.forEach((path) => {
				const stateId = path.id;
				const slug = idToSlugMap[stateId];
				if (slug) {
					path.removeEventListener("mouseenter", () => {});
					path.removeEventListener("mouseleave", () => {});
					path.removeEventListener("click", () => {});
				}
			});
		};
	}, [navigate]);

	return (
		<section className="w-full md:w-2/3 bg-white p-6 shadow-lg rounded-xl">
			<h2 className="text-3xl font-extrabold text-gray-800">
				Welcome to mapXplore
			</h2>
			<p className="text-gray-600 mt-2 leading-relaxed">
				Explore interactive  indian-maps—navigate through states,
				cities, and discover rich cultural and geographical diversity.
			</p>
			<div className="mt-6 w-full rounded-lg shadow-md">
				<IndiaMap id="india-svg" />
			</div>
		</section>
	);
};

export default WelcomeSection;
