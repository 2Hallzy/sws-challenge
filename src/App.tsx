import "./App.css";
import { Stocks } from "./pages/stocks";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  return (
    <QueryClientProvider client={new QueryClient()}>
      <div className="App">
        <Stocks />
      </div>
    </QueryClientProvider>
  );
}

export default App;
