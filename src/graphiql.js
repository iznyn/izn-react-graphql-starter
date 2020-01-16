import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/graphiql/graphiql.css';
import GraphiQL from 'graphiql';
import { parse } from 'graphql';

import { execute } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';

const clientUri =
  process.env.NODE_ENV === 'production' ? process.env.API_URL_PROD : process.env.API_URL_DEV;

const link = new HttpLink({
  uri: clientUri,
});

const fetcher = operation => {
  // eslint-disable-next-line no-param-reassign
  operation.query = parse(operation.query);
  return execute(link, operation);
};

ReactDOM.render(<GraphiQL fetcher={fetcher} />, document.body);
