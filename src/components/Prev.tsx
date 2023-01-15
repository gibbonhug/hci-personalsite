interface PrevProps {
    updatePageFromDirection: Function;
    playAudio: Function;
    audio: HTMLAudioElement;
}

export default function Prev(props: PrevProps) {
    const handleClick = () => {
        props.playAudio(props.audio);
        props.updatePageFromDirection(false);
    }

    return (
        <div className="temp" onClick={handleClick}><span>Prev</span></div>
    )
}