/**
 * queries/auth.js
 */
import gql from 'graphql-tag';

export const GET_AUTH_DATA = gql`
  {
    auth @client {
      status
      user
      token
    }
  }
`;
