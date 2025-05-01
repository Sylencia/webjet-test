import { useShallow } from 'zustand/shallow';
import { Filter, Header, HotelListing } from './components';
import { useHotelStore } from './stores/useHotelStore';

const App = () => {
  const { hotels, nameFilter, qualityFilter } = useHotelStore(
    useShallow((state) => ({
      hotels: state.hotels,
      nameFilter: state.nameFilter,
      qualityFilter: state.qualityFilter,
    })),
  );

  const filteredHotels = hotels.filter((hotel) => {
    const matchesName = hotel.name.toLowerCase().includes(nameFilter.toLowerCase());
    const matchesQuality =
      qualityFilter.length === 0 ||
      qualityFilter.some((quality) => hotel.rating >= quality && hotel.rating < quality + 1);
    return matchesName && matchesQuality;
  });

  return (
    <>
      <div className="mx-auto min-h-screen w-full bg-white lg:max-w-6xl lg:min-w-[62rem]">
        <Header />
        <div className="flex flex-col p-4">
          <h1 className="text-webjet-red my-2 text-2xl font-semibold">
            {filteredHotels.length} {filteredHotels.length !== 1 ? 'Hotels' : 'Hotel'} Available in Melbourne
          </h1>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
            <Filter />
            <div className="space-y-4 lg:col-span-3">
              {filteredHotels.map((hotel) => (
                <HotelListing hotel={hotel} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
