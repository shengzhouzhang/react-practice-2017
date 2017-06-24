import React from 'react';
import ReactDOMServer from 'react-dom/server';
import isProd from './utils/isProd';

function links() {
  const href = isProd ? '/assets/main.css' : 'http://localhost:8081/assets/main.css';
  return ReactDOMServer.renderToString(<link href={href} rel="stylesheet" />);
}

function scripts() {
  const src = isProd ? '/assets/main.js' : 'http://localhost:8081/assets/main.js';
  return ReactDOMServer.renderToString(<script src={src} />);
}

export default (res, AppComponent, props = {}) => {
  res.render('index', {
    app: ReactDOMServer.renderToString(<AppComponent {...props} />),
    props: JSON.stringify(props),
    links: links(),
    scripts: scripts(),
  });
};
