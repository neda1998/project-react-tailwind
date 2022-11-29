import React from "react";
import laptop from "../assets/laptop.jpg";

function Analytics() {
  return (
    <div className="w-full bg-white py-6 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto my-4" src={laptop} alt="/" />
        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold">DATA ANALYTICS DASHBOARD</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">Manage Data Analytics Centrally</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
            nostrum sint reprehenderit vero laboriosam ipsa, labore incidunt id
            quis nulla veniam corrupti repudiandae unde. Reiciendis voluptatum
            deleniti voluptas dicta ullam?
          </p>
          <button className="text-[#00df9a] bg-black w-[200px] rounded-md font-medium my-6 mx-auto py-3 md:mx-0">Get Starter</button>
        </div>
      </div>
    </div>
  );
}

export default Analytics;
