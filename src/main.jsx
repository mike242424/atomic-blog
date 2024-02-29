import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import PostsPovider from './context/PostsContext.jsx';
import SearchQueryProvider from './context/SearchQueryContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SearchQueryProvider>
      {' '}
      <PostsPovider>
        <App />
      </PostsPovider>
    </SearchQueryProvider>
  </React.StrictMode>,
);
