import React from 'react';
import ReactDOMServer from 'react-dom/server';
import ListingList from '../../components/ListingList';
import fetchListings from '../../repositories/fetchListings';
import log from '../../utils/log';

export default function ListingListRoute(req, res) {
  return fetchListings()
    .then((data) => {
      res.render('index', {
        html: ReactDOMServer.renderToString(<ListingList items={data} />),
        data: JSON.stringify(data),
      });
    })
    .catch(err => log.error(err));
}
