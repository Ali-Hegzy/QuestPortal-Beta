import "./Question.css";

export default function Question({ quest }) {

    return (
        <>
            <div id="question-payload">
                <div className="q-card">
                    <div className="q-card-header">
                        <span className={"q-type-tag" + " " + (quest.type ? "mcq" : "tf")}>
                            {quest.type === "mcq"
                                ? "Multiple Choice"
                                : "True / False"}
                        </span>
                    </div>
                    <div className="q-text">{quest.q}</div>
                    <div className="options-stack">
                        {quest.opts.map((opt, index) => (
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
