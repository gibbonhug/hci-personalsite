import Journal from "./Journal";

import titleAudioImport from '../assets/title.mp3';

export default function App() {
    const titleAudio = new Audio(titleAudioImport);

    titleAudio.play();
    
    return (
        <div id="app-wrapper">
            <Journal></Journal>
        </div>
    )
}