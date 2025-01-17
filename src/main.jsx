import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from "react-redux"
import store from './redux/store.js'
import { GoogleOAuthProvider } from '@react-oauth/google';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Provider store={store}>
      <GoogleOAuthProvider clientId='743660267745-mccrh5lij23qgr9bf0dsa0am389tpeln.apps.googleusercontent.com'>
        <App />
      </GoogleOAuthProvider>
    </Provider>
  </BrowserRouter>
)
