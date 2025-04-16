import { useState } from "react"


function useSwitch(initialValue = false) {
  const [isOn, setIsOn] = useState(initialValue)
  const toggle = () => {
    setIsOn((prev) => !prev)
  }
  return [isOn, toggle]
    
  
}

export default useSwitch