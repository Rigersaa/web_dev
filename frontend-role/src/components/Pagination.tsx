import React from 'react';

interface PaginationProps {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

const Pagination: React.FC<PaginationProps> = ({ page, setPage }) => {
  return (
    <div className="pagination">
      <button onClick={() => setPage(page - 1)} disabled={page === 1}>
        Prev
      </button>
      <span>{page}</span>
      <button onClick={() => setPage(page + 1)} disabled={page === Math.ceil(20 / 6)}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
