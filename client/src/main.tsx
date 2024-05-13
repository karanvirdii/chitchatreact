import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "stream-chat-react/dist/css/index.css"

const queryClent = new QueryClient()

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClent}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>,
);