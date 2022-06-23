import { useQuery } from '@apollo/client'

import { LessonsDTO, GET_LESSONS_QUERY } from '../../graphql/getLessons'
import { LessonCard } from '../LessonCard'
import { styles } from './styles'

export function Sidebar() {
  const { data } = useQuery<LessonsDTO>(GET_LESSONS_QUERY)

  return (
    <aside className={styles.container}>
      <span className={styles.title}>Cronograma de aulas</span>
      <div className={styles.content}>
        {data?.lessons.map((lesson) => (
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
