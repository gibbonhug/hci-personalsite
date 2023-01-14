import turnAudio from '../assets/turn.mp3';

export default function Next() {
    const turnAudioObject = new Audio(turnAudio);

    const playAudio = () => {
        // if it is already playing sound, stop the sound
        turnAudioObject.pause();
        turnAudioObject.currentTime = 0;
        // play
        turnAudioObject.play();
    }

    return (
        <div className="temp" onClick={playAudio}><span>Next</span></div>
    )
}