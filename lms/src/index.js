import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

// Lazy load the App component
const App = lazy(() => import('./App'));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChakraProvider>
    <BrowserRouter>
      <Suspense fallback={
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
          <img src={`${process.env.PUBLIC_URL}/lmslogo.png`} style={{ width: '30%', margin: 'auto' }} alt="Logo" />
        </div>
      }>
        <App />
      </Suspense>
    </BrowserRouter>
  </ChakraProvider>
);

reportWebVitals();
