import React from "react";

function Newsletter() {
  return (
    <div className="w-full py-16 text-white px-4">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
        <div className="lg:col-span-2 my-4">
          <h1 className="md:text-4xl sm:text-3xl font-bold py-2 text-2xl">
            Want tips & tricks to optimize your flow?
          </h1>
          <p>Sign up to our newsletter and stay up to date.</p>
        </div>
        <div className="my-4">
          <div className="flex flex-col sm:flex-row items-center justify-between w-full">
            <input
              type="email"
              placeholder="Enter Email"
              className="p-3 flex w-full rounded-md text-block"
            />
            <button className="bg-[#00df9a] text-block rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3">
              Notify Me
            </button>
          </div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
            illo <span className="text-[#00df9a]">privacy policy</span>
          </p>
        </div>
      </div>{" "}
    </div>
  );
}

export default Newsletter;
