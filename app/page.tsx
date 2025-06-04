import Image from "next/image";
import { SignInButton } from "./components/sign-in-button";

export default function Home() {
  return (
    <div>
      <h1 style={{ fontFamily: "var(--font-feeling-cute)" }}>Hello World</h1>
      <SignInButton />
    </div>
  );
}
