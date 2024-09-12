import React from 'react';

interface PaginationProps {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

const Pagination: React.FC<PaginationProps> = ({ page, setPage }) => {
  const handlePrev = () => setPage(prev => Math.max(prev - 1, 1));
  const handleNext = () => setPage(prev => prev + 1);

  return (
    <div className="pagination">
      <button onClick={handlePrev} disabled={page <= 1}>Previous</button>
      <span>Page {page}</span>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default Pagination;
