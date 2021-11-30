import ".//style/app.scss";
import Carousel from "./components/carousel/Carousel";
import Navbar from "./components/navbar/Navbar";
import ListPost from "./components/posts/ListPost";
import SidebarNotification from "./components/sidebar/SidebarNotification";

function App() {
  return (
    <>
      <Navbar />
      <div className="Main-Container">
        <div className="Main-Container--grid">
          <div>
            <Carousel />
            <ListPost />
          </div>
          <div>
            <SidebarNotification />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
