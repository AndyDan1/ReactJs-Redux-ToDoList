import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import {Provider} from 'react-redux';
import {store} from './store/store';
import ThemeProvider from "./providers/ThemeProvider";
import Layout from "./components/Layout";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Provider store={store}>
      <ThemeProvider>
        <Layout>
          <App/>
        </Layout>
      </ThemeProvider>
    </Provider>
  </>
);

