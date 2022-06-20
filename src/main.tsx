import { StrictMode } from 'react'

import { ApolloProvider } from '@apollo/client'
import { createRoot } from 'react-dom/client'

import { App } from './App'
import './styles/global.css'
import { client } from './services/apollo'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </StrictMode>,
)
