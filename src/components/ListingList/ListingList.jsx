import React from 'react';
import PropTypes from 'prop-types';
import Listing, { ListingProps } from '../Listing';

export default function ListingList({ items = [] }) {
  return (
    <div>
      { items.map(item => (<Listing {...item} />)) }
    </div>
  );
}

export const ListingListProps = PropTypes.arrayOf(ListingProps);

ListingList.propTypes = ListingListProps.isRequired;
