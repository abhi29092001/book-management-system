import React from "react";

const Spinner = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="animate-ping w-12 h-12 rounded-full m-8 bg-sky-400 opacity-75"></div>
    </div>
  );
};

export default Spinner;
