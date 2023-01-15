import Journal from "./Journal";

import titleAudioImport from '../assets/title.mp3';

export default function App() {
    const titleAudio = new Audio(titleAudioImport);

    titleAudio.play(); // need to add logic to loop
    
    return (
        <div id="app-wrapper">
            <Journal></Journal>
        </div>
    )
}