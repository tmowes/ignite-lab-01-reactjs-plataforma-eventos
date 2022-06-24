import { FormEvent, useCallback, useState } from 'react'

import { useNavigate } from 'react-router-dom'

import codeImg from '../../assets/hero-register.png'
import { Logo } from '../../components/Logo'
import { useCreateSubscriberMutation } from '../../graphql/generated'
import { styles } from './styles'

export function Register() {
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const [createSubscriber, { data, loading }] = useCreateSubscriberMutation()

  const onSubscribe = useCallback(
    async (e: FormEvent) => {
      e.preventDefault()
      await createSubscriber({ variables: { name, email } })
      navigate('/event')
    },
    [createSubscriber, email, name, navigate],
  )

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.leftSection}>
          <Logo />
          <h1 className={styles.title}>
            Construa uma <strong className={styles.highlight}>aplicação completa</strong>, do
            zero, com <strong className={styles.highlight}>React</strong>
          </h1>
          <p className={styles.description}>
            Em apenas uma semana você vai dominar na prática uma das tecnologias mais utilizadas
            e com alta demanda para acessar as melhores oportunidades do mercado.
          </p>
        </div>
        <div className={styles.rightSection}>
          <strong className={styles.callToAction}>Inscreva-se gratuitamente</strong>
          <form className={styles.form} onSubmit={onSubscribe}>
            <input
              className={styles.input}
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Seu nome completo"
            />
            <input
              className={styles.input}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Digite seu e-mail"
            />
            <button type="submit" disabled={loading} className={styles.submit}>
              garantir minha vaga
            </button>
          </form>
        </div>
      </div>
      <img src={codeImg} className={styles.heroImg} alt="imagem de código" />
    </div>
  )
}
