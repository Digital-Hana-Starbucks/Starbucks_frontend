import { QueryClient, QueryClientProvider } from "react-query";
import { Outlet } from "react-router-dom";
import "./App.css";
import { BasketProvider } from "./context/basketContext";

const queryClient = new QueryClient();

function App() {
  return (
    <BasketProvider>
      <QueryClientProvider client={queryClient}>
        <Outlet />
      </QueryClientProvider>
    </BasketProvider>
  );
}

export default App;
