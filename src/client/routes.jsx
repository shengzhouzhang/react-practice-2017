import React from 'react';
import ReactDOM from 'react-dom';
import page from 'page';
import Listings from '../components/Listings';
import Admin from '../components/Admin';

page('/listings/create', () => {
  console.log('create!!');
  const container = document.querySelector('.app-container');
  ReactDOM.render(container, <Admin />);
});

page('/listings', () => {
  console.log('listings!!');
  const container = document.querySelector('.app-container');
  ReactDOM.render(container, <Listings />);
});
