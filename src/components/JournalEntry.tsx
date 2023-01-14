interface JournalEntryProps {
    id: string;
}

export default function JournalEntry(props: JournalEntryProps) {
    return (
        <div className="journal-entry" id={props.id}>
            <p>
               I'm a little paragraph
            </p>
        </div>
    )
}