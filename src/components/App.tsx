import Journal from './Journal';

import titleAudioImport from '../assets/title.mp3';
import { useEffect, useState } from 'react';

export default function App() {
    /*
        JOURNAL OPENING/CLOSING
    */
    const [isJournalOpen, setIsJournalOpen] = useState(false);

    // Open journal with 'j' key event listener; for conditional rendering
    useEffect(() => {
        const handleKeyPress = (event: KeyboardEvent) => {
            if (event.key === 'j' || event.key === 'J') {
                setIsJournalOpen((isJournalOpen) => (!isJournalOpen))
            }
        };

        document.addEventListener('keydown', handleKeyPress);

        return(() => {
            document.removeEventListener('keydown', handleKeyPress)
        })

    }, [isJournalOpen]);

    /*
        AUDIO
    */

    const titleAudio = new Audio(titleAudioImport);

    // Loop audio
    titleAudio.addEventListener('ended', () => {
        titleAudio.currentTime = 0;
        titleAudio.play();
    });

    // Play audio on render (note: will only work if user allows autoplay)
    useEffect(() => {
        titleAudio.play();
    }, []);

    return (
        <div id="app-wrapper">
            <div className='temp'>Open Journal with the J key</div>
            {isJournalOpen && <Journal></Journal>}
        </div>
    );
}
