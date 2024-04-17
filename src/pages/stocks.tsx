import { useEffect, useState } from "react";
import { StocksHeader } from "../components/stocks-header/stocks-header";
import { StockList } from "../components/stock-list/stock-list";
import { PageSelect } from "../components/page-select/page-select";
import { useStocks } from "../utils/stocks";
import { STOCKS_PER_PAGE } from "../constants/stocks";
import { StockListLoading } from "../components/stock-list/stock-list-loading";

function Stocks() {
  const [country, setCountry] = useState("AU");
  const [sortOrder, setSortOrder] = useState("desc");
  const [page, setPage] = useState(1);
  const [maxPage, setMaxPage] = useState(1);

  const { data, isLoading } = useStocks({ country, sortOrder, page });

  useEffect(() => {
    setPage(1);
  }, [country, sortOrder]);

  useEffect(() => {
    if (data && data.meta) {
      const totalRecords = data.meta.total_records || 0;
      setMaxPage(Math.ceil(totalRecords / STOCKS_PER_PAGE));
    }
  }, [data]);

  return (
    <div>
      <StocksHeader setCountry={setCountry} setSortOrder={setSortOrder} />
      {!isLoading && data?.data ? (
        <StockList stocks={data.data} />
      ) : (
        <StockListLoading />
      )}
      <PageSelect currentPage={page} maxPage={maxPage} setPage={setPage} />
    </div>
  );
}

export { Stocks };
