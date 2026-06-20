import "./ActionBar.css"

export default function ActionBar() {
    return (
        <>
            <div className="action-bar">
                <button
                    className="btn-secondary"
                    id="ctrl-prev">
                    ← previous
                </button>
                <button
                    className="btn-secondary next"
                    id="ctrl-next">
                    Next →
                </button>
                <button
                    className="btn-secondary finish"
                    id="ctrl-fin">
                    ✓ Submit
                </button>
            </div>
        </>
    );
}
