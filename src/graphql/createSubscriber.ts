import { gql } from '@apollo/client'

export const CREATE_SUBSCRIBER_MUTATION = gql`
  mutation createSubscriber($name: String!, $email: String!) {
    createSubscriber(data: { name: $name, email: $email }) {
      id
    }
  }
`

export interface CreateSubscriberDTO {
  createSubscriber: {
    id: string
  }
}
