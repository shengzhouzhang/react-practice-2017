
function createListing(data) {
  const options = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify(data),
  };
  return fetch('/api/listings/create', options);
}

export default {
  createListing,
};
