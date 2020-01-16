/**
 * app.js
 *
 */
import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { BrowserRouter } from 'react-router-dom';

import { create } from 'jss';
import { StylesProvider, jssPreset, createMuiTheme } from '@material-ui/core/styles';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import JssPluginTemplate from 'jss-plugin-template';

import i18nInit from './i18n';
import Root from './Root';
import defaultData from './defaultData';

// Apollo GraphQL initiation
const cache = new InMemoryCache();
const clientUri =
  process.env.NODE_ENV === 'production' ? process.env.API_URL_PROD : process.env.API_URL_DEV;

const client = new ApolloClient({
  link: new HttpLink({
    uri: clientUri,
  }),
  cache,
  resolvers: {},
});

cache.writeData({ data: defaultData });
client.onResetStore(() => cache.writeData({ data: defaultData }));

// i18n initiation
i18nInit();

// material-ui configuration
// theming
const THEME = createMuiTheme({
  typography: {
    useNextVariants: true,
    fontFamily: '"Poppins", sans-serif',
  },
  overrides: {
    MuiBackdrop: {
      root: {
        backgroundColor: 'rgba(0,0,0,.7)',
      },
    },
  },
});

// jss plugin
const jss = create({
  plugins: [...jssPreset().plugins, JssPluginTemplate()],
});

const App = () => (
  <BrowserRouter>
    <ApolloProvider client={client}>
      <StylesProvider jss={jss}>
        <MuiThemeProvider theme={THEME}>
          <Root />
        </MuiThemeProvider>
      </StylesProvider>
    </ApolloProvider>
  </BrowserRouter>
);

export default App;
