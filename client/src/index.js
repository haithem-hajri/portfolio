import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SkeletonTheme } from "react-loading-skeleton";
const queryClient = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <QueryClientProvider client={queryClient}>
    <SkeletonTheme baseColor="#D3D3D3" highlightColor="#525252">
      <App />
    </SkeletonTheme>
  </QueryClientProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
