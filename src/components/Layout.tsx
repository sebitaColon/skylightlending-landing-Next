import Nav from "../components/nav";
import Footer from "../components/footer";
import { Toaster } from "react-hot-toast";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
      <main className="flex-1">{children}
      <Toaster position="bottom-center"/>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
