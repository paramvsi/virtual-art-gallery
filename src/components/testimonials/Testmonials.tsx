import React from "react";
import Testimonial from "./Testimonial";

const Testimonials = () => {
  return (
    <div className="bg-white py-8">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
          Visitor Testimonials
        </h2>
        <p className="text-center text-gray-600 mb-6">
          Discover what visitors have to say about their virtual art gallery
          experience.
        </p>
        <div className="flex flex-col md:flex-row justify-around items-start space-y-4 md:space-y-0">
          <Testimonial
            name="Emily Parker"
            feedback="Mesmerizing! The virtual gallery truly brings art to life."
          />
          <Testimonial
            name="Alex Johnson"
            feedback="An innovative and engaging platform for art enthusiasts."
          />
        </div>
        <div className="text-center mt-6">
          <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
