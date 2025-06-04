import type { ButtonHTMLAttributes, ReactNode } from "react"; 
// 导入 React 类型：ButtonHTMLAttributes（按钮属性类型）、ReactNode（React 节点类型）

import { cn } from "../../lib/utils"; 
// 导入自定义的 cn 工具函数（通常用于合并 className 字符串）

// 定义 ButtonProps 接口，继承原生按钮属性，并添加 children 属性
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode; // 按钮内容，可以是文本、图标等 React 节点
}

// 定义 Button 组件，接收 children、className 及其它所有按钮属性
export function Button({ children, className, ...props }: ButtonProps) {
  return (
    <button className={cn(
        // 使用 cn 工具函数合并默认样式和外部传入的 className
       
        /***
   
   这是按钮的默认 Tailwind CSS 样式，具体解释如下：
    ▫ `inline-flex`：行内弹性盒子布局
    ▫ `items-center`：垂直居中内容
    ▫ justify-center`：水平居中内容
    ▫ `rounded-md`：中等圆角
    ▫ `bg-black`：黑色背景
    ▫ `text-white`：白色文字
    ▫ `px-4`：左右内边距 1rem
    ▫ `py-2`：上下内边距 0.5rem
    ▫ `text-sm`：小号字体
    ▫ `font-medium`：中等加粗
    ▫ `transition-colors`：颜色变化有过渡动画
    ▫ `hover:bg-gray-800`：悬停时背景变深灰
    ▫ `disabled:opacity-50`：禁用时透明度 50%
    ▫ `disabled:pointer-events-none`：禁用时不响应鼠标事件
    ▫ `focus:outline-none`：聚焦时无默认外轮廓
    ▫ `focus:ring-2`：聚焦时显示 2px ring
    ▫ `focus:ring-offset-2`：聚焦时 ring 有 2px 间距
    ▫ `focus:ring-black`：聚焦时 ring 颜色为黑色
   
   */

        "inline-flex items-center justify-center rounded-md bg-black text-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-800 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black",
        className
      )}
      {...props} // 展开其余所有按钮属性（如 onClick、type、disabled 等）
    >
      {children} {/* 渲染按钮内容 */}
    </button>
  );
}
