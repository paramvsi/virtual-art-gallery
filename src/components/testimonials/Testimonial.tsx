import React from "react";

const Testimonial = ({
  name,
  feedback,
}: {
  name: string;
  feedback: string;
}) => {
  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md m-4">
      <p className="text-gray-600 italic">{feedback}</p>
      <p className="text-gray-800 font-bold text-right">- {name}</p>
    </div>
  );
};

export default Testimonial;
