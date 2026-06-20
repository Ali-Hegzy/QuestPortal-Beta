import "./Progress.css"

export default function ProgressBar() {
    return (
        <>
            <div class="progress-container">
                <div class="progress-meta">
                    <span class="progress-title">Processing Matrix</span>
                    <span class="progress-ratio" id="ratio-view">
                        0 / 0
                    </span>
                </div>
                <div class="progress-track">
                    <div class="progress-fill" id="track-fill"></div>
                </div>
            </div>
        </>
    );
}
