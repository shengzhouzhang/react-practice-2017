import React from 'react';
import ReactDOM from 'react-dom';
import page from 'page';
import Listings from '../components/Listings';
import Admin from '../components/Admin';

page('/listings/create', () => {
  const container = document.querySelector('.app-container');
  ReactDOM.render(<Admin />, container);
});

page('/listings', () => {
  const container = document.querySelector('.app-container');
  const data = JSON.parse(document.querySelector('.initial-state').text);
  ReactDOM.render(<Listings items={data} />, container);
});

export default {
  start: () => page(),
};
