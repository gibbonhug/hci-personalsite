import turnAudio from '../assets/turn.mp3';

interface NextProps {
    updatePageFromDirection: Function;
}

export default function Next(props: NextProps) {
    const handleClick = () => {
        playAudio();
        props.updatePageFromDirection(true);
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
        <div className="temp" onClick={handleClick}><span>Next</span></div>
    )
}