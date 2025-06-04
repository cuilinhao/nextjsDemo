import Image from "next/image";
import { SignInButton } from "./components/sign-in-button";
import { auto } from "openai/_shims/registry.mjs";
import Hello from "./components/Hello"

import Greeting from "./components/Greeting"

import Counter from "./components/Counter";


/******元数据和动态元数据只能有一个 */
//元数据
// export const metadata = {
//   title: "yihao-home",
//   description: "元数据是为了谷歌搜索做优化使用的",
//   authors: [{ name: "yihao", url: "https://www.yihao.com" }],
//   keywords: ["yihao", "home", "google", "search"],
//   robots: "index, follow",
//   openGraph: {
//     title: "yihao-home",
//     description: "元数据是为了谷歌搜索做优化使用的",
//   },
// };

//动态元数据


/***
 * 
 * 这个 generateMetadata 函数的作用是根据当前页面的 URL 参数动态生成元数据，比如 title 和 description。
它会从 API 获取数据，然后返回页面的元信息。
适用于 SEO（搜索引擎优化），让不同的项目页面有不同的 title 和 description，提升网页的搜索引擎排名。

在 Next.js App Router（app 目录）中，generateMetadata 是由框架自动调用的，你不需要也不能在组件或页面中手动调用它。
它的作用是：在服务端渲染时，Next.js 会自动调用 generateMetadata，并将返回的对象用于页面的 <head> 元数据（SEO、title、description 等）。

如果你想测试它是否生效，可以在页面访问时查看页面 <head> 里的 <title> 和 <meta> 标签内容。

 */

export async function generateMetadata() {
  // 这里返回静态元数据，避免 params 未定义导致运行时报错
  return {
    title: "yihao-home",
    description: "元数据是为了谷歌搜索做优化使用的",
  };
}


// export default function Home() {
//   return (
//     <div>
//       <h1 style={{ fontFamily: "var(--font-feeling-cute)" }}>Hello World</h1>
//       <SignInButton />
//     </div>
//   );
// }

// export default function Home() {
//   //我想让hello 距离左边间距为100，背景green
// return (<div className="ml-[100px] bg-green-500 inline-block">
// <Hello />
// </div>);
// }


//--测试使用带props的组件
//{/* 给组件传递一个 name 属性，值是 "Alice"。 */}
// export default function Home() {
//   return (
//     <div>
//       <Greeting name="Alice" /> 
//     </div>
//   );
// }

//测试计时器组件- 状态组件
export default function Home() {
  return (
    <div>
      <Counter />
    </div>
  );
} 