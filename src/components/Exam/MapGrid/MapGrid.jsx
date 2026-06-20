import "./MapGrid.css";

export default function MapGrid({ dataset = []}) {
    return (
        <>
            <div className="map-grid" id="node-map">
                {dataset.map((id) => (
                    <div className="map-node" id={"node-" + id} key={id}>
                        {id}
                    </div>
                ))}
            </div>
        </>
    );
}
