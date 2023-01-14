import JournalEntry from "./JournalEntry";
import Prev from "./Prev";
import Next from "./Next";
import { useState } from "react";

export default function Journal() {
    const [curPage, setCurPage] = useState(0);

    const entries = [
        {
            title: "16 Last Seed (Day 1)",
            body: <p>
                My <span>orders</span> are to go to the town of <span>Balmora</span> in <span>Vvardenfell District</span> and report to a man named <span>Caius Cosades</span>. To find out where he lives, I should ask in <span>Balmora</span> at the cornerclub called the <span>South Wall</span>. When I find <span>Caius Cosades</span>, I must give him a package of documents, and wait for further <span>orders</span>.
            </p>
        },
        {
            title: "16 Last Seed (Day 1)",
            body: <p>
            I have met a Bosmer named <span>Fargoth</span> who claims to <span>Imperial</span>s have stolen a <span>ring</span> of his. He would like it back.
            </p>
        },
        {
            title: "2",
            body: <p>
                I'm entry 2
            </p>
        },
        {
            title: "3",
            body: <p>
                I'm entry 3
            </p>
        }
    ]

    return (
        <div id="journal">
            <JournalEntry id={"journal-entry-left"} content={entries[0]}></JournalEntry>
            <JournalEntry id={"journal-entry-right"} content={entries[1]}></JournalEntry>
            <Prev></Prev>
            <Next></Next>
        </div>
    )
}