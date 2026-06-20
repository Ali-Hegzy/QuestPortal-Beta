import ProgressBar from "./ProgressBar/ProgressBar";
import TopPanal from "./TopPanal/TopPanal";
import MapGrid from "./MapGrid/MapGrid";
import Qustion from "./Question/Question";
import ActionBar from "./ActionBar/ActionBar";
import "./Exam.css";

export default function Exam({ title, time, nums }) {
    return (
        <>
            <TopPanal title={title} time={time} />
            <ProgressBar nums={nums}/>
            <MapGrid />
            <Qustion />
            <ActionBar />
        </>
    );
}
