interface JournalEntryProps {
    id: string;
    text: JSX.Element;
}

export default function JournalEntry(props: JournalEntryProps) {
    return (
        <div className="journal-entry" id={props.id}>
            {props.text}
        </div>
    )
}