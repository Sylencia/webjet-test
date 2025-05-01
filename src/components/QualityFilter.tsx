import { useEffect, useState } from 'react';
import { useHotelStore } from '../stores/useHotelStore';

export const QualityFilter = () => {
  const [selectedRatings, setSelectedRatings] = useState<number[]>([]);
  const [isAllSelected, setIsAllSelected] = useState<boolean>(true);
  const setQualityFilter = useHotelStore((state) => state.setQualityFilter);

  const handleRatingChange = (rating: number) => {
    if (isAllSelected) {
      setSelectedRatings([rating]);
    } else if (selectedRatings.includes(rating)) {
      const newRatings = selectedRatings.filter((r) => r !== rating);
      setSelectedRatings(newRatings);
    } else {
      setSelectedRatings((ratings) => [...ratings, rating]);
    }

    setIsAllSelected(false);
  };

  const handleAllChange = () => {
    if (isAllSelected) {
      setSelectedRatings([]);
    } else {
      setSelectedRatings([2, 3, 4, 5]);
    }

    setIsAllSelected((checked) => !checked);
  };

  useEffect(() => {
    setQualityFilter(selectedRatings);
  }, [setQualityFilter, selectedRatings]);

  return (
    <div className="space-y-2">
      <label className="flex items-center font-medium">
        <input type="checkbox" checked={isAllSelected} onChange={handleAllChange} className="mr-2" />
        <span>All</span>
      </label>
      {[5, 4, 3, 2].map((rating) => (
        <label key={rating} className="flex items-center">
          <input
            type="checkbox"
            checked={!isAllSelected && selectedRatings.includes(rating)}
            onChange={() => handleRatingChange(rating)}
            className="mr-2"
          />
          <div className="flex">
            {[...Array(rating)].map((_, i) => (
              <span key={i} className="text-orange-400">
                ◆
              </span>
            ))}
          </div>
        </label>
      ))}
    </div>
  );
};
