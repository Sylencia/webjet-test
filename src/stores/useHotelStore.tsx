import { create } from 'zustand';
import { HotelListingType } from '../types/types';

const mockHotelListings: HotelListingType[] = [
  {
    name: 'Grand Plaza Hotel',
    imageUrl: 'https://hotelimages.webjet.com.au/lodging/1000000/850000/845400/845390/e394a620_z.jpg',
    rating: 4.5,
    roomType: 'Studio Apartment (No Housekeeping)',
    price: 449,
  },
  {
    name: 'Oceanview Resort',
    imageUrl: 'https://hotelimages.webjet.com.au/lodging/1000000/570000/564500/564404/3398b9cd_z.jpg',
    rating: 3.0,
    roomType: 'Ocean View Room, Non Smoking',
    price: 229,
  },
  {
    name: 'Express Inn Melbourne',
    imageUrl: 'https://hotelimages.webjet.com.au/hotels/1000000/850000/845400/845390/0259fb01_z.jpg',
    rating: 2.5,
    roomType: 'Standard Room',
    price: 182,
  },
  {
    name: 'Crowne Plaza Melbourne',
    imageUrl: 'https://hotelimages.webjet.com.au/hotels/1000000/460000/451200/451160/a1830e51_z.jpg',
    rating: 4.0,
    roomType: 'Deluxe King Room',
    price: 401,
  },
  {
    name: 'Next Hotel Melbourne',
    imageUrl: 'https://hotelimages.webjet.com.au/lodging/1000000/30000/23800/23775/0a626b13_z.jpg',
    rating: 4.0,
    roomType: 'King Room',
    price: 180,
  },
];

interface HotelState {
  hotels: HotelListingType[];
  nameFilter: string;
  qualityFilter: number[];
  getFilteredHotels: () => HotelListingType[];
}

export const useHotelStore = create<HotelState>((set, get) => ({
  hotels: mockHotelListings,
  nameFilter: '',
  qualityFilter: [],
  getFilteredHotels: () => {
    const { hotels, nameFilter, qualityFilter } = get();

    const matchesName = (hotel: HotelListingType) => hotel.name.toLowerCase().includes(nameFilter.toLowerCase());

    const matchesQuality = (hotel: HotelListingType) =>
      qualityFilter.length === 0 ||
      qualityFilter.some((quality) => hotel.rating >= quality && hotel.rating < quality + 1);

    return hotels.filter((hotel) => matchesName(hotel) && matchesQuality(hotel));
  },
}));
