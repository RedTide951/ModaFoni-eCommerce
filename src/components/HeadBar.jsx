import React from "react";

const HeadBar = () => {
  return (
    <div className="hidden lg:block">
      <div className="flex justify-between bg-gray-800 text-white p-4">
        <div className="flex gap-4">
          <div>(225) 555-0118</div>
          <div>michelle.rivera@example.com</div>
        </div>
        <div>Advertisement</div>
        <div>follow us</div>
      </div>
    </div>
  );
};

export default HeadBar;
