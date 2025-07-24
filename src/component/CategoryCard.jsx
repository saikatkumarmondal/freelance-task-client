import React from "react";

const CategoryCard = ({ category }) => {
  return (
    <li className="group list-none">
      <div className="flex items-center gap-3 p-4 rounded-xl bg-gradient-to-r from-gray-50 to-white shadow-md border border-gray-200 transition hover:shadow-lg hover:border-indigo-400 hover:bg-indigo-50 cursor-pointer">
        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center text-lg font-semibold">
          {category.category.charAt(0)}
        </div>
        <div className="text-md font-medium text-gray-800 group-hover:text-indigo-700">
          {category.category}
        </div>
      </div>
    </li>
  );
};

export default CategoryCard;
