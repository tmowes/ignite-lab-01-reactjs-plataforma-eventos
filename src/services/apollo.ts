import { ApolloClient, InMemoryCache } from '@apollo/client'

export const client = new ApolloClient({
  uri: import.meta.env.VITE_GRAPHCMS_URL,
  // uri: 'https://api-sa-east-1.graphcms.com/v2/cl4of07lz26vl01z2d4apg4aq/master',
  cache: new InMemoryCache(),
})
