interface RatingProps {
  rating: number;
  maxRating?: number;
}

export const Rating = ({ rating, maxRating = 5 }: RatingProps) => {
  return (
    <div className="flex">
      {[...Array(maxRating)].map((_, i) => {
        const ratingValue = i + 1;
        const isFullDiamond = ratingValue <= Math.floor(rating);
        const isHalfDiamond = Math.floor(rating) < rating && Math.ceil(rating) === ratingValue;

        if (isFullDiamond) {
          return (
            <span key={i} className="text-orange-400">
              ◆
            </span>
          );
        } else if (isHalfDiamond) {
          return (
            <div key={i} className="relative inline-block w-[1em]">
              <div className="absolute top-0 left-0 overflow-hidden text-orange-400" style={{ width: '50%' }}>
                ◆
              </div>
              <div className="absolute top-0 left-0 text-transparent" style={{ textShadow: 'none' }}>
                ◆
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};
