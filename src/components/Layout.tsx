"use client"
import Nav from "../components/nav";
import Footer from "../components/footer";
import ButtonUp from "./UI/ButtonUp";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
      <main className="flex-1">{children}</main>
      <Footer />
      <ButtonUp/>
    </div>
  );
};

export default Layout;
