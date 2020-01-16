/**
 * components/PageLayout/index.js
 */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useQuery } from '@apollo/react-hooks';
import { GET_PAGE_LOADER } from '../../queries/app';
import PageLoader from '../PageLoader';
import useStyles from '../../styles/layout';

const PageLayout = ({ children }) => {
  const { data, client } = useQuery(GET_PAGE_LOADER);
  const classes = useStyles();

  // Did Unmount
  const didUnmount = () => {
    client.writeData({ data: { app: { pageLoader: false } } });
  };
  useEffect(() => didUnmount, []);

  return (
    <div className={classes.container}>
      <div className="page--main">{children}</div>
      <PageLoader visible={data.app.pageLoader} />
    </div>
  );
};

PageLayout.propTypes = {
  children: PropTypes.node,
};

export default PageLayout;
