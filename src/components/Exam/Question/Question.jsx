import "./Question.css";

export default function Qustion({ quset }) {

    return (
        <>
            <div id="question-payload">
                <div className="q-card">
                    <div className="q-card-header">
                        <span className={"q-type-tag" + " " + (quset.type ? "mcq" : "tf")}>
                            {quset.type === "mcq"
                                ? "Multiple Choice"
                                : "True / False"}
                        </span>
                    </div>
                    <div className="q-text">{quset.q}</div>
                    <div className="options-stack">
                        {quset.opts.map((opt, index) => (
                            <div key={index} className="option-item">
                                <div className="option-index">{index}</div>
                                <div className="option-title">{opt}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
