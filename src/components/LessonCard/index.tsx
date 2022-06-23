import { isPast } from 'date-fns'
import { CheckCircle, Lock } from 'phosphor-react'
import { Link } from 'react-router-dom'

import { formatLessonDate } from '../../utils/convertDate'
import { styles } from './styles'
import { LessonCardProps } from './types'

export function LessonCard(props: LessonCardProps) {
  const { slug = '#', type = 'class', title, availableAt = new Date() } = props

  const isLessonAvailable = isPast(availableAt)
  const availableDateFormatted = formatLessonDate(availableAt)

  return (
    <Link to={`/event/lesson/${slug}`} className="group">
      <span className={styles.date}>{availableDateFormatted}</span>
      <div className={styles.container}>
        <header className={styles.header}>
          {isLessonAvailable ? (
            <span className={`text-blue-500 ${styles.headerText}`}>
              <CheckCircle size={20} />
              Conteúdo Liberado
            </span>
          ) : (
            <span className={`text-orange-500 ${styles.headerText}`}>
              <Lock size={20} />
              Em breve
            </span>
          )}
          <span className={styles.classType}>
            {type === 'live' ? 'AO VIVO' : 'AULA PRÁTICA'}
          </span>
        </header>
        <strong className={styles.title}>{title}</strong>
      </div>
    </Link>
  )
}
