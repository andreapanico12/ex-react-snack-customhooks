import { useState, useEffect } from 'react'
import dayjs from 'dayjs'

const useDate = () => {

  const [date, setDate] = useState(dayjs())

  
  useEffect (() => {
    const interval = setInterval (() =>{
      setDate(dayjs())
    })
    return () => {
      clearInterval(interval)
    }
  }, [])
  return date.format('DD-MM-YYYY HH:mm:ss')
}

export default useDate