import React from "react";
import axios from "axios";
import { useState } from "react";
import TableCoins from "./components/TableCoins";
import { useQuery, QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnmount: false,
      refetchOnReconnect: false,
      retry: true,
      staleTime: 10000,
    },
  },
});
export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <App1 />
      <ReactQueryDevtools initialIsOpen={true} />
    </QueryClientProvider>
  );
}

function App1() {
  const [search, setSearch] = useState("");
  const { status, data, isLoading } = useQuery(
    "coins",
    async ({ pageParam = 0 }) => {
      const res = await axios.get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=30&page=1&sparkline=false"
      );
      return res.data;
    }
  );

  if (status === "loading") return <p>Loading ...</p>;
  if (status === "error") return <p>Something went wrong ...</p>;
  return (
    <div className="container">
      <div className="row">
        <input
          type="text"
          placeholder="Search a Coin"
          className="form-control bg-dark text-light border-0 mt-4 text-center"
          autoFocus
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <hr />
      <TableCoins coins={data} search={search} />
      <ReactQueryDevtools initialIsOpen />
    </div>
  );
}
