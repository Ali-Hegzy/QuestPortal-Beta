import "./Progress.css"

export default function ProgressBar({length}) {
    return (
        <>
            <div className="progress-container">
                <div className="progress-meta">
                    <span className="progress-title">Processing Matrix</span>
                    <span className="progress-ratio" id="ratio-view">
                        0 / {length ?? "0"}
                    </span>
                </div>
                <div className="progress-track">
                    <div className="progress-fill" id="track-fill"></div>
                </div>
            </div>
        </>
    );
}
