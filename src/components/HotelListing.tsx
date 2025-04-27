import { HotelListingType } from '../types/types';
import { Rating } from './Rating';

export const HotelListing = ({ hotel }: { hotel: HotelListingType }) => {
  return (
    <div className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
      <div className="flex flex-col p-1 md:flex-row">
        <div className="md:w-[40%]">
          <img src={hotel.imageUrl} alt={`Image of ${hotel.name}`} className="h-40 w-full object-cover" />
        </div>
        <div className="flex h-full flex-1 flex-row justify-between md:h-auto">
          <div className="p-2">
            <h3 className="text-lg font-semibold">{hotel.name}</h3>
            <div className="mt-1 flex">
              <Rating rating={hotel.rating} />
            </div>
            <p className="mt-2 hidden text-sm text-gray-600 md:block">
              <b>Room type:</b> {hotel.roomType}
            </p>
          </div>
          <div className="flex flex-row">
            <div className="flex max-w-30 min-w-24 items-center justify-end bg-gray-200 pr-2 md:mt-0">
              <p className="text-2xl font-bold">${hotel.price}</p>
            </div>
            <button className="w-8 cursor-pointer bg-green-600 text-xs text-white md:hidden">▶</button>
          </div>
        </div>
      </div>
    </div>
  );
};
