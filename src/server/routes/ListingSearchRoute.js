import serverSideRender from '../serverSideRender';
import Listings from '../../components/Listings';
import ListingService from '../services/ListingService';
import log from '../../utils/log';

export default function ListingSearchRoute(req, res) {
  return ListingService.fetchListings()
    .then(data => serverSideRender(res, Listings, { items: data }))
    .catch(err => log.error(err));
}
