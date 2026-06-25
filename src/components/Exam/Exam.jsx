import { useState } from "react";
import ProgressBar from "./ProgressBar/ProgressBar";
import TopPanal from "./TopPanal/TopPanal";
import MapGrid from "./MapGrid/MapGrid";
import Qustion from "./Question/Question";
import ActionBar from "./ActionBar/ActionBar";
import "./Exam.css";

export default function Exam({ title, time, dataset = [] }) {
    const [currQuest, setCurrQuest] = useState(0);
    const length = dataset.length;

    return (
        <>
            <TopPanal title={title} time={time} />
            <ProgressBar length={length} />
            <MapGrid
                onSetCurrQuest={setCurrQuest}
                currQuest={currQuest}
                dataset={dataset}
            />
            <Qustion quset={dataset[currQuest]} />
            <ActionBar
                onSetCurrQuest={setCurrQuest}
                currQuest={currQuest}
                size={length - 1}
            />
        </>
    );
}
