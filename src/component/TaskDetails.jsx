import React, { useState } from 'react';
import {
  FaUser,
  FaEnvelope,
  FaCalendarAlt,
  FaTag,
  FaMoneyBill,
} from "react-icons/fa";
const TaskDetails = ({task}) => {
    const {
      _id,title,
      description,
      category,
      deadline,
      budget,
      userName,
      userEmail,
    } = task;

    const [ show, setShow ] = useState( false );
    const [display, setDisplay] = useState('hidden');
   const handleButton = (id) => {
     setDisplay("flex"); // Show it (since it's a flex container)

     setTimeout(() => {
       setDisplay("hidden"); // Hide after 3 seconds
     }, 3000);
   };

    return (
      <>
        <div className="">
          <div className="p-6 bg-white rounded-2xl shadow-lg border border-indigo-100 hover:shadow-xl transition duration-300">
            <h2 className="text-2xl font-bold text-indigo-700 mb-4 text-center">
              {title}
            </h2>

            <p className="text-gray-700 text-base mb-4">{description}</p>

            <div className="space-y-3 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <FaTag className="text-indigo-500" />
                <span className="font-semibold">Category:</span> {category}
              </div>
              <div className="flex items-center gap-2">
                <FaCalendarAlt className="text-indigo-500" />
                <span className="font-semibold">Deadline:</span> {deadline}
              </div>
              <div className="flex items-center gap-2">
                <FaMoneyBill className="text-indigo-500" />
                <span className="font-semibold">Budget:</span> ${budget}
              </div>
              <div className="flex items-center gap-2">
                <FaUser className="text-indigo-500" />
                <span className="font-semibold">Posted by:</span> {userName}
              </div>
              <div className="flex items-center gap-2">
                <FaEnvelope className="text-indigo-500" />
                <span className="font-semibold">Email:</span> {userEmail}
              </div>
            </div>
            <div className="my-10 flex justify-center items-center">
              <button
                onClick={() => handleButton(_id)}
                className="px-10 py-2 rounded-xl bg-indigo-600 text-white font-semibold shadow-md hover:bg-indigo-700 hover:shadow-lg transition duration-300 ease-in-out">
                Bid Now
              </button>
            </div>
          </div>
        </div>
       <div
        className={`w-[400px] h-[400px] bg-gradient-to-br ${display} from-purple-100 via-white to-indigo-100 shadow-2xl rounded-3xl p-8 flex-col items-center justify-center text-center space-y-6 border border-indigo-200 transition-all duration-500 hover:scale-105 hover:shadow-indigo-300`}
      >
        <h1 className="text-3xl font-bold text-indigo-700 tracking-wide animate-pulse">
          🕉️ Om Namah Shivaya
        </h1>
        <h1 className="text-2xl font-semibold text-purple-600 tracking-wider animate-bounce">
          🙏 Joy Maa Kali
        </h1>
      </div>
      </>
    );
};

export default TaskDetails;