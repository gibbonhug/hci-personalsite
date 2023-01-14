import JournalEntry from "./JournalEntry";
import Prev from "./Prev";
import Next from "./Next";

export default function Journal() {
    const text = <p>I'm a JSX element</p>

    const textFargoth = (
        <p>
            I have met a Bosmer named <span>Fargoth</span> who claims to <span>Imperial</span>s have stolen a <span>ring</span> of his. He would like it back.
        </p>
    );

    return (
        <div id="journal">
            <JournalEntry id={"journal-entry-left"} text={textFargoth}></JournalEntry>
            <JournalEntry id={"journal-entry-right"} text={text}></JournalEntry>
            <Prev></Prev>
            <Next></Next>
        </div>
    )
}