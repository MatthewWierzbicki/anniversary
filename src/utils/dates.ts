export const timeDiffCalc = (dateFuture: number, dateNow: number): string => {
  let diffInMilliSeconds = Math.abs(dateFuture - dateNow) / 1000

  // calculate days
  const days = Math.floor(diffInMilliSeconds / 86400)
  diffInMilliSeconds -= days * 86400

  // calculate hours
  const hours = Math.floor(diffInMilliSeconds / 3600) % 24
  diffInMilliSeconds -= hours * 3600

  // calculate minutes
  const minutes = Math.floor(diffInMilliSeconds / 60) % 60
  diffInMilliSeconds -= minutes * 60

  // calculate seconds
  const seconds = Math.floor(diffInMilliSeconds) % 60
  diffInMilliSeconds -= minutes * 60

  let difference = ''
  if (days > 0) {
    difference += days === 1 ? `${days} day, ` : `${days} days, `
  }

  difference +=
    hours === 0 || hours === 1 ? `${hours} hour, ` : `${hours} hours, `

  difference +=
    minutes === 0 || hours === 1 ? `${minutes} minutes` : `${minutes} minutes, `

  difference +=
    seconds === 0 || minutes === 1 || hours === 1
      ? `${seconds} seconds`
      : `${seconds} seconds`
  return difference
}
