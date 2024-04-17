import {
  stockScoresToColour,
  stockScoresToCoordinates,
  StockScores,
} from "../../utils/snowflake-chart";
import styles from "./snowflake-chart.module.css";

function SnowflakeChart({ scores }: { scores: StockScores }) {
  const points = stockScoresToCoordinates(scores);
  const pointsString = points
    .map((point) => {
      return `${point.x},${point.y}`;
    })
    .join(" ");

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      className={styles.snowflake}
    >
      <title id="chart-title">Snowflake score</title>
      <desc id="chart-description">
        A snowflake chart with the following scores. Value {scores.value},
        future {scores.future}, past {scores.past}, health {scores.health},
        dividend {scores.income}, and a total score of {scores.total}
      </desc>
      {/* Background */}
      <circle cx="50" cy="50" r="30" fill="#333333" />
      <circle cx="50" cy="50" r="25" fill="#cccccc" />
      <circle cx="50" cy="50" r="20" fill="#333333" />
      <circle cx="50" cy="50" r="15" fill="#cccccc" />
      <circle cx="50" cy="50" r="10" fill="#333333" />
      <circle cx="50" cy="50" r="5" fill="#cccccc" />

      {/* Lines */}
      <line
        x1="50"
        y1="50"
        x2="50"
        y2="20"
        stroke="#cccccc"
        strokeWidth="1.2"
      />
      <line
        x1="50"
        y1="50"
        x2="78.3"
        y2="40"
        stroke="#cccccc"
        strokeWidth="1.2"
      />
      <line
        x1="50"
        y1="50"
        x2="71"
        y2="71.6"
        stroke="#cccccc"
        strokeWidth="1.2"
      />
      <line
        x1="50"
        y1="50"
        x2="29.1"
        y2="71.6"
        stroke="#cccccc"
        strokeWidth="1.2"
      />
      <line
        x1="50"
        y1="50"
        x2="21.7"
        y2="40"
        stroke="#cccccc"
        strokeWidth="1.2"
      />

      {/* Text */}
      <text
        x="50"
        y="17"
        textAnchor="middle"
        fill="#cccccc"
        fontSize="6"
        fontFamily="monospace"
      >
        VALUE
      </text>
      <text
        x="54"
        y="-63"
        fill="#cccccc"
        transform="rotate(70)"
        fontSize="6"
        fontFamily="monospace"
      >
        FUTURE
      </text>
      <text
        x="0"
        y="108"
        textAnchor="middle"
        fill="#cccccc"
        transform="rotate(-45)"
        fontSize="6"
        fontFamily="monospace"
      >
        PAST
      </text>
      <text
        x="69"
        y="43"
        textAnchor="middle"
        fill="#cccccc"
        transform="rotate(40)"
        fontSize="6"
        fontFamily="monospace"
      >
        HEALTH
      </text>
      <text
        x="-25"
        y="33"
        textAnchor="middle"
        fill="#cccccc"
        transform="rotate(-65)"
        fontSize="6"
        fontFamily="monospace"
      >
        DIVIDEND
      </text>

      {/* Score area */}
      <polygon
        points={pointsString}
        fill={stockScoresToColour(scores)}
        opacity={"75%"}
      />
    </svg>
  );
}

export { SnowflakeChart };
