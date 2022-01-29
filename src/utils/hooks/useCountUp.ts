import { useEffect, useState } from 'react'
import { timeDiffCalc } from 'utils/dates'

export const useCountUp = () => {
  const [today, setDate] = useState(Date.now()) // Save the current date to be able to trigger an update
  const anniversary = new Date('2020-01-25T00:00:00.000Z').getTime() // The date of the event
  console.log(today, anniversary)
  useEffect(() => {
    const timer = setInterval(() => {
      // Creates an interval which will update the current data every minute
      // This will trigger a rerender every component that uses the useDate hook.
      setDate(Date.now())
    }, 1000)
    return () => {
      clearInterval(timer) // Return a funtion to clear the timer so that it will stop being called on unmount
    }
  }, [])

  const difference = timeDiffCalc(today, anniversary)

  return {
    difference,
  }
}
