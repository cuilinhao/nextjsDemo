import { Button } from "./ui/button"; 
// 导入自定义的 Button 组件（通常是带样式的按钮）

import type { MouseEvent } from "react"; 
// 从 React 中导入 MouseEvent 类型，用于类型提示

// 定义 SignInButtonProps 接口，描述组件可接收的属性
interface SignInButtonProps {
  isLoading?: boolean; // 是否处于加载状态（可选，默认为 false）
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void; // 点击事件处理函数（可选）
}

// 定义 SignInButton 组件，接收 isLoading 和 onClick 两个 props
export function SignInButton({ isLoading = false, onClick }: SignInButtonProps) {
  return (
    <Button style={{ fontFamily: "var(--font-feeling-cute)" }}
      onClick={onClick}
      disabled={isLoading}
      className="w-full max-w-xs mt-4"
    >
      {isLoading ? "Sign in" : "Sign in"}
    </Button>
  );
}
