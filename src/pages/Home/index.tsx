import { useQuery } from '@apollo/client'

import { GET_LESSONS_QUERY } from '../../graphql/getLessons'
import { styles } from './styles'

export function Home() {
  const { data } = useQuery(GET_LESSONS_QUERY)
  return (
    <div className={styles.container}>
      <h1>Julius</h1>
    </div>
  )
}
