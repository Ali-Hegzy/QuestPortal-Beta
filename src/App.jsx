import Navbar from "./components/Navbar/Navbar";
import Exam from "./components/Exam/Exam";
import "./styles/global.css";
import "./App.css";

function App() {
    const testDataSet = [
        {
            id: 1,
            type: "mcq",
            q: "MAR is an abbreviation of:",
            opts: [
                "Minimum Acceptable Rate",
                "Magnetic Resonance Angiography",
                "Memory Accumulator Register",
                "Memory Address Register",
            ],
            ans: 3,
        },
        {
            id: 2,
            type: "mcq",
            q: "CU is an abbreviation of:",
            opts: ["Copper Unit", "Control Unit", "Central Unit", "Core Unit"],
            ans: 1,
        },
        {
            id: 3,
            type: "mcq",
            q: "MBR is an abbreviation of:",
            opts: [
                "Master Boot Record",
                "Memory Built Register.",
                "Memory Buffer Register.",
                "Memory Bus Register.",
            ],
            ans: 2,
        },
        {
            id: 4,
            type: "mcq",
            q: "IR is an abbreviation of:",
            opts: [
                "Infrared",
                "Installation Register",
                "Insertion Register",
                "Instruction Register",
            ],
            ans: 3,
        },
        {
            id: 5,
            type: "mcq",
            q: "DMA is an abbreviation of:",
            opts: [
                "Defense Media Activity",
                "Direct Memory Access",
                "Direct Memory Addition",
                "Direct Method Access",
            ],
            ans: 1,
        },
    ];

    return (
        <>
            <div className="container">
                <Navbar />
                <Exam title="computerArch" time={60} dataset={testDataSet} />
            </div>
        </>
    );
}

export default App;
