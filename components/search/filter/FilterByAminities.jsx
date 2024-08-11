import React from 'react';

const FilterByAminities = () => {
    return (
        <div>
          <h3 className="font-bold text-lg">Amenities</h3>
          <form action="" className="flex flex-col gap-2 mt-2">
            <label for="wifi">
              <input type="checkbox" name="wifi" id="wifi" />
              Wi-fi
            </label>

            <label for="swimmingPool">
              <input type="checkbox" name="swimmingPool" id="swimmingPool" />
              Swimming Pool
            </label>
          </form>
        </div>
    );
};

export default FilterByAminities;