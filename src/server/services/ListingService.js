import ListingDAO from '../dao/ListingDAO';

function translate(listing) {
  return {
    id: listing._id, // eslint-disable-line no-underscore-dangle
    branding: listing.branding,
    mainPhoto: listing.mainPhoto,
    propertyDetails: listing.propertyDetails,
  };
}

function fetchListings(query = {}) {
  return ListingDAO.fetchListings(query)
    .then(listings => listings.map(translate));
}

function createListing(query = {}) {
  return ListingDAO.createListing(query);
}

export default {
  fetchListings,
  createListing,
};
