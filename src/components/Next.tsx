interface NextProps {
    handleTurnPage: Function;
}

export default function Next(props: NextProps) {
    const handleClick = () => {
        props.handleTurnPage(true);
    };

    return (
        <div className="temp" onClick={handleClick}>
            <span>Next</span>
        </div>
    );
}
