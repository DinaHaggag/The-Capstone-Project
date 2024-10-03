import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const ItineraryPlanner = ({ selectedDestination }) => {
  const [itinerary, setItinerary] = useState(() => {
    const savedItinerary = localStorage.getItem('itinerary');
    return savedItinerary ? JSON.parse(savedItinerary) : [];
  });

  useEffect(() => {
    localStorage.setItem('itinerary', JSON.stringify(itinerary));
  }, [itinerary]);

  const addToItinerary = (item) => {
    setItinerary([...itinerary, item]);
  };

  const removeFromItinerary = (index) => {
    const updated = itinerary.filter((_, i) => i !== index);
    setItinerary(updated);
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl">Your Itinerary</h2>
      
      {/* Display the itinerary */}
      <ul>
        {itinerary.map((item, idx) => (
          <li key={idx} className="my-2">
            {item.destination} - {item.date}
            <button onClick={() => removeFromItinerary(idx)} className="ml-4 text-red-500">Remove</button>
          </li>
        ))}
      </ul>

      {/* Add to itinerary button */}
      {selectedDestination && (
        <button
          onClick={() => addToItinerary({ destination: selectedDestination.cityName, date: '2024-10-01' })}
          className="bg-blue-500 text-white px-4 py-2 mt-4 rounded"
        >
          Add {selectedDestination.cityName} to Itinerary
        </button>
      )}
    </div>
  );
};

// Add PropTypes validation
ItineraryPlanner.propTypes = {
  selectedDestination: PropTypes.shape({
    cityName: PropTypes.string.isRequired, // Ensure cityName is a string and required
  }),
};

export default ItineraryPlanner;
