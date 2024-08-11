import React from 'react';

const FilterByPriceRange = () => {
    return (
        <div>
          <h3 className="font-bold text-lg">Price Range</h3>
          <form action="" className="flex flex-col gap-2 mt-2">
            <label for="range1">
              <input type="checkbox" name="range1" id="range1" />$ 13 - $ 30
            </label>

            <label for="range2">
              <input type="checkbox" name="range2" id="range2" />$ 30 - $ 60
            </label>

            <label for="range3">
              <input type="checkbox" name="range3" id="range3" />$ 60 - $ 97
            </label>

            <label for="range3">
              <input type="checkbox" name="range3" id="range3" />$ 97 - $ 152
            </label>

            <label for="range4">
              <input type="checkbox" name="range4" id="range4" />$ 152 - $ 182
            </label>

            <label for="range5">
              <input type="checkbox" name="range5" id="range5" />$ 182+
            </label>
          </form>
        </div>
    );
};

export default FilterByPriceRange;