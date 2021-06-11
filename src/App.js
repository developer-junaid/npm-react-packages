import React from "react";
import { useReactCountdown } from "./hooks/use-react-countdown";

function App() {
  // Date in format (Month DD, YYYY hh:mm:ss)
  const { days, hours, minutes, seconds } = useReactCountdown(
    "July 22, 2021 00:00:00"
  );

  return (
    <div className="App">
      <h1>My npm packages</h1>
      <button>
        Time: {days} {hours} {minutes} {seconds}
      </button>
    </div>
  );
}

export default App;
