import { Filter, Header, HotelListing } from './components';
import { useHotelStore } from './stores/useHotelStore';

const App = () => {
  const getFilteredHotels = useHotelStore((state) => state.getFilteredHotels);

  return (
    <>
      <div className="mx-auto min-h-screen w-full bg-white lg:max-w-[62rem]">
        <Header />
        <div className="flex flex-col p-4">
          <h1 className="text-webjet-red my-2 text-2xl font-semibold">3 Hotels Available in Melbourne</h1>
          <div className="flex flex-row">
            <Filter />
            <div className="flex flex-1 flex-col gap-4">
              {getFilteredHotels().map((hotel) => (
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
