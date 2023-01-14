import JournalEntry from "./JournalEntry";
import Prev from "./Prev";
import Next from "./Next";

export default function Journal() {
    return (
        <div id="journal">
            <JournalEntry id={"journal-entry-left"}></JournalEntry>
            <JournalEntry id={"journal-entry-right"}></JournalEntry>
            <Prev></Prev>
            <Next></Next>
        </div>
    )
}