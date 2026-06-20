import ProgressBar from "./ProgressBar/ProgressBar";
import TopPanal from "./TopPanal/TopPanal";
import MapGrid from "./MapGrid/MapGrid";
import Qustion from "./Question/Question";
import ActionBar from "./ActionBar/ActionBar";
import "./Exam.css";

export default function Exam({ title }) {
    return (
        <>
            <TopPanal title={title} />
            <ProgressBar />
            <MapGrid />
            <Qustion />
            <ActionBar />
        </>
    );
}
