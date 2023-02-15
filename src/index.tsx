import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import Routes from 'routes';

import './styles.css';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement!);

root.render(
  <StrictMode>
    <Routes />
  </StrictMode>
);
