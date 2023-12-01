export function minutesConverter(min: number): string {
  if (min < 60) {
    return `${min}분`
  }

  const hour = Math.floor(min / 60)
  if (hour < 24) {
    return `${hour}시간`
  }

  const day = Math.floor(hour / 24)
  return `${day}일 ${hour % 24}시간`
}
