export default function Prev() {
    const prevSound = new Audio("/turn.mp3")

    const play = () => {
        prevSound.play()
    }

    return (
        <div className="temp" onClick={play}>Prev</div>
    )
}