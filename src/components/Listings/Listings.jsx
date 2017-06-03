import React from 'react';
import PropTypes from 'prop-types';
import ListingCard, { ListingCardProps } from './ListingCard';

export default function ListingList({ items = [] }) {
  return (
    <div>
      { items.map(item => (<ListingCard key={`listing-${item.id}`} {...item} />)) }
    </div>
  );
}

export const ListingsProps = PropTypes.arrayOf(ListingCardProps);

ListingList.propTypes = ListingsProps.isRequired;
