import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';

describe('App', () => {
  it('renders without crashing', () => {
    // Mock any required providers
    render(
      <BrowserRouter>
        <HelmetProvider>
          <App />
        </HelmetProvider>
      </BrowserRouter>
    );
    
    // This is a basic test to ensure the App renders without crashing
    expect(document.body).toBeDefined();
  });
}); 