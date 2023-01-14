export default function Prev() {
    const prevSound = new Audio("/assets/turn.wav")

    const play = () => {
        prevSound.play()
    }

    return (
        <div className="temp" onClick={play}>Prev</div>
    )
}