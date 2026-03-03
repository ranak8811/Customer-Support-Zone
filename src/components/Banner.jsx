import React from "react";
import vector1 from "../assets/vector1.png";

const Banner = ({ inProgressCount = 0, resolvedCount = 0 }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
      {/* In-Progress Card */}
      <div className="relative overflow-hidden bg-linear-to-r from-[#6366F1] to-[#A855F7] rounded-3xl p-12 text-center text-white shadow-lg flex flex-col items-center justify-center min-h-60">
        {/* Vector Image Left */}
        <img
          src={vector1}
          alt=""
          className="absolute left-0 top-0 h-full w-auto opacity-70 pointer-events-none object-cover"
        />
        {/* Vector Image Right (Mirrored) */}
        <img
          src={vector1}
          alt=""
          className="absolute right-0 top-0 h-full w-auto opacity-70 pointer-events-none object-cover scale-x-[-1]"
        />

        <div className="relative z-10">
          <h2 className="text-2xl font-medium mb-2">In-Progress</h2>
          <p className="text-7xl font-bold">{inProgressCount}</p>
        </div>
      </div>

      {/* Resolved Task Card */}
      <div className="relative overflow-hidden bg-linear-to-r from-[#10B981] to-[#3B82F6] rounded-3xl p-12 text-center text-white shadow-lg flex flex-col items-center justify-center min-h-60">
        {/* Vector Image Left */}
        <img
          src={vector1}
          alt=""
          className="absolute left-0 top-0 h-full w-auto opacity-70 pointer-events-none object-cover"
        />
        {/* Vector Image Right (Mirrored) */}
        <img
          src={vector1}
          alt=""
          className="absolute right-0 top-0 h-full w-auto opacity-70 pointer-events-none object-cover scale-x-[-1]"
        />

        <div className="relative z-10">
          <h2 className="text-2xl font-medium mb-2">Resolved</h2>
          <p className="text-7xl font-bold">{resolvedCount}</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
