import React from "react";

type LayoutProps = {
    //接受子组件
    children: React.ReactNode;
};

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