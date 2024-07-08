import { useState } from "react";
import "./App.css";
import FrontPage from "./component/FrontPage";
import GameBox from "./component/GameBox";
function App() {
  const [InitialPage, SetInitialPage] = useState(false);
  const PageChange = () => {
    SetInitialPage(!InitialPage);
  };
  return (
    <>{InitialPage ? <GameBox /> : <FrontPage changeBox={PageChange} />}</>
  );
}

export default App;
