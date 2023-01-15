import JournalEntry from './JournalEntry';
import Prev from './Prev';
import Next from './Next';
import { useState } from 'react';
import turnAudioImport from '../assets/turn.mp3';

export default function Journal() {
    // Page turned either with Next/Prev component click; or L/R keyboard arrows
    const [curPage, setCurPage] = useState(0);

    /*
        FUNCTIONS, EVT LISTENERS
    */

    /**
     * Function to be called when we click Prev or Next button on the Journal
     * @param direction: Whether we are turning to prev page (false) or next page (true)
     */
    const updatePageFromDirection = (direction: boolean) => {
        // Do not turn backwards if we are on the 0th page
        if (curPage === 0 && direction === false) {
            return;
        }

        // Do not turn forwards if we are on the last page
        if (curPage >= Math.ceil(entries.length / 2) && direction === true) {
            return;
        }

        /*
            Since there are 2 "entries" per "page turn" (left and right),
            I think it's easiest to "turn pages" 2 at a time, easily associating curPage and the entries array
        */
        if (direction === true) {
            setCurPage(curPage + 2);
        } else {
            setCurPage(curPage - 2);
        }

        return;
    };

    /**
     * Function called when user hits a key.
     * Same logic as hitting next/prev
     * Added as an event listener on the window object.
     *
     * @param event KeyboardEvent
     */
    const handleKeyPress = (event: KeyboardEvent) => {
        if (event.key === 'ArrowLeft') {
            updatePageFromDirection(false);
            playAudio(turnAudio);
        } else if (event.key === 'ArrowRight') {
            updatePageFromDirection(true);
            playAudio(turnAudio);
        }

        return;
    };

    // accessing window is I think bad practice but this is a 1-off project
    window.addEventListener('keydown', handleKeyPress);

    /**
     * Function called when we turn page with keyboard or next/prev
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

    /*
        DATA CONSTS
    */

    // imported mp3
    const turnAudio = new Audio(turnAudioImport);

    // Add new entries to morrowind journal here
    // Remember to wrap each body in a <p> tag
    const entries = [
        {
            title: '16 Last Seed (Day 1)',
            body: (
                <p>
                    My <span>orders</span> are to go to the town of{' '}
                    <span>Balmora</span> in <span>Vvardenfell District</span>{' '}
                    and report to a man named <span>Caius Cosades</span>. To
                    find out where he lives, I should ask in{' '}
                    <span>Balmora</span> at the cornerclub called the{' '}
                    <span>South Wall</span>. When I find{' '}
                    <span>Caius Cosades</span>, I must give him a package of
                    documents, and wait for further <span>orders</span>.
                </p>
            ),
        },
        {
            title: '16 Last Seed (Day 1)',
            body: (
                <p>
                    I have met a Bosmer named <span>Fargoth</span> who claims
                    the <span>Imperial</span>s have stolen a <span>ring</span>{' '}
                    of his. He would like it back.
                </p>
            ),
        },
        {
            title: '2',
            body: <p>I'm entry 2</p>,
        },
        {
            title: '3',
            body: <p>I'm entry 3</p>,
        },
    ];

    return (
        <div id="journal">
            <JournalEntry
                id={'journal-entry-left'}
                content={entries[curPage]}
            ></JournalEntry>
            <JournalEntry
                id={'journal-entry-right'}
                content={entries[curPage + 1]}
            ></JournalEntry>
            <Prev
                updatePageFromDirection={updatePageFromDirection}
                playAudio={playAudio}
                audio={turnAudio}
            ></Prev>
            <Next
                updatePageFromDirection={updatePageFromDirection}
                playAudio={playAudio}
                audio={turnAudio}
            ></Next>
        </div>
    );
}
