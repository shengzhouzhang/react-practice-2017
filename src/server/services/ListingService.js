import ListingDAO from '../dao/ListingDAO';

function fetchListings(query = {}) {
  return ListingDAO.fetchListings(query);
}

export default {
  fetchListings,
};
