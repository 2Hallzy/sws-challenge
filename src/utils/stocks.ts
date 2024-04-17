// import { queryCache } from "@tanstack/react-query";
import { useQuery } from "@tanstack/react-query";
import { STOCKS_PER_PAGE } from "../constants/stocks";

const API_URL = "https://simplywall.st/api";

interface StockFilters {
  country: string;
  sortOrder: string;
  page: number;
}

interface Stock {
  id: number;
  company_id: number;
  name: string;
  unique_symbol: string;
  score: {
    data: {
      value: number;
      future: number;
      past: number;
      health: number;
      income: number;
      total: number;
    };
  };
}

interface ApiResponse {
  data: Stock[];
  meta: { total_records: number };
}
async function fetchStocks(filters: StockFilters): Promise<ApiResponse> {
  const rules: any[] = [
    ["order_by", "market_cap", filters.sortOrder],
    ["grid_visible_flag", "=", true],
    ["market_cap", "is_not_null"],
    ["primary_flag", "=", true],
    ["is_fund", "=", false],
  ];
  if (filters.country !== "GLOBAL") {
    rules.push(["aor", [["country_name", "in", [filters.country]]]]);
  }

  const config = {
    method: "POST",
    body: JSON.stringify({
      id: 1,
      no_result_if_limit: false,
      offset: STOCKS_PER_PAGE * (filters.page - 1),
      size: STOCKS_PER_PAGE,
      state: "read",
      rules: JSON.stringify(rules),
    }),
    headers: {
      sws: "fe-challenge",
      "Content-Type": "application/json",
    },
  };

  const response = await window.fetch(
    `${API_URL}/grid/filter?include=grid,score`,
    config,
  );
  if (!response.ok) {
    throw new Error("Failed to fetch stocks");
  }
  return response.json();
}

function useStocks(filters: StockFilters) {
  return useQuery({
    queryKey: ["stocks", filters],
    queryFn: () => fetchStocks(filters),
  });
}

export { useStocks };
export type { Stock, ApiResponse };
