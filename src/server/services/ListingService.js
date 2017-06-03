import ListingDAO from '../dao/ListingDAO';

function fetchListings(query = {}) {
  return ListingDAO.fetchListings(query)
    .then(listings => listings.map(listing => (
      {
        id: listing._id, // eslint-disable-line no-underscore-dangle
        branding: listing.branding,
        mainPhoto: listing.mainPhoto,
        propertyDetails: listing.propertyDetails,
      }
    )));
}

export default {
  fetchListings,
};
