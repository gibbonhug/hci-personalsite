import turnAudio from '../assets/turn.mp3';

interface NextProps {
    updatePage: Function;
}

export default function Next(props: NextProps) {
    const onClick = () => {
        playAudio();
        props.updatePage(false);
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
        <div className="temp" onClick={onClick}><span>Next</span></div>
    )
}