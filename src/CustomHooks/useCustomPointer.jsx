import { useState, useEffect } from "react"

function useCustomPointer(newPointer) {

  const [position, setPosition] = useState({x: 0, y: 0})
  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.body.style.cursor = `none`;

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.body.style.cursor = "default";
    };
    

  },[])

  const style = {
    position: "fixed",
    top: position.y,
    left: position.x,
    transform: "translate(-50%, -50%)",
    pointerEvents: "none", 
    cursor: "none",
    zIndex: 9999,
    fontSize: "2rem"
  };
  return <div style={style}>{newPointer}</div>
}

export default useCustomPointer