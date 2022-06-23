import { useParams } from 'react-router-dom'

import { Header } from '../../components/Header'
import { Sidebar } from '../../components/Sidebar'
import { VideoPlayer } from '../../components/VideoPlayer'
import { styles } from './styles'
import { HomeParams } from './types'

export function Home() {
  const { slug } = useParams<HomeParams>()
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.content}>
        {slug ? <VideoPlayer lessonSlug={slug} /> : <div className={styles.content} />}
        <Sidebar />
      </main>
    </div>
  )
}
