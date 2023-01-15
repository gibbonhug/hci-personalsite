import turnAudio from '../assets/turn.mp3';

interface PrevProps {
    updatePageFromDirection: Function;
}

export default function Prev(props: PrevProps) {
    const handleClick = () => {
        playAudio();
        props.updatePageFromDirection(false);
    }

    const turnAudioObject = new Audio(turnAudio);

    const playAudio = () => {
        // if it is already playing sound, stop the sound
        turnAudioObject.pause();
        turnAudioObject.currentTime = 0;
        // play
        turnAudioObject.play();
    }

    return (
        <div className="temp" onClick={handleClick}><span>Prev</span></div>
    )
}