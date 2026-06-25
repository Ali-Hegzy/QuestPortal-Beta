import "./MapGrid.css";

export default function MapGrid({ onSetCurrQuest, dataset = [] }) {
    return (
        <>
            <div className="map-grid" id="node-map">
                {dataset.map((question, index) => (
                    <div
                        className="map-node"
                        id={"node-" + (index + 1)}
                        key={question.id}
                        onClick={() => onSetCurrQuest(index)}>
                        {index + 1}
                    </div>
                ))}
            </div>
        </>
    );
}
