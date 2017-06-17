import path from 'path';
import express from 'express';
import handlebars from 'express-handlebars';
import bodyParser from 'body-parser';
import compression from 'compression';
import ListingSearchRoute from './routes/ListingSearchRoute';
import { CreateListingRoute, CreateListingApiRoute } from './routes/CreateListingRoute';
import log from '../utils/log';

const server = express();

server.engine('handlebars', handlebars());
server.set('view engine', 'handlebars');
server.set('views', path.join(__dirname, 'templates'));

server.use(compression(9));
server.use(bodyParser.json());

server.use('/api/listings/create', CreateListingApiRoute);

server.use('/listings/create', CreateListingRoute);
server.use('/listings', ListingSearchRoute);

server.listen(8080, (err) => {
  if (err) { log.error(err); }
  log.info('Server on %s', 8080);
});
