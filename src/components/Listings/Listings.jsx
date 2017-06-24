import React from 'react';
import PropTypes from 'prop-types';
import ListingCard, { ListingCardProps } from './ListingCard';
import styles from './Listings.scss';

export default function ListingList({ items = [] }) {
  return (
    <div className={styles.listings}>
      { items.map(item => (<ListingCard key={`listing-${item.id}`} {...item} />)) }
    </div>
  );
}

export const ListingsProps = PropTypes.arrayOf(ListingCardProps);

ListingList.propTypes = ListingsProps.isRequired;
