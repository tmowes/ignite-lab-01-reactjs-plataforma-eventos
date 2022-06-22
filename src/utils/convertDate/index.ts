import { isPast, format } from 'date-fns'
import { ptBR } from 'date-fns/locale'

export const formatLessonDate = (date: Date): string =>
  format(date, "EEEE' • 'd' de 'MMMM' • 'k'h'mm", { locale: ptBR })
