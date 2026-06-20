import "./TopPanal.css"

export default function TopPanal({ title }) {
    return (
        <>
            <div className="top-panel">
                <div className="panel-left">// {title}</div>
                <div className="panel-center">
                    <div className="timer" id="clock">
                        --:--
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
