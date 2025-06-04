import React from "react";

//定义props类型
// Props：是组件的“属性”，类似于 HTML 标签的属性。通过 Props 可以向组件传递数据。
type GreetingProps = {
  name: string;
};

//定义带有props的组件
const Greeting: React.FC<GreetingProps> = ({ name }) => {
  return <div>Hello, {name}!</div>;
};




export default Greeting;