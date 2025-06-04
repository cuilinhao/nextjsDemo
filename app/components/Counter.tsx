"use client";
import React, { useState } from "react";

const Counter: React.FC = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>当前计数 {count}</p>
      <button onClick={() => setCount(count + 1)}>增加</button>
    </div>
  );
};

export default Counter;

