import React from 'react';
import PropTypes from 'prop-types';
import ListingCard, { ListingCardProps } from './ListingCard';

export default function ListingList({ items = [] }) {
  return (
    <div>
      { items.map(item => (<ListingCard {...item} />)) }
    </div>
  );
}

export const ListingListProps = PropTypes.arrayOf(ListingCardProps);

ListingList.propTypes = ListingListProps.isRequired;
