interface PrevProps {
    handleTurnPage: Function;
}

export default function Prev(props: PrevProps) {
    const handleClick = () => {
        props.handleTurnPage(false);
    };

    return (
        <div className="temp" onClick={handleClick}>
            <span>Prev</span>
        </div>
    );
}
