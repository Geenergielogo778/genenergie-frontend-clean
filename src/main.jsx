import { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Provider as ReduxProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import App from './app';
import { store, persistor } from './store';
import AuthProvider from './layouts/providers/AuthProvider';
import './utils/i18n'
// ----------------------------------------------------------------------

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <HelmetProvider>
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Suspense>
            <AuthProvider>
              <App />
            </AuthProvider>
          </Suspense>
        </BrowserRouter>
      </PersistGate>
    </ReduxProvider>
  </HelmetProvider>
);
