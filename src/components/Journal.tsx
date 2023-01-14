import JournalEntry from "./JournalEntry";
import Prev from "./Prev";
import Next from "./Next";

export default function Journal() {
    const fargoth = {
        title: "16 Last Seed (Day 1)",
        body: <p>
        I have met a Bosmer named <span>Fargoth</span> who claims to <span>Imperial</span>s have stolen a <span>ring</span> of his. He would like it back.
        </p>
    }

    return (
        <div id="journal">
            <JournalEntry id={"journal-entry-left"} content={fargoth}></JournalEntry>
            <JournalEntry id={"journal-entry-right"} content={fargoth}></JournalEntry>
            <Prev></Prev>
            <Next></Next>
        </div>
    )
}