/**
 * styles/layout.js
 */
import { makeStyles } from '@material-ui/core/styles';
export const config = {
  container: `
    max-width: 780px;
    margin: 0 auto;
    position: relative;
  `,
  container_fluid: `
    width: 100%;
    margin: 0 auto;
    position: relative;
  `,
};

export default makeStyles(config, { name: 'LibLayout' });
