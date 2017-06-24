import request from 'superagent';
import { expect } from 'chai';
import cheerio from 'cheerio';
import listing from '../../data/listing-1.json';

describe('listing app', () => {
  const baseUrl = process.env.APP_URI;

  it('should be able to create a listing with api endpint', (done) => {
    request
      .post(`${baseUrl}/api/listings/create`)
      .send(listing)
      .end((err, res) => {
        expect(err).to.equal(null);
        expect(res.status).to.equal(201);
        done();
      });
  });


  it('should be able to render the listing in UI', (done) => {
    request
      .get(`${baseUrl}/listings`)
      .end((err, res) => {
        expect(err).to.equal(null);
        expect(res.status).to.equal(200);

        const $ = cheerio.load(res.text);
        expect($('.listing-card').length).to.equal(1);
        expect($('.main-photo__image').attr('src')).to.equal(listing.mainPhoto.url);
        expect($('.property-details__price').text()).to.equal(listing.propertyDetails.price);
        expect($('.property-details__address').text()).to.equal(listing.propertyDetails.address);
        done();
      });
  });
});
