import Journal from "./Journal";

import titleAudioImport from '../assets/title.mp3';
import { useEffect } from "react";

export default function App() {
    const titleAudio = new Audio(titleAudioImport);

    // Play audio on render (note: will only work if user allows autoplay)
    useEffect(() => {
        titleAudio.play();
    }, []);

    // Loop audio
    titleAudio.addEventListener('ended', () => {
        titleAudio.currentTime = 0;
        titleAudio.play();
    })
    
    return (
        <div id="app-wrapper">
            <Journal></Journal>
        </div>
    )
}