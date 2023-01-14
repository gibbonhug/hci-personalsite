import JournalEntry from "./JournalEntry";

export default function Journal() {
    return (
        <div id="journal">
            <JournalEntry></JournalEntry>
            <JournalEntry></JournalEntry>
            <div className="temp">Prev</div>
            <div className="temp">Next</div>
        </div>
    )
}