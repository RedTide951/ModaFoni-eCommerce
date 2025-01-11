import React from "react";

const ProductCard = () => {
  return (
    <div className="relative bg-white shadow-lg rounded-lg overflow-hidden w-80 border border-gray-200">
      <div className="relative">
        <img
          src="https://placehold.co/300x200"
          alt="Product"
          className="w-full h-40 object-cover"
        />
        <span className="absolute top-2 left-2 bg-red-500 text-white uppercase text-xs font-bold px-2 py-1 rounded">
          Sale
        </span>
      </div>

      <div className="p-4">
        <div className="flex justify-between items-center">
          <span className="text-blue-500 font-semibold text-sm">
            English Department
          </span>
          <span className="flex items-center text-yellow-500">⭐ 4.9</span>
        </div>

        <h3 className="text-lg font-bold mt-2">Graphic Design</h3>
        <p className="text-gray-600 text-sm mt-1">
          We focus on ergonomics and meeting you where you work. It's only a
          keystroke away.
        </p>

        <div className="flex justify-between items-center mt-3">
          <span className="text-gray-500 text-sm">15 Sales</span>
          <div className="text-right">
            <span className="line-through text-gray-400 text-sm">$16.48</span>
            <span className="text-green-600 font-bold text-lg ml-1">$6.48</span>
          </div>
        </div>

        <div className="flex mt-3 space-x-2">
          <div className="w-4 h-4 rounded-full bg-blue-400"></div>
          <div className="w-4 h-4 rounded-full bg-red-400"></div>
          <div className="w-4 h-4 rounded-full bg-green-400"></div>
          <div className="w-4 h-4 rounded-full bg-yellow-400"></div>
        </div>

        <div className="flex justify-between items-center text-gray-500 text-xs mt-4">
          <span className="flex items-center">⏱ 22hr 30min</span>
          <span>📚 64 Lessons</span>
          <span>✅ Progress</span>
        </div>

        <button className="mt-4 w-full bg-blue-100 text-blue-600 border border-blue-600 py-2 rounded-full text-sm font-semibold hover:bg-blue-600 hover:text-white transition">
          Learn More →
        </button>
      </div>

      <div className="absolute top-32 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex gap-3 bg-white rounded-full shadow p-2">
        <button className="bg-white border border-gray-300 rounded-full p-2 hover:bg-gray-100">
          ♥
        </button>
        <button className="bg-blue-500 text-white rounded-full p-2 hover:bg-blue-600">
          🛒
        </button>
        <button className="bg-white border border-gray-300 rounded-full p-2 hover:bg-gray-100">
          👁
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
