import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { BalanceProvider } from "./context/BalanceContext";
import { TabProvider } from "./context/TabContext";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <TabProvider>
      <BalanceProvider>
        <App />
      </BalanceProvider>
    </TabProvider>
  </StrictMode>
);
