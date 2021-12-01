import React from "react";
import "../src/style/app.scss";
import Nav from "./components/Nav";
import Status from "./components/Status";
import ListPost from "./components/ListPost";
import Content from "./components/Content";

function App() {
  return (
    <>
      <Nav />
      <div className="Main-Container">
        <div className="Main-Container--grid">
          <div>
            <Status />
            <ListPost />
          </div>
          <div>
              <Content />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
