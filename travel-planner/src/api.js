const AMADEUS_API_KEY = 'ipvBSTDRtiJ4AEwc4cnfmcuWfKA0jy4e';

export const fetchDestinations = async (query) => {
  const response = await fetch(
    `https://test.api.amadeus.com/v1/reference-data/locations?keyword=${query}&subType=CITY`,
    {
      headers: {
        Authorization: `Bearer ${AMADEUS_API_KEY}`,
      },
    }
  );
  const data = await response.json();
  return data.data || [];
};

export const fetchFlightOffers = async (origin, destination, date) => {
  const response = await fetch(
    `https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=${origin}&destinationLocationCode=${destination}&departureDate=${date}&adults=1`,
    {
      headers: {
        Authorization: `Bearer ${AMADEUS_API_KEY}`,
      },
    }
  );
  const data = await response.json();
  return data.data || [];
};

export const fetchHotels = async (cityCode) => {
  const response = await fetch(
    `https://test.api.amadeus.com/v2/shopping/hotel-offers?cityCode=${cityCode}`,
    {
      headers: {
        Authorization: `Bearer ${AMADEUS_API_KEY}`,
      },
    }
  );
  const data = await response.json();
  return data.data || [];
};
