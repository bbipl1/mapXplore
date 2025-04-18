import React from "react";

const SponsorSection = () => {
  return (
    <aside className="w-full md:w-1/3 bg-white p-6 shadow-md rounded-lg">
      <h2 className="text-xl font-bold bg-black text-white p-3 rounded-md">
        Become Our Sponsors
      </h2>
      <p className="text-gray-700 mt-2">
        MapsOfIndia.com is a leading resource for India maps and attracts over 11 million visitors per month.
        Sponsor with us for only ₹40,000 per year and gain visibility for your business.
      </p>
      <ul className="mt-2 list-disc pl-4 text-gray-600 text-sm">
        <li>1 Product Page with link</li>
        <li>Assured 1200 impressions/year</li>
      </ul>
      <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
        Apply Now
      </button>
    </aside>
  );
};

export default SponsorSection;
