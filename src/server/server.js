import path from 'path';
import express from 'express';
import handlebars from 'express-handlebars';
import bodyParser from 'body-parser';
import compression from 'compression';
import ListingListRoute from './routes/ListingListRoute';
import AdminRoute from './routes/AdminRoute';
import log from '../utils/log';

const server = express();

server.engine('handlebars', handlebars());
server.set('view engine', 'handlebars');
server.set('views', path.join(__dirname, 'templates'));

server.use(compression(9));
server.use(bodyParser.json());

server.use('/listings/create', AdminRoute);
server.use('/listings', ListingListRoute);

server.listen(8080, (err) => {
  if (err) { log.error(err); }
  log.info('Server on %s', 8080);
});
