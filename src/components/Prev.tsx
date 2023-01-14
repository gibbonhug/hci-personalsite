import turnAudio from '../assets/turn.mp3';

export default function Prev() {
    const turnAudioObject = new Audio(turnAudio);

    const playAudio = () => {
        turnAudioObject.play();
    }

    return (
        <div className="temp" onClick={playAudio}>Prev</div>
    )
}