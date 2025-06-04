import React from "react";


/***
 * LayoutProps : 定义props的类型，children 是Rect内置的属性，用于嵌套组件
 * {children} 表示组件中嵌套的内容
 * ＜header＞ 和 ＜footer＞：布局的固定部分，类似网页的导航栏和页脚。
 */
type LayoutProps = {
    //接受子组件
    children: React.ReactNode;
};
/***
 * 定义了一个函数组件 Layout，并标注其 props 类型为 LayoutProps。

这里用了 解构赋值，直接拿到 children。

React.FC<LayoutProps>：其实可以写也可以不写。新版 React 官方其实推荐直接写成：

 * const Layout: React.FC<LayoutProps> = ({children}) => {
 * 
 * type 是 TypeScript 的 类型别名（Type Alias）
也就是说：

你可以用 type 来定义一个自定义的类型。

它本身是 TypeScript 的语法，跟 JavaScript 没有关系（JS 是没有 type 关键字的）。

这种做法让代码更可读、可维护、方便复用。

 */
//创建一个布局组件
const Layout: React.FC<LayoutProps> = ({children}) => {
    return (
        <div>
            <header>
                网站头部
            </header>
            <main>{children}</main>
            <footer>
                网站底部
            </footer>
        </div>
    );
};

export default Layout;