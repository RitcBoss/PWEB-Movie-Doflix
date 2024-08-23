import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import MovieContextProvider from './Context/MovieContext.jsx'

createRoot(document.getElementById('root')).render(
  <MovieContextProvider>
    <App />
  </MovieContextProvider>,
)
