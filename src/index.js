import React from 'react';
import ReactDOM from 'react-dom';
import FontFaceObserver from 'fontfaceobserver';
import './assets/scss/main.scss';
import App from './app';

// Load font
const poppinsObserver = new FontFaceObserver('Poppins', {});
const gelasioObserver = new FontFaceObserver('Gelasio', {});
const materialIconsObserver = new FontFaceObserver('Material Icons', {});

// Finish load font
Promise.all([poppinsObserver.load(), gelasioObserver.load(), materialIconsObserver.load()])
  .then(() => {
    document.body.classList.add('fontLoaded');
  })
  .catch(err => {
    // eslint-disable-next-line no-console
    console.log(err);
  });

// Main APP init
ReactDOM.render(<App />, document.getElementById('app'));

// Install ServiceWorker and AppCache in the end since
// it's not most important operation and if main code fails,
// we do not want it installed
if (process.env.NODE_ENV === 'production') {
  require('offline-plugin/runtime').install(); // eslint-disable-line global-require
}
