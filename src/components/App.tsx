import Journal from './Journal';

import titleAudioImport from '../assets/title.mp3';
import { useEffect, useState } from 'react';

export default function App() {
    // Open journal with 'j' key event listener; for conditional rendering

    const [isJournalOpen, setIsJournalOpen] = useState(false);

    const titleAudio = new Audio(titleAudioImport);

    // Play audio on render (note: will only work if user allows autoplay)
    useEffect(() => {
        titleAudio.play();
    }, []);

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

    // Loop audio
    titleAudio.addEventListener('ended', () => {
        titleAudio.currentTime = 0;
        titleAudio.play();
    });

    return (
        <div id="app-wrapper">
            <div className='temp'>Open Journal with the J key</div>
            {isJournalOpen && <Journal></Journal>}
        </div>
    );
}
