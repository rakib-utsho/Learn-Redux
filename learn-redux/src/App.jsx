import React, { useState } from "react";
import { Counter } from "./components/Counter";
import { Stats } from "./components/Stats";

const intialState = [
  {
    id: 1,
    count: 0,
  },
  {
    id: 2,
    count: 0,
  },
];

const App = () => {
  const [state, setState] = useState(intialState);

  const totalCount = () => {
    return state.reduce((total, counter) => total + counter.count, 0);
  };

  const increment = (id) => {
    const newState = state.map((count) => {
      if (count.id === id) {
        return {
          ...count,
          count: count.count + 1,
        };
      }
      return {
        ...count,
      };
    });
    setState(newState);
  };

  const decrement = (id) => {
    const newState = state.map((count) => {
      if (count.id === id) {
        return {
          ...count,
          count: count.count - 1,
        };
      }
      return {
        ...count,
      };
    });
    setState(newState);
  };

  return (
    <div className="w-screen h-screen p-10 bg-gray-200 text-slate-700">
      <h1 className="max-w-md mx-auto text-center text-2xl">
        Simple Counter Application
      </h1>
      {/* counter */}
      <div className="max-w-md mx-auto mt-10">
        {state.map((count) => (
          <Counter
            key={count.id}
            id={count.id}
            increment={increment}
            decrement={decrement}
            count = {count.count}
          />
        ))}
        <Stats count={totalCount()} />
      </div>
    </div>
  );
};

export default App;
