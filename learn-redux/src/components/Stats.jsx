import React from "react";

export const Stats = ({ count }) => {
  return (
    <div className="p-4 h-40 flex items-center justify-center space-y-5 bg-white rounded shadow mt-10">
      <div className="text-2xl font-semibold">Total Count: {count}</div>
    </div>
  );
};
