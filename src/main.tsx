import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import './assets/styles/base/reset.css';
import './assets/styles/base/normalize.css';
import './assets/styles/base/swiper.css';
import './assets/styles/fonts.css';
import './assets/styles/style.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
