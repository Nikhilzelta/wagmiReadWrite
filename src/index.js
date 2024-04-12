import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { WagmiProvider } from 'wagmi'
import { config } from './config'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
const queryClient = new QueryClient()

ReactDOM.render(
  <React.StrictMode>

    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </WagmiProvider>
  </React.StrictMode>,

  document.getElementById('root')
);
