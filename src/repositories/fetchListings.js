
const LISTING = {
  agency: {
    agencyName: 'agency-name',
    logoUrl: 'logo-url',
    backgroundColor: 'background-color',
  },
};

export default function fetchListings() {
  return new Promise((resolve) => {
    resolve([LISTING, LISTING]);
  });
}
