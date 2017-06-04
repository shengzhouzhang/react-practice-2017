import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Admin from '../../components/Admin';
// import ListingService from '../services/ListingService';
// import log from '../../utils/log';

export default function AdminRoute(req, res) {
  res.render('index', {
    html: ReactDOMServer.renderToString(<Admin />),
    data: null,
  });
}
