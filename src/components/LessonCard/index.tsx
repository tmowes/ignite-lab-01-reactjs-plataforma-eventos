import { isPast } from 'date-fns'
import { CheckCircle, Lock } from 'phosphor-react'

import { formatLessonDate } from '../../utils/convertDate'
import { styles } from './styles'
import { LessonCardProps } from './types'

export function LessonCard(props: LessonCardProps) {
  const { slug = '#', type = 'class', title, availableAt = new Date() } = props

  const isLessonAvailable = isPast(availableAt)
  const availableDateFormatted = formatLessonDate(availableAt)

  return (
    <a href={slug}>
      <span className={styles.date}>{availableDateFormatted}</span>
      <div className={styles.container}>
        <header className={styles.header}>
          {isLessonAvailable ? (
            <span className={styles.headerText}>
              <CheckCircle size={20} />
              Conteúdo Liberado
            </span>
          ) : (
            <span className={`${styles.headerText} text-orange-500`}>
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
    </a>
  )
}
