import { Logo } from '../Logo'
import { styles } from './styles'

export function Header() {
  return (
    <header className={styles.container}>
      <Logo />
    </header>
  )
}
