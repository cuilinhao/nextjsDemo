import Image from "next/image";
import { SignInButton } from "./components/sign-in-button";
import { auto } from "openai/_shims/registry.mjs";
import Hello from "./components/Hello"

//元数据
export const metadata = {
  title: "yihao-home",
  description: "元数据是为了谷歌搜索做优化使用的",
  authors: [{ name: "yihao", url: "https://www.yihao.com" }],
  keywords: ["yihao", "home", "google", "search"],
  robots: "index, follow",
  openGraph: {
    title: "yihao-home",
    description: "元数据是为了谷歌搜索做优化使用的",
  },
};

//动态元数据
// export async function generateMetadata({ params }, parent) {
//   const { projectId } = params;
//   const product = await fetch(`https://…/${projectId}`).then((res) => res.json());
//   return {
//     title: product.title,
//     description: product.description,
//   };
// }

/***
 * 
 * 这个 generateMetadata 函数的作用是根据当前页面的 URL 参数动态生成元数据，比如 title 和 description。
它会从 API 获取数据，然后返回页面的元信息。
适用于 SEO（搜索引擎优化），让不同的项目页面有不同的 title 和 description，提升网页的搜索引擎排名。

 */

// export async function generateMetadata(
//   { params }: { params: { projectId: string } },
//   parent: any
// ) {
//   const { projectId } = params;
//   const product = await fetch(`https://…/${projectId}`).then((res) => res.json());
//   return {
//     title: product.title,
//     description: product.description,
//   };
// }


// export default function Home() {
//   return (
//     <div>
//       <h1 style={{ fontFamily: "var(--font-feeling-cute)" }}>Hello World</h1>
//       <SignInButton />
//     </div>
//   );
// }

export default function Home() {
  //我想让hello 距离左边间距为100，背景green
return (<div className="ml-[100px] bg-green-500 inline-block">
<Hello />
</div>);
}
