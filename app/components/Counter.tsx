// import React, { useState } from "react";

// const Counter: React.FC = () => {
//   const [count, setCount] = useState(0);
//   return <div>
//     <p>当前计数 {count}</p>
//     <button onClick={() => setCount(count + 1)}>增加</button>
//   </div>;
// };


// export default Counter;

import React, { useState } from "react"; // 导入 React 和 useState Hook

// 定义一个名为 Counter 的函数组件，类型为 React.FC（函数式组件）
// () => {}`  箭头函数（Arrow Function）是 ES6 引入的一种简洁写法，用来定义函数。
//  ▫ 例子：`() => {}`、`(a, b) => a + b`
//  ▫ 用于回调、事件处理、数组方法等场景。
const Counter: React.FC = () => {
  const [count, setCount] = useState(0); // 声明 count 状态变量，初始值为 0，setCount 用于更新 count

  return (
    <div> {/* 外层容器 */}
      <p>当前计数 {count}</p> {/* 显示当前计数值 */}
      <button onClick={() => setCount(count + 1)}>增加</button> {/* 点击按钮时，count 加 1 */}
    </div>
  );
};

export default Counter; // 导出 Counter 组件，供其他文件使用

