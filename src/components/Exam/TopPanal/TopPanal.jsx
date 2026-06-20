import "./TopPanal.css";

function timer(initTime) {
    if (initTime === 0) {
        return `00:00`;
    }

    let seconds = initTime * 60;

    const displayMinutes = Math.floor(seconds / 60);
    const displaySeconds = seconds % 60;

    const formattedMinutes = String(displayMinutes).padStart(2, "0");
    const formattedSeconds = String(displaySeconds).padStart(2, "0");

    return `${formattedMinutes}:${formattedSeconds}`;
}

export default function TopPanal({ title, time }) {
    return (
        <>
            <div className="top-panel">
                <div className="panel-left">// {title}</div>
                <div className="panel-center">
                    <div className="timer" id="clock">
                        {timer(time)}
                    </div>
                </div>
                <div className="panel-right">
                    <span className="live-pill ok" id="live-ok">
                        ✓ 0
                    </span>
                    <span className="live-pill bad" id="live-bad">
                        ✗ 0
                    </span>
                </div>
            </div>
        </>
    );
}
