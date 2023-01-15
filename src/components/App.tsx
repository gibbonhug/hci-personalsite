import Journal from './Journal';
import titleAudioImport from '../assets/title.mp3';
// Could not find the actual journal open/close in assets but these will do
import openJournalAudioImport from '../assets/open.mp3';
import closeJournalAudioImport from '../assets/close.mp3';
import { useEffect, useState } from 'react';
import Inventory from './Inventory';

export default function App() {
    /*
        STATE
    */
    const [isJournalOpen, setIsJournalOpen] = useState(false);
    const [isInventoryOpen, setIsInventoryOpen] = useState(false);

    /*
        ESC CLOSES JOURNAL & INVENTORY
    */

    

    /*
        INVENTORY OPENENING/CLOSING w RIGHT CLICK
    */

    // right click mouse button is '2'
    // https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/button
    useEffect(() => {
        const handleClick = (event: MouseEvent) => {
            if (event.button === 2) {
                // close the journal if it's open
                if (isJournalOpen) {
                    setIsJournalOpen((isJournalOpen) => !isJournalOpen);
                }

                // no 'context menu'
                event.preventDefault();
                // open / close
                setIsInventoryOpen((isInventoryOpen) => !isInventoryOpen);
            }
        };

        document.addEventListener('mousedown', handleClick);

        return () => {
            document.removeEventListener('mousedown', handleClick);
        };
    }, [isInventoryOpen, isJournalOpen]);

    /*
        JOURNAL OPENING/CLOSING w J|j
    */

    const closeJournalAudio = new Audio(closeJournalAudioImport);
    const openJournalAudio = new Audio(openJournalAudioImport);

    // Open journal with 'j' key event listener; for conditional rendering
    useEffect(() => {
        const handleKeyPress = (event: KeyboardEvent) => {
            if (event.key === 'j' || event.key === 'J') {
                // close the inventory if it's open
                if (isInventoryOpen) {
                    setIsInventoryOpen((isInventoryOpen) => !isInventoryOpen);
                }

                if (isJournalOpen) {
                    playAudio(closeJournalAudio);
                } else {
                    playAudio(openJournalAudio);
                }
                setIsJournalOpen((isJournalOpen) => !isJournalOpen);


            }
        };

        document.addEventListener('keydown', handleKeyPress);

        return () => {
            document.removeEventListener('keydown', handleKeyPress);
        };
    }, [isJournalOpen, isInventoryOpen]);

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
            {!isJournalOpen && !isInventoryOpen && (
                <div className="temp">
                    Open Journal with the J key
                    <br />
                    Open inventory with left click
                </div>
            )}
            {isInventoryOpen && <Inventory></Inventory>}
            {isJournalOpen && <Journal playAudio={playAudio}></Journal>}
        </div>
    );
}
