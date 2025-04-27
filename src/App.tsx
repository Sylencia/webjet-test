import { Filter, Header, HotelListing } from './components';

const App = () => {
  return (
    <>
      <div className="mx-auto min-h-screen w-full bg-white lg:max-w-[62rem]">
        <Header />
        <div className="flex flex-col p-4">
          <h1 className="text-webjet-red my-2 text-2xl font-semibold">3 Hotels Available in Melbourne</h1>
          <div className="flex flex-row">
            <Filter />
            <div className="flex flex-col">
              <HotelListing />
              <HotelListing />
              <HotelListing />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
