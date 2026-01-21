export const getTimeOfDayGreeting = (date = new Date()) => {
  const hour = date.getHours()

  if (hour >= 12 && hour < 18) return 'afternoon'
  if (hour >= 18 || hour < 5) return 'evening'

  return 'morning'
}
