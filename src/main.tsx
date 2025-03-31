import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// Error boundary for production
const renderApp = () => {
  const root = document.getElementById('root');
  
  if (!root) {
    console.error('Root element not found');
    return;
  }
  
  try {
    createRoot(root).render(
      <StrictMode>
        <App />
      </StrictMode>,
    );
  } catch (error) {
    console.error('Error rendering app:', error);
    root.innerHTML = `
      <div style="padding: 20px; text-align: center; font-family: sans-serif;">
        <h1>Something went wrong</h1>
        <p>The application failed to load. Please try refreshing the page.</p>
      </div>
    `;
  }
};

renderApp();
