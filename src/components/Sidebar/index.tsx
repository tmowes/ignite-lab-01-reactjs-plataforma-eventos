import { useQuery } from '@apollo/client'

import { LessonsDTO, GET_LESSONS_QUERY } from '../../graphql/getLessons'
import { LessonCard } from '../LessonCard'
import { styles } from './styles'

const localData = {
  lessons: [
    {
      id: 'lesson-00',
      slug: 'lesson-00',
      title: 'Abertura do evento Ignite Lab',
      availableAt: '2022-06-19T22:00:00.000Z',
      lessonType: 'live',
    },
    {
      id: 'lesson-01',
      slug: 'lesson-01',
      title: 'Aula 01 - O início da especialização em ReactJS',
      availableAt: '2022-06-20T22:00:00.000Z',
      lessonType: 'class',
    },
    {
      id: 'lesson-02',
      slug: 'lesson-012',
      title: 'Aula 02 - Estrutura visual do projeto',
      availableAt: '2022-06-21T22:00:00.000Z',
      lessonType: 'class',
    },
    {
      id: 'lesson-03',
      slug: 'lesson-03',
      title: 'Aula 03 - Titulo aula ignite lab',
      availableAt: '2022-06-22T22:00:00.000Z',
      lessonType: 'class',
    },
    {
      id: 'lesson-04',
      slug: 'lesson-04',
      title: 'Aula 04 - Titulo aula ignite lab',
      availableAt: '2022-06-23T22:00:00.000Z',
      lessonType: 'class',
    },
    {
      id: 'lesson-05',
      slug: 'lesson-05',
      title: 'Aula 05 - Titulo aula ignite lab',
      availableAt: '2022-06-24T22:00:00.000Z',
      lessonType: 'class',
    },
  ],
} as LessonsDTO

export function Sidebar() {
  const { data } = useQuery<LessonsDTO>(GET_LESSONS_QUERY)
  return (
    <aside className={styles.container}>
      <span className={styles.title}>Cronograma de aulas</span>
      <div className={styles.content}>
        {localData?.lessons.map((lesson) => (
          <LessonCard
            key={lesson.id}
            title={lesson.title}
            slug={lesson.slug}
            availableAt={new Date(lesson.availableAt)}
            type={lesson.lessonType}
          />
        ))}
      </div>
    </aside>
  )
}
