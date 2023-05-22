import { ReactNode } from "react";
import MainHeader from "./MainHeader.tsx";

interface LayoutProps {
    className?: string;
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = (props) => {
    const { className, children } = props;
    const classes = className ? `${className}` : "";
  return (
    <>
      <MainHeader />
      <main className={classes}>{children}</main>
    </>
  );
};

export default Layout;
