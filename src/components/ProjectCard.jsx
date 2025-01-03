"use client";
import React from "react";

function ProjectCard() {
  const containerStyle = {
    overflow: "hidden",
  };

  const imageStyle = {
    width: "100%",
    transition: "transform 0.5s ease",
  };

  const hoverStyle = {
    transform: "scale(1.1)",
  };
  return (
    <div className="max-w-xl rounded overflow-hidden shadow-lg border-[1px] border-[#545353] p-4">
      <div style={containerStyle}>
        <img
          style={imageStyle}
          src="/assets/sample.png"
          alt="Sunset in the mountains"
          className=" " 
          onMouseEnter={(e) =>
            (e.target.style.transform = hoverStyle.transform)
          }
          onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
        />
      </div>
      <div className="py-4 text-left items-start">
        <p>2024</p>
        <span className="text-3xl mb-2">The Coldest Sunset</span>
        <p className="rounded-xl border border-[#626263] bg-black w-fit p-1 text-sm">
          Next.js
        </p>

        <p>
          A Next JS website for a fictional fine dining restaurant. A
          sophisticated design showcases the restaurant's menu, team, and
          atmosphere, with a form to collect table bookings
        </p>
      </div>
    </div>
  );
}

export default ProjectCard;
