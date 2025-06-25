import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./src/assets/css/reset.css";
import "./src/assets/css/index.css";

import App from "./src/App";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </StrictMode>
);
