import PropTypes from 'prop-types';

const DestinationDetails = ({ destination, flightOffers, hotelOffers }) => {
  return (
    <div className="destination-details">
      <h2 className="text-3xl">{destination.cityName}</h2>
      <p>Country: {destination.countryName}</p>
      <h3>Top Attractions</h3>
      <ul>
        {destination.topAttractions && destination.topAttractions.map((attraction, index) => (
          <li key={index}>{attraction}</li>
        ))}
      </ul>

      <h3>Flight Offers</h3>
      <ul>
        {flightOffers && flightOffers.map((offer, index) => (
          <li key={index}>
            {offer.price} - {offer.airline}
          </li>
        ))}
      </ul>

      <h3>Hotel Offers</h3>
      <ul>
        {hotelOffers && hotelOffers.map((hotel, index) => (
          <li key={index}>
            {hotel.name} - {hotel.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

// Add PropTypes validation
DestinationDetails.propTypes = {
  destination: PropTypes.shape({
    cityName: PropTypes.string.isRequired,
    countryName: PropTypes.string.isRequired,
    topAttractions: PropTypes.arrayOf(PropTypes.string).isRequired, // Assuming attractions are strings
  }).isRequired,
  flightOffers: PropTypes.arrayOf(
    PropTypes.shape({
      price: PropTypes.string.isRequired,
      airline: PropTypes.string.isRequired,
    })
  ).isRequired,
  hotelOffers: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default DestinationDetails;
