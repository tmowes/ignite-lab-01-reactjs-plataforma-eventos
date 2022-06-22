import { gql } from '@apollo/client'

export const GET_LESSONS_QUERY = gql`
  query {
    lessons(orderBy: availableAt_ASC, stage: PUBLISHED) {
      id
      lessonType
      availableAt
      title
      slug
    }
  }
`
export interface LessonsDTO {
  lessons: {
    id: string
    title: string
    slug: string
    availableAt: string
    lessonType: 'live' | 'class'
  }[]
}
