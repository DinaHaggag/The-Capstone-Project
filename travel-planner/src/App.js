import { useState } from 'react';
import SearchBar from './components/SearchBar';
import DestinationCard from './components/DestinationCard';
import DestinationDetails from './components/DestinationDetails';
import ItineraryPlanner from './components/ItineraryPlanner';
import { fetchDestinations, fetchFlightOffers, fetchHotels } from './api';

const App = () => {
  const [destinations, setDestinations] = useState([]);
  const [selectedDestination, setSelectedDestination] = useState(null);
  const [flightOffers, setFlightOffers] = useState([]);
  const [hotelOffers, setHotelOffers] = useState([]);

  const handleSearch = async (query) => {
    try {
      const results = await fetchDestinations(query);
      setDestinations(results);
    } catch (error) {
      console.error('Error fetching destinations:', error);
    }
  };

  const handleSelectDestination = async (destination) => {
    setSelectedDestination(destination);
    const flights = await fetchFlightOffers('LON', destination.code, '2024-10-01');
    const hotels = await fetchHotels(destination.code);
    setFlightOffers(flights);
    setHotelOffers(hotels);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <div className="grid grid-cols-3 gap-4 p-4">
        {destinations.map((dest, idx) => (
          <DestinationCard key={idx} destination={dest} onClick={() => handleSelectDestination(dest)} />
        ))}
      </div>

      {selectedDestination && (
        <DestinationDetails destination={selectedDestination} flightOffers={flightOffers} hotelOffers={hotelOffers} />
      )}

      <ItineraryPlanner />
    </div>
  );
};

export default App;
