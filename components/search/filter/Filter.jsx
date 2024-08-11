import SortHotel from '@/components/sort/SortHotel';
import FilterByPriceRange from './FilterByPriceRange';
import FilterByStarCategory from './FilterByStarCategory';
import FilterByAminities from './FilterByAminities';


const Filter = () => {
    return (
        <>
      <div className="col-span-3 space-y-4">
        
        <SortHotel/>
        <FilterByPriceRange/>
        <FilterByStarCategory/>
        <FilterByAminities/>
        
      </div>
    </>
    );
};

export default Filter;