import React from "react";
import { Outlet } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";
import { BasketProvider } from "./hooks/basketContext";

const queryClient = new QueryClient();

function App() {
  return (
    <React.StrictMode>
      <BasketProvider>
        <QueryClientProvider client={queryClient}>
          <Outlet />
        </QueryClientProvider>
      </BasketProvider>
    </React.StrictMode>
  );
}

export default App;
