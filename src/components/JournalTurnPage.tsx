interface JournalTurnPageProps {
    handleTurnPage: Function;
    direction: boolean;
    text: string;
}

export default function JournalTurnPage(props: JournalTurnPageProps) {
    const handleClick = () => {
        props.handleTurnPage(props.direction);
    };

    return (
        <div className="journal-turn-page" onClick={handleClick}>
            <span>{props.text}</span>
        </div>
    );
}
