import React from "react";
import { Counter } from "./components/Counter";


const App = () => {
  return (
    <div className="w-screen h-screen p-10 bg-gray-200 text-slate-700">
      <h1 className="max-w-md mx-auto text-center text-2xl">Simple Counter Application</h1>
      {/* counter */}
      <div className="max-w-md mx-auto mt-10">
        <Counter/>
      </div>
    </div>
  );
};

export default App;
