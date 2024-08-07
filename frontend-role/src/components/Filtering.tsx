import React from 'react';

interface FilteringProps {
  setFilterCategory: React.Dispatch<React.SetStateAction<string>>;
  setFilterPrice: React.Dispatch<React.SetStateAction<number | ''>>;
}

const Filtering: React.FC<FilteringProps> = ({ setFilterCategory, setFilterPrice }) => {
  return (
    <div className="filtering">
      <label>Category: </label>
      <select onChange={(e) => setFilterCategory(e.target.value)}>
        <option value="">All</option>
        <option value="people">People</option>
        <option value="food">Food</option>
        <option value="landmarks">Landmarks</option>
      </select>
      <label>Max Price: </label>
      <input type="number" onChange={(e) => setFilterPrice(Number(e.target.value) || '')} />
    </div>
  );
};

export default Filtering;
