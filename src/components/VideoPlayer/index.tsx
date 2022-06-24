import { DefaultUi, Player, Youtube } from '@vime/react'
import { CaretRight, DiscordLogo, FileArrowDown, Lightning } from 'phosphor-react'

import '@vime/core/themes/default.css'

import { useGetLessonBySlugQuery } from '../../graphql/generated'
import { styles } from './styles'
import { VideoPlayerProps } from './types'

export function VideoPlayer(props: VideoPlayerProps) {
  const { lessonSlug } = props

  const { data } = useGetLessonBySlugQuery({
    variables: { slug: lessonSlug },
    fetchPolicy: 'no-cache',
  })

  if (!data || !data.lesson) {
    return (
      <div className={styles.container}>
        <p>Carregando...</p>
      </div>
    )
  }

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.video}>
          <Player>
            <Youtube videoId={data.lesson.videoId} />
            <DefaultUi />
          </Player>
        </div>
      </div>
      <div className={styles.main}>
        <div className={styles.section}>
          <div className={styles.container}>
            <h1 className={styles.title}>{data.lesson.title}</h1>
            <p className={styles.description}>{data.lesson.description}</p>
            {data.lesson.teacher && (
              <div className={styles.teacherSection}>
                <img
                  src={data.lesson.teacher.avatarURL}
                  alt={data.lesson.teacher.name}
                  className={styles.teacherImg}
                />
                <div>
                  <strong className={styles.teacherName}>{data.lesson.teacher.name}</strong>
                  <span className={styles.teacherRole}>{data.lesson.teacher.bio}</span>
                </div>
              </div>
            )}
          </div>
          <div className={styles.actions}>
            <a href="#" className={styles.discordButton}>
              <DiscordLogo size={24} />
              Comunidade do Discord
            </a>
            <a href="#" className={styles.challengeButton}>
              <Lightning size={24} />
              Acesse o desafio
            </a>
          </div>
        </div>
        <div className={styles.extraSection}>
          <a href="#" className={styles.extraLink}>
            <div className={styles.extraLeft}>
              <FileArrowDown size={40} />
            </div>
            <div className={styles.extraMiddle}>
              <strong className={styles.extraTitle}>Material complementar</strong>
              <p className={styles.extraLabel}>
                Baixe wallpapers exclusivos do Ignite Lab e personalize a sua máquina
              </p>
            </div>
            <div className={styles.extraRight}>
              <CaretRight size={24} />
            </div>
          </a>
          <a href="#" className={styles.extraLink}>
            <div className={styles.extraLeft}>
              <FileArrowDown size={40} />
            </div>
            <div className={styles.extraMiddle}>
              <strong className={styles.extraTitle}>Wallpapers exclusivos</strong>
              <p className={styles.extraLabel}>
                Baixe wallpapers exclusivos do Ignite Lab e personalize a sua máquina
              </p>
            </div>
            <div className={styles.extraRight}>
              <CaretRight size={24} />
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}
