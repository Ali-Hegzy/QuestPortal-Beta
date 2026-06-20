import "./TopPanal.css"

export default function TopPanal({ title }) {
    return (
        <>
            <div class="top-panel">
                <div class="panel-left">// {title}</div>
                <div class="panel-center">
                    <div class="timer" id="clock">
                        --:--
                    </div>
                </div>
                <div class="panel-right">
                    <span class="live-pill ok" id="live-ok">
                        ✓ 0
                    </span>
                    <span class="live-pill bad" id="live-bad">
                        ✗ 0
                    </span>
                </div>
            </div>
        </>
    );
}
