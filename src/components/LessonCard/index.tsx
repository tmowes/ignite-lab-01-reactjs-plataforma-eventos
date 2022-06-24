import { isPast } from 'date-fns'
import { CheckCircle, Lock } from 'phosphor-react'
import { Link, useLocation, useParams } from 'react-router-dom'

import { formatLessonDate } from '../../utils/convertDate'
import { styles } from './styles'
import { LessonCardProps } from './types'

export function LessonCard(props: LessonCardProps) {
  const { slug = '#', type = 'class', title, availableAt = new Date() } = props
  const params = useParams<{ slug: string }>()

  const isActiveLesson = slug === params.slug
  const isLessonAvailable = isPast(availableAt)
  const availableDateFormatted = formatLessonDate(availableAt)

  return (
    <Link to={`/event/lesson/${slug}`} className="group">
      <span className={styles.date}>{availableDateFormatted}</span>
      <div className={isActiveLesson ? `bg-green-500 ${styles.container}` : styles.container}>
        <header className={styles.header}>
          {isLessonAvailable ? (
            <span
              className={
                isActiveLesson
                  ? `text-white ${styles.headerText}`
                  : `text-blue-500 ${styles.headerText}`
              }
            >
              <CheckCircle size={20} />
              Conteúdo Liberado
            </span>
          ) : (
            <span className={`text-orange-500 ${styles.headerText}`}>
              <Lock size={20} />
              Em breve
            </span>
          )}
          <span
            className={
              isActiveLesson
                ? `border-white ${styles.classType}`
                : `border-green-300 ${styles.classType}`
            }
          >
            {type === 'live' ? 'AO VIVO' : 'AULA PRÁTICA'}
          </span>
        </header>
        <strong
          className={
            isActiveLesson ? `text-white ${styles.title}` : `text-gray-200 ${styles.title}`
          }
        >
          {title}
        </strong>
      </div>
    </Link>
  )
}
