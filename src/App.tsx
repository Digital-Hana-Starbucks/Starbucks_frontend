import { QueryClient, QueryClientProvider } from "react-query";
import { Outlet } from "react-router-dom";
import "./App.css";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}

export default App;
