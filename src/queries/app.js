/**
 * queries/app.js
 */
import gql from 'graphql-tag';

export const GET_APP_DATA = gql`
  {
    app @client {
      appLoader
      pageLoader
    }
  }
`;

export const GET_APP_LOADER = gql`
  {
    app @client {
      appLoader
    }
  }
`;

export const GET_PAGE_LOADER = gql`
  {
    app @client {
      pageLoader
    }
  }
`;
