import { useState } from 'react';
import { useHotelStore } from '../stores/useHotelStore';
import { Accordion } from './Accordion';

export const Filter = () => {
  const [hotelInput, setHotelInput] = useState<string>('');
  const setNameFilter = useHotelStore((state) => state.setNameFilter);

  const onFilter = (e: React.FormEvent) => {
    e.preventDefault();

    setNameFilter(hotelInput);
  };

  return (
    <div className="hidden rounded-lg bg-gray-100 p-4 lg:block">
      <h2 className="mb-4 font-semibold">Filter Results</h2>
      <hr />
      <Accordion title="Hotel Name">
        <div className="ml-3 flex">
          <form onSubmit={onFilter}>
            <input
              className="h-10 w-3/4 rounded rounded-tr-none rounded-br-none border border-r-0 border-gray-300 p-2"
              placeholder="Enter Hotel Name"
              value={hotelInput}
              onChange={(e) => setHotelInput(e.target.value)}
            />
            <button
              className="h-10 w-1/4 cursor-pointer rounded rounded-tl-none rounded-bl-none bg-gray-300 text-gray-600"
              onClick={onFilter}
              type="submit"
            >
              Go
            </button>
          </form>
        </div>
      </Accordion>
      <hr />
      <Accordion title="Quality Rating">test</Accordion>
    </div>
  );
};
