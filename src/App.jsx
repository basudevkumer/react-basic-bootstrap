// import { useState } from "react";

// function App() {
//   return <></>;
// }

// export default App;

import React from "react";
import Menu from "./component/Menu";
import Title from "./component/Title";
import Team from "./component/Team";
import Client from "./component/Client";
import From from "./component/From";
import Footer from "./component/Footer";

function App() {
  return (
    <>
      <Menu />
      <Title />
      <Team />
      <Client />
      <From/>
      <Footer/>
    </>
  );
}

export default App;
