import { Button } from "./ui/button";
import type { MouseEvent } from "react";

interface SignInButtonProps {
  isLoading?: boolean;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

export function SignInButton({ isLoading = false, onClick }: SignInButtonProps) {
  return (
    <Button
      onClick={onClick}
      disabled={isLoading}
      className="w-full max-w-xs mt-4"
    >
      {isLoading ? "签到中..." : "签到"}
    </Button>
  );
} 