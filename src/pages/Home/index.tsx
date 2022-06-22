import { Header } from '../../components/Header'
import { Sidebar } from '../../components/Sidebar'
import { VideoPlayer } from '../../components/VideoPlayer'
import { styles } from './styles'

export function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.content}>
        <VideoPlayer />
        <Sidebar />
      </main>
    </div>
  )
}
