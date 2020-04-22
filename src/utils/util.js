import dayjs from 'dayjs'

export function formatTime(time, formatStr = 'YYYY-MM-DD') {
  return dayjs(time).format(formatStr)
}