const Pagination = ({ page, lastPage, setPage }) => {
  const scrollTop = () => {
    scrollTo({
      behavior: "smooth",
      top: 0,
    });
  };

  const handlePrevPage = () => {
    setPage((nextPage) => nextPage - 1);
    scrollTop();
  };

  const handleNextPage = () => {
    setPage((prevPage) => prevPage + 1);
    scrollTop();
  };

  return (
    <div className="flex justify-center items-center gap-3 py-8">
      {page <= 1 ? null : (
        <button
          onClick={handlePrevPage}
          className="text-color-accent font-medium"
        >
          Prev
        </button>
      )}
      <p>
        {page} of {lastPage}
      </p>

      {page >= lastPage ? null : (
        <button
          onClick={handleNextPage}
          className="text-color-accent font-medium"
        >
          Next
        </button>
      )}
    </div>
  );
};

export default Pagination;
