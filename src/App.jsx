import useSwitch from "./CustomHooks/useSwitch"
import useDate from "./CustomHooks/useDate"

function App() {

  const [isOn, toggle] = useSwitch()
  const currentDate = useDate();

  return (
    <div>
      <h1>Il valore è: {isOn ? "ON" : "OFF"}</h1>
      <button onClick={toggle}>Cambia Stato</button>

    <div>
      <h1>Data e ora attuali:</h1>
      <p>{currentDate.toLocaleString()}</p>
</div>
    </div>

  )
}

export default App
