import { useGetLessonsQuery } from '../../graphql/generated'
import { LessonCard } from '../LessonCard'
import { styles } from './styles'

export function Sidebar() {
  const { data } = useGetLessonsQuery()

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
