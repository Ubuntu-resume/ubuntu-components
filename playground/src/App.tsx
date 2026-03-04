import { Battery } from "@ubuntu-web/battery-indicator"

function App() {
  console.log("This is running")
  return (
    <div>
      <Battery percent={50} isChargingCurrent={true} />
    </div>
  )
}

export default App