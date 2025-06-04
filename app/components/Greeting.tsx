import React from "react";

//定义props类型
type GreetingProps = {
  name: string;
};

//定义带有props的组件
const Greeting: React.FC<GreetingProps> = ({ name }) => {
  return <div>Hello, {name}!</div>;
};




export default Greeting;