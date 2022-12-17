import React, { useEffect, useState } from "react";

function Header() {
  const [clockState, setClockState] = useState();
  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      const options = {
        weekday: "long",
        day: "numeric",
        month: "long"
      };
      setClockState(date.toLocaleDateString("en-US", options));
    }, 1000);
  }, []);
  return (
    <header>
      <h1>{clockState}</h1>
    </header>
  );
}

export default Header;
