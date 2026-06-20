import Navbar from "./components/Navbar/Navbar"
import Exam from "./components/Exam/Exam"
import "./styles/global.css"
import "./App.css"

function App() {
  const testDataSet = [1,2,3,4,5,6,7,8,9];
  return (
    <>
      <div className="container">
        <Navbar />
        <Exam title="computerArch" time={60} dataset={testDataSet}/>
      </div>
    </>
  )
}

export default App
