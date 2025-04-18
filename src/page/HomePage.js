import React from "react";
import Sidebar from "../components/Sidebar";
import WelcomeSection from "../components/WelcomeSection";
import SponsorSection from "../components/SponsorSections";
import ClientFeedback from "../components/ClientFeedback";

const HomePage = () => {
  return (
    <div>
      <h1 className="text-center mt-10 text-3xl font-bold">
        Welcome to Universal Map Solutions
      </h1>

      {/* Sidebar and Main Content */}
      <div className="container mx-auto px-6 py-4 flex flex-col md:flex-row gap-6">
        <Sidebar />
        <main className="w-full md:w-3/4 flex flex-col md:flex-row gap-6">
          <WelcomeSection />
          <SponsorSection />
        </main>
      </div>

      {/* Divider to add spacing */}
      <hr className="my-10 border-gray-300" />

      {/* Client Feedback Section (Below everything) */}
      <div className="container mx-auto px-6">
        <h2 className="text-2xl font-bold text-center mb-4">What Our Clients Say</h2>
        <ClientFeedback />
      </div>
    </div>
  );
};

export default HomePage;
