interface NextProps {
    updatePageFromDirection: Function;
    playAudio: Function;
    audio: HTMLAudioElement;
}

export default function Next(props: NextProps) {
    const handleClick = () => {
        props.playAudio(props.audio);
        props.updatePageFromDirection(true);
    }


    return (
        <div className="temp" onClick={handleClick}><span>Next</span></div>
    )
}