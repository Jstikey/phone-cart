import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter as Router } from "react-router-dom";
import { GlobalContext } from "./contextFolder/context.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GlobalContext>
      <Router>
        <App />
      </Router>
    </GlobalContext>
  </StrictMode>
);
