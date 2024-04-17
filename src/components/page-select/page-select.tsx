function PageSelect({
  currentPage,
  maxPage,
  setPage,
}: {
  currentPage: number;
  maxPage: number;
  setPage: (page: number) => void;
}) {
  return (
    <div
      style={{
        height: "2em",
        width: "100%",
        backgroundColor: "rgb(21, 27, 36)",
      }}
    >
      <button
        onClick={() => setPage(Math.max(currentPage - 1, 1))}
        aria-label="Previous page button"
      >
        {"<"}
      </button>
      <span>{currentPage}</span>
      <button
        onClick={() => setPage(Math.min(currentPage + 1, maxPage))}
        aria-label="Next page button"
      >
        {">"}
      </button>
    </div>
  );
}

export { PageSelect };
