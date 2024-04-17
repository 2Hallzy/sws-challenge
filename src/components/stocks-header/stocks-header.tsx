import styles from "./stocks-header.module.css";

interface StocksHeaderProps {
  setCountry: (code: string) => void;
  setSortOrder: (order: string) => void;
}

// I copied a few from the dropdown, if there was a simpler way to get them I missed it.
const countries = [
  { name: "Global", code: "GLOBAL", flag: "🌎" },
  { name: "United States", code: "US", flag: "🇺🇸" },
  { name: "Australia", code: "AU", flag: "🇦🇺" },
  { name: "United Kingdom", code: "GB", flag: "🇬🇧" },
  { name: "Canada", code: "CA", flag: "🇨🇦" },
  { name: "India", code: "IN", flag: "🇮🇳" },
  { name: "China", code: "CN", flag: "🇨🇳" },
  { name: "Argentina", code: "AR", flag: "🇦🇷" },
];

function StocksHeader({ setCountry, setSortOrder }: StocksHeaderProps) {
  return (
    <header>
      <h1>Stocks</h1>
      <div className={styles.container}>
        <select
          defaultValue={"AU"}
          onChange={(e) => setCountry(e.target.value)}
          className={styles.select}
          aria-label="Select country input"
        >
          {countries.map((country) => (
            <option
              key={country.code}
              value={country.code}
              aria-label={country.name}
            >
              {country.flag} {country.name}
            </option>
          ))}
        </select>
        <select
          onChange={(e) => setSortOrder(e.target.value)}
          className={styles.select}
          aria-label="Select sort order input"
        >
          <option value={"desc"}>Market Cap High to Low</option>
          <option value={"asc"}>Market Cap Low to High</option>
        </select>
      </div>
    </header>
  );
}

export { StocksHeader };
