import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import TagManager from 'react-gtm-module'

import { HelmetProvider } from 'react-helmet-async';

const tagManagerArgs = {
    gtmId: 'GTM-TWJ2XRNR' // Replace with your actual GTM ID
}
TagManager.initialize(tagManagerArgs)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </StrictMode>,
);
