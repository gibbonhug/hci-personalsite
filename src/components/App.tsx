import Journal from './Journal';
import titleAudioImport from '../assets/title.mp3';
// Could not find the actual journal open/close in assets but these will do
import openAudioImport from '../assets/open.mp3';
import closeAudioImport from '../assets/close.mp3';
import { useEffect, useState } from 'react';

export default function App() {
    /*
        JOURNAL OPENING/CLOSING
    */
    const [isJournalOpen, setIsJournalOpen] = useState(false);

    const closeAudio = new Audio(closeAudioImport);
    const openAudio = new Audio(openAudioImport);

    // Open journal with 'j' key event listener; for conditional rendering
    useEffect(() => {
        const handleKeyPress = (event: KeyboardEvent) => {
            if (event.key === 'j' || event.key === 'J') {
                if (isJournalOpen) {
                    playAudio(closeAudio);
                } else {
                    playAudio(openAudio);
                }
                setIsJournalOpen((isJournalOpen) => !isJournalOpen);
            }
        };

        document.addEventListener('keydown', handleKeyPress);

        return () => {
            document.removeEventListener('keydown', handleKeyPress);
        };
    }, [isJournalOpen]);

    /*
        AUTOPLAY TITLE AUDIO
    */

    const titleAudio = new Audio(titleAudioImport);

    // Loop audio
    titleAudio.addEventListener('ended', () => {
        playAudio(titleAudio);
    });

    // Play audio on render (note: will only work if user allows autoplay)
    useEffect(() => {
        playAudio(titleAudio);
    }, []);

    /**
     * Function called when we play an audio; checking if it is already playing with no clipping
     *
     * Pass in the audio to play
     *
     * @param audio The HTMLAudioElement (imported from mp3) to play
     */
    const playAudio = (audio: HTMLAudioElement) => {
        // if it is already playing sound, stop the sound
        audio.pause();
        audio.currentTime = 0;
        // play
        audio.play();
    };

    return (
        <div id="app-wrapper">
            <div className="temp">Open Journal with the J key</div>
            {isJournalOpen && <Journal playAudio={playAudio}></Journal>}
        </div>
    );
}
