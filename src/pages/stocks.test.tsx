import { render, screen } from "@testing-library/react";
import { Stocks } from "./stocks";

jest.mock("../utils/stocks.ts", () => ({
  useStocks: () => ({
    data: {
      data: [
        {
          id: 1,
          company_id: 1,
          name: "Mock Stock Name",
          symbol: "MS",
          country: "US",
          exchange: "NYSE",
          currency: "USD",
          score: {
            data: {
              value: 5,
              future: 3,
              past: 4,
              health: 2,
              income: 1,
              total: 15,
            },
          },
        },
        {
          id: 2,
          company_id: 2,
          name: "A Second Mock Stock Name",
          symbol: "CT",
          country: "US",
          exchange: "NYSE",
          currency: "USD",
          score: {
            data: {
              value: 4,
              future: 2,
              past: 3,
              health: 1,
              income: 0,
              total: 10,
            },
          },
        },
      ],
      meta: {
        total_records: 2,
      },
    },
    isLoading: false,
  }),
}));

describe("Stocks component", () => {
  test("Renders stock tiles", async () => {
    render(<Stocks />);

    expect(
      screen.getByRole("heading", { name: "Mock Stock Name" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "A Second Mock Stock Name" }),
    ).toBeInTheDocument();
  });
});
