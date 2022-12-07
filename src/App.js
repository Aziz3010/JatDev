import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Sidebar from "./Components/Sidebar/Sidebar";
import View from "./Routers/Router";

const App = () => {
  return (
    <>
      <Navbar />
      <Sidebar />
      <main>
        <View />
      </main>
    </>
  );
};

export default App;
