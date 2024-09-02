import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { AppGlobalContext } from "./context.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppGlobalContext>
      <App />
    </AppGlobalContext>
  </StrictMode>
);
