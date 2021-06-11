import React from "react";
import ReactCountdown from "./components/other/ReactCountdown";
import { useReactCountdown } from "use-react-countdown";

function App() {
  // Date in format (Month DD, YYYY hh:mm:ss)
  const { days, hours, minutes, seconds } = useReactCountdown(
    "July 22, 2021 00:00:00"
  );

  return (
    <ReactCountdown
      days={days}
      hours={hours}
      minutes={minutes}
      seconds={seconds}
    />
  );
}

export default App;
