import React from "react";
import "./App.css";
import { GlobalStyles } from "./styles/globalStyles";
import MYRoutes from "./routes/router";

function App() {
  React.useEffect(() => {
    if (!("process" in window)) {
      window.process = {
        ...window.process,
      };
    }
  }, []);

  return (
    <div className="App">
      <GlobalStyles />
      <MYRoutes />
    </div>
  );
}

export default App;
