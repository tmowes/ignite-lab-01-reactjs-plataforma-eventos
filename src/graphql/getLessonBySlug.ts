import { gql } from '@apollo/client'

export const GET_LESSON_BY_SLUG = gql`
  query GetLessonBySlug($slug: String) {
    lesson(where: { slug: $slug }) {
      videoId
      title
      description
      teacher {
        avatarURL
        bio
        name
      }
    }
  }
`
export interface LessonDTO {
  lesson: {
    videoId: string
    title: string
    description: string
    teacher: {
      name: string
      bio: string
      avatarURL: string
    }
  }
}
