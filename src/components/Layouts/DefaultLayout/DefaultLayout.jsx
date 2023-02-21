import Header from "../components/Header/Header";
import Sidebar from "./Sidebar/Sidebar";

function DefaultLayout({ children }) {
  return (
    <div className="flex flex-col items-center ">
      <Header />
      <div className="h-[70vh] flex w-container ">
        <Sidebar />
        <div className="flex-1 h-full">{children}</div>
      </div>
    </div>
  );
}

export default DefaultLayout;
