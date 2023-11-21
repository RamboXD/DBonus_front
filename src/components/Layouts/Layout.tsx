import { Header, Sidebar } from "./components";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col w-full h-screen">
      <div className="flex flex-row w-full h-full overflow-hidden">
        <Sidebar />
        <div className="w-full bg-[#f7f8fa] h-screen flex flex-col">
          <Header />
          <div className="w-full p-5 h-[92vh] overflow-auto flex flex-col bg-white">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
