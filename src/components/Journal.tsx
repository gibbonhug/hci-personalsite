import JournalEntry from './JournalEntry';
import JournalTurnPage from './JournalTurnPage';
import { useEffect, useState } from 'react';
import turnAudioImport from '../assets/turn.mp3';

interface JournalProps {
    playAudio: Function;
}

export default function Journal(props: JournalProps) {
    /*
        STATE
    */

    // Page turned with Next/Prev component click
    const [curPage, setCurPage] = useState(0);

    /*
        TURNING PAGE
    */

    useEffect(() => {
        const handleKeyPress = (event: KeyboardEvent) => {
            if (event.key === 'ArrowLeft') {
                handleTurnPage(false);
            } else if (event.key === 'ArrowRight') {
                handleTurnPage(true);
            }
        };

        document.addEventListener('keydown', handleKeyPress);

        return () => {
            document.removeEventListener('keydown', handleKeyPress);
        };
    }, [curPage]);

    /**
     * Function to call whenever do something to turn a page (next/prev or arrow keys)
     *
     * First checks if we are making a valid turn (calls isValidPageTurn)
     *
     * @param direction Whether we are turning to prev page (false) or next page (true)
     */
    const handleTurnPage = (direction: boolean) => {
        // closured functions
        const isValidPageTurn = (direction: boolean) => {
            // Do not turn backwards if we are on the 0th page
            if (curPage === 0 && direction === false) {
                return false;
            }

            // Do not turn forwards if we are on the last page
            if (
                curPage >= Math.ceil(entries.length / 2) &&
                direction === true
            ) {
                return false;
            }

            return true;
        };

        const updatePageFromDirection = (direction: boolean) => {
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

        if (!isValidPageTurn(direction)) {
            return;
        }

        // Valid turn
        props.playAudio(turnAudio);
        updatePageFromDirection(direction);
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
            title: '13 January (Day 1)',
            body: (
                <p>
                    My <span>orders</span> are to go to{' '}
                    <span>
                        Human Computer Interaction (CSC4720, Spring 2023)
                    </span>{' '}
                    at <span>Georgia State University</span> and report to an
                    instructor named <span>Carol Bales</span>. To find out what
                    classroom she teaches in, I should consult the{' '}
                    <span>Internet</span> on the online portal called{' '}
                    <span>Paws</span>. When I find <span>Carol Bales</span>, I
                    must give her my attention, and wait for further{' '}
                    <span>orders</span>.
                </p>
            ),
        },
        {
            title: '13 January (Day 1)',
            body: (
                <p>
                    I have met a classmate named <span>Fargoth</span> who claims
                    someone has stolen a <span>ring</span> of his. He would like
                    it back.
                </p>
            ),
        },
        {
            title: '3 February (Day ??)',
            body: <p>User & Problem Research Paper</p>,
        },
        {
            title: '17 February (Day ??)',
            body: <p>Team Skit & User Scenario</p>,
        },
        {
            title: '3 March (Day ??)',
            body: <p>Team Project Phase 1 Interactive Prototype</p>,
        },
        {
            title: '14 April (Day ??)',
            body: <p>Team Project Phase 2: Evaluated Prototype</p>,
        }
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
            <JournalTurnPage
                handleTurnPage={handleTurnPage}
                direction={false}
                text={'Prev'}
            ></JournalTurnPage>
            <JournalTurnPage
                handleTurnPage={handleTurnPage}
                direction={true}
                text={'Next'}
            ></JournalTurnPage>
        </div>
    );
}
