import React, { useEffect, useState } from "react";

const AddTask = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:7777/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((err) => console.error("Fetch categories error:", err));
  }, []);

  const handleAddTask = (e) => {
    // console.log("Om Namah Shivaya");
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const formObject = Object.fromEntries(formData.entries());
    fetch("http://localhost:7777/add-task", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(formObject),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("Task Added successfully");
        }
      });
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-blue-50 via-white to-purple-100 flex items-center justify-center py-12 px-4">
      <div className="w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-gray-200 p-10">
        <h2 className="text-4xl font-bold text-center text-indigo-700 mb-8 tracking-tight">
          🎯 Post a New Task
        </h2>
        <form className="space-y-5" onSubmit={handleAddTask}>
          {/* Title */}
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Title
            </label>
            <input
              type="text"
              name="title"
              placeholder="e.g., Design a website"
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          {/* Category */}
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Category
            </label>
            <select
              name="category"
              className="w-full px-4 py-2 border border-gray-300 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-indigo-400">
              <option value="">Select a category</option>
              {categories.map((cat) => (
                <option key={cat._id} value={cat.category}>
                  {cat.category}
                </option>
              ))}
            </select>
          </div>

          {/* Description */}
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              name="description"
              placeholder="Describe your task in a few lines"
              rows="3"
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 resize-none"></textarea>
          </div>

          {/* Deadline */}
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Deadline
            </label>
            <input
              type="date"
              name="deadline"
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          {/* Budget */}
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Budget ($)
            </label>
            <input
              type="number"
              name="budget"
              placeholder="500"
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          {/* User Email */}
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Your Email
            </label>
            <input
              type="email"
              name="userEmail"
              placeholder="example@domain.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400"
              required
            />
          </div>

          {/* User Name */}
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Your Name
            </label>
            <input
              type="text"
              name="userName"
              placeholder="John Doe"
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white font-semibold py-3 rounded-xl hover:bg-indigo-700 transition duration-300">
              ➕ Add Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTask;
