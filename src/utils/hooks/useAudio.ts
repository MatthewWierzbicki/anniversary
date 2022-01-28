import { useState, useEffect, useRef } from 'react'

export const useAudio = (url: string) => {
  const [play, setPlay] = useState(false)
  const audioEl = useRef(new Audio(url))

  useEffect(() => {
    const audio = audioEl.current
    const onPlay = () => audio.play()

    if (audio && play) {
      audio.addEventListener('canplaythrough', onPlay)
    }

    return () => {
      if (audio) {
        audio.pause() // to enable garbage collection
        audio.removeEventListener('canplaythrough', onPlay)
      }
    }
  }, [play])

  const start: () => void = () => setPlay(true)
  const stop: () => void = () => setPlay(false)
  return { start, stop }
}
