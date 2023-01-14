import JournalEntry from "./JournalEntry";
import Prev from "./Prev";
import Next from "./Next";

export default function Journal() {
    const text = <p>I'm a JSX element</p>

    return (
        <div id="journal">
            <JournalEntry id={"journal-entry-left"} text={text}></JournalEntry>
            <JournalEntry id={"journal-entry-right"} text={text}></JournalEntry>
            <Prev></Prev>
            <Next></Next>
        </div>
    )
}