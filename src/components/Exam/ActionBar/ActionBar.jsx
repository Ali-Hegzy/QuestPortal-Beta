import "./ActionBar.css"

export default function ActionBar() {
    return (
        <>
            <div class="action-bar">
                <button
                    class="btn-secondary"
                    id="ctrl-prev"
                    onclick="navigate(-1)">
                    ← previous
                </button>
                <button
                    class="btn-secondary next"
                    id="ctrl-next"
                    onclick="navigate(1)">
                    Next →
                </button>
                <button
                    class="btn-secondary finish"
                    id="ctrl-fin"
                    onclick="terminateSession()">
                    ✓ Submit
                </button>
            </div>
        </>
    );
}
