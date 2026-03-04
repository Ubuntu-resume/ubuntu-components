import { Battery } from "@ubuntu-web/battery-indicator"

function App() {
  console.log("This is running")
  return (
    <div>
      <Battery style={{ gap: "10rem", fontSize: "1rem" }} percent={50} />
    </div>
  )
}

export default App