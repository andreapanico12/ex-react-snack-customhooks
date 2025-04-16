import { useEffect, useState } from 'react';

function useKeyPress(key) {
  const [isPressed, setIsPressed] = useState(false);

  const downHandler = (e) => {
    if (e.key === key) {
      setIsPressed(true);
    }
  }

  const upHandler = (e) => {
    if (e.key === key) {
      setIsPressed(false);
    }
  }
  useEffect(() => {
    window.addEventListener('keydown', downHandler);
    window.addEventListener('keyup', upHandler);

    return () => {
      window.removeEventListener('keydown', downHandler);
      window.removeEventListener('keyup', upHandler);
    }
  }, []); 
  return isPressed;

}

export default useKeyPress