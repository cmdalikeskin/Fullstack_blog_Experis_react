import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { MyProvider as BlogContextContainer } from './components/BlogContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BlogContextContainer>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </BlogContextContainer>
  </React.StrictMode>,
)
