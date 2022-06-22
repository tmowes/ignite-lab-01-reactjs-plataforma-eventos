import { ApolloClient, InMemoryCache } from '@apollo/client'

export const client = new ApolloClient({
  uri: import.meta.env.GRAPHCMS_URL,
  cache: new InMemoryCache(),
})
