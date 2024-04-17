import { Tile } from "../tile/tile";
import styles from "./stock-list.module.css";
import { Stock } from "../../utils/stocks";

function StockList({ stocks }: { stocks: Stock[] }) {
  return (
    <div className={styles.container}>
      {stocks.map((stock: Stock) => (
        <Tile key={stock.company_id} stock={stock} />
      ))}
    </div>
  );
}

export { StockList };
