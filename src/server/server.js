import path from 'path';
import express from 'express';
import handlebars from 'express-handlebars';
import bodyParser from 'body-parser';
import compression from 'compression';

const server = express();

server.engine('handlebars', handlebars());
server.set('view engine', 'handlebars');
server.set('views', path.join(__dirname, 'templates'));

server.use(compression(9));
server.use(bodyParser.json());
