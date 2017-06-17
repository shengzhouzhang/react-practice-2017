import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Listings from '../../components/Listings';
import ListingService from '../services/ListingService';
import log from '../../utils/log';

export default function ListingSearchRoute(req, res) {
  return ListingService.fetchListings()
    .then((data) => {
      res.render('index', {
        html: ReactDOMServer.renderToString(<Listings items={data} />),
        data: JSON.stringify(data),
      });
    })
    .catch(err => log.error(err));
}
