import "./ActionBar.css"

export default function ActionBar({ onSetCurrQuest, currQuest, size}) {
    return (
        <>
            <div className="action-bar">
                <button
                    className="btn-secondary"
                    id="ctrl-prev"
                    onClick={() => onSetCurrQuest(currQuest != 0 ? currQuest - 1 : currQuest)}>
                    ← previous
                </button>
                <button
                    className="btn-secondary next"
                    id="ctrl-next"
                    onClick={() => onSetCurrQuest(currQuest == size ? currQuest : currQuest + 1)}>
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
