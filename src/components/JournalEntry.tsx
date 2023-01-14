interface JournalEntryProps {
    id: string;
    content: {
        title: string;
        body: JSX.Element;
    };
}

export default function JournalEntry(props: JournalEntryProps) {
    return (
        <div className="journal-entry" id={props.id}>
            <h2>{props.content.title}</h2>
            {props.content.body}
        </div>
    );
}