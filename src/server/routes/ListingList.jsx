import React from 'react';
import ReactDOMServer from 'react-dom';
import ListingList from '../../components/ListingList';
import fetchListings from '../../repositories/fetchListings';

export default function ListingListRoute(req, res) {
  return fetchListings()
    .then((data) => {
      res.render('index', {
        html: ReactDOMServer.renderToString(<ListingList items={data} />),
        data: JSON.stringify(),
      });
    })
    .catch(err => console.error(err));
}
