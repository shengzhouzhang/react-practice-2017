import serverSideRender from '../serverSideRender';
import Admin from '../../components/Admin';
import ListingService from '../services/ListingService';
import log from '../../utils/log';

export function CreateListingRoute(req, res) {
  serverSideRender(res, Admin);
}

export function CreateListingApiRoute(req, res) {
  ListingService.createListing(req.body)
    .then(() => res.status(201).send())
    .catch((err) => {
      log.error('failed to create listing', err);
      res.status(500).send();
    });
}
