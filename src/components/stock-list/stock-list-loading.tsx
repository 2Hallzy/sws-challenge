import { STOCKS_PER_PAGE } from "../../constants/stocks";
import { Tile } from "../tile/tile";
import styles from "./stock-list.module.css";

function StockListLoading() {
  return (
    <div className={styles.container}>
      {Array.from({ length: STOCKS_PER_PAGE }, (_, index) => (
        <Tile key={index} />
      ))}
    </div>
  );
}

export { StockListLoading };
