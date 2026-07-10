import React from "react";

export default function StatCard({
  title,
  value,
  color,
}) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 border">

      <div
        className={`w-3 h-3 rounded-full mb-4 ${color}`}
      />

      <p className="text-gray-500 text-sm">
        {title}
      </p>

      <h2 className="text-3xl font-bold mt-2">
        {value}
      </h2>

    </div>
  );
}