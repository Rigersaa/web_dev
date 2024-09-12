import React from 'react';
import '../styles/Sort.css';

interface SortingProps {
  sortType: string;
  setSortType: React.Dispatch<React.SetStateAction<string>>;
}

const Sorting: React.FC<SortingProps> = ({ sortType, setSortType }) => {
  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortType(e.target.value);
  };

  return (
    <div className="sorting">
      <label htmlFor="sort">Sort by:</label>
      <select id="sort" value={sortType} onChange={handleSortChange}>
        <option value="alphabetically">Alphabetically</option>
        <option value="price-low-to-high">Price: Low to High</option>
        <option value="price-high-to-low">Price: High to Low</option>
      </select>
    </div>
  );
};

export default Sorting;
