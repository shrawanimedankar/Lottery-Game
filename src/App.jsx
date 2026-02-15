import Lottery from "./Lottery.jsx";
import {winCondition } from "./helper";

function App() {
  return (
    <>
      <Lottery n={3} winCondition={winCondition} />
    </>
  );
}

export default App;
