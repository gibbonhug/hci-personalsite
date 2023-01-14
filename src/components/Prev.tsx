import audio from '../assets/turn.mp3';

export default function Prev() {
    const aud_obj = new Audio(audio)

    const play = () => {
        aud_obj.play()
    }

    return (
        <div className="temp" onClick={play}>Prev</div>
    )
}