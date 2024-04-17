import { Stock } from "../../utils/stocks";
import { SnowflakeChart } from "../snowflake-chart/snowflake-chart";
import styles from "./tile.module.css";

function Tile({ stock }: { stock?: Stock }) {
  return (
    <div className={styles.tile}>
      {stock ? (
        <div className={styles["tile-content"]}>
          <h2>{stock.name}</h2>
          <p>{stock.unique_symbol}</p>
          <SnowflakeChart scores={stock.score.data} />
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export { Tile };
