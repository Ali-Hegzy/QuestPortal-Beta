import "./MapGrid.css";

export default function MapGrid({ dataset = []}) {
    return (
        <>
            <div className="map-grid" id="node-map">
                {dataset.map((question) => (
                    <div className="map-node" id={"node-" + question.id} key={question.id}>
                        {question.id}
                    </div>
                ))}
            </div>
        </>
    );
}
