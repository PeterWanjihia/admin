import Sidebar from "./Sidebar";

function Layout({ children }) {
  return (
    <div className="flex bg-input">
      <Sidebar />
      <div className="w-full">{children}</div>
    </div>
  );
}

export default Layout;
