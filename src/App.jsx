import { Outlet } from "react-router-dom";
import Header from "./Components/Home/Header";
import LatestNews from "./Components/Home/LatestNews";
import Navbar from "./Components/Home/Navbar";
import LeftNavbar from "./Components/layout-component/LeftNavbar";
import RightNav from "./Components/layout-component/RightNav";

function App() {
  return (
    <div className="text-dark03">
      <header>
        <Header></Header>
        <section className="w-11/12 mx-auto ">
          <LatestNews></LatestNews>
        </section>
      </header>
      <nav className="w-11/12 mx-auto py-2">
        <Navbar></Navbar>
      </nav>
      <main className="w-11/12 mx-auto pt-5 grid md:grid-cols-12 gap-3">
        <aside className="left col-span-3">
          <LeftNavbar></LeftNavbar>
        </aside>
        <section className="col-span-6">
          <Outlet></Outlet>
        </section>
        <aside className="col-span-3">
          <RightNav></RightNav>
        </aside>
      </main>
    </div>
  );
}

export default App;
