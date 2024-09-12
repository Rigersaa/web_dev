import React from 'react';

interface FilteringProps {
  setFilterCategory: React.Dispatch<React.SetStateAction<string>>;
  setFilterPrice: React.Dispatch<React.SetStateAction<number | ''>>;
}

const Filtering: React.FC<FilteringProps> = ({ setFilterCategory, setFilterPrice }) => {
  return (
    <div className="filtering">
      // FilterComponent.tsx
<label className="flex items-center">
  <input type="checkbox" className="checkbox mr-2" />
  <span className="text-sm">Category Name</span>
</label>

      <select onChange={(e) => setFilterCategory(e.target.value)}>
        <option value="">All</option>
        <option value="people">People</option>
        <option value="food">Food</option>
        <option value="landmarks">Landmarks</option>
      </select>
      <label>Max Price: </label>
<input
  type="number"
  onChange={(e) => {
    const price = Number(e.target.value);
    setFilterPrice(price > 0 ? price : '');
  }}
/>
    </div>
  );
};

export default Filtering;
