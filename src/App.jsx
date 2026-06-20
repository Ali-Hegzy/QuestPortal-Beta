import Navbar from "./components/Navbar/Navbar"
import Exam from "./components/Exam/Exam"
import "./styles/global.css"
import "./App.css"

function App() {
  return (
    <>
      <div className="container">
        <Navbar />
        <Exam title="computerArch" time={60} nums={61}/>
      </div>
    </>
  )
}

export default App
