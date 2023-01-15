interface InventoryProps {

}

export default function Inventory(props: InventoryProps) {
    return (
        <div id='inventory' className='mw'>
            <div>Major Skills (Course-Related)
                <ul>
                    <li>React.js</li>
                    <li>CSS</li>
                    <li>Research</li>
                    <li>Technical documentation</li>
                </ul>
            </div>
            <div>Minor Skills (Course-Related)
                <ul>
                    <li>Graphic Design</li>
                    <li>Typography</li>
                </ul>
            </div>
            <div>Misc Skills (Hobbies/Interests)</div>
                <ul>
                    <li>Maskmaking (Venetian masks)</li>
                    <li>Painting</li>
                    <li>Baking</li>
                    <li>Loose leaf tea</li>
                    <li>Tabletop games</li>
                    <li>Roguelike games</li>
                    <li>Philosophy</li>
                    <li>Sudoku</li>
                    <li>Algorithms</li>
                    <li>Running</li>
                </ul>
        </div>
    )
}