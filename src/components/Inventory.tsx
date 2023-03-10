import InventorySection from './InventorySection';
import gsuMapAsset from '../assets/gsumap.jpg';

interface InventoryProps {}

export default function Inventory(props: InventoryProps) {
    const sections = [
        {
            title: 'Julian Willis',
            body: (
                <div className='inventory-section-inner-box'>
                    <div>
                        <h3 className="inventory-light-text">
                            Major Skills (Course-Related)
                        </h3>
                        <ul>
                            <li>React.js</li>
                            <li>CSS</li>
                            <li>Research</li>
                            <li>Technical documentation</li>
                        </ul>
                    </div>
                    <hr></hr>
                    <div>
                        <h3 className="inventory-light-text">
                            Minor Skills (Course-Related)
                        </h3>
                        <ul>
                            <li>Graphic Design</li>
                            <li>Typography</li>
                        </ul>
                    </div>
                    <hr></hr>
                    <div>
                        <h3 className="inventory-light-text">
                            Misc Skills (Hobbies&Interests)
                        </h3>
                        <ul>
                            <li>Baking</li>
                            <li>Loose leaf tea</li>
                            <li>Tabletop games</li>
                            <li>Roguelike games</li>
                            <li>Running</li>
                            <li>Philosophy</li>
                            <li>Sudoku</li>
                            <li>Algorithms</li>
                            <li>Painting</li>
                            <li>Maskmaking (Venetian masks)</li>
                        </ul>
                    </div>
                </div>
            ),
        },
        {
            title: 'Aderhold Learning Center',
            body: <img src={gsuMapAsset}></img>,
        },
        {
            title: 'Engraved Ring of Healing',
            body: (
                <div className="inventory-light-text inventory-section-inner-box">
                    <div className="inventory-magic-section-flexbox">
                        <div>Magic Items</div>
                        <div>Cost/Charge</div>
                    </div>
                    <hr></hr>
                    <div className="inventory-magic-section-flexbox">
                        <div>Engraved Ring of Healing</div>
                        <div>5/20</div>
                    </div>
                </div>
            ),
        },
    ];

    return (
        <div id="inventory">
            <InventorySection
                content={sections[0]}
                id={'inventory-section-1'}
            ></InventorySection>
            <InventorySection
                content={sections[1]}
                id={'inventory-section-2'}
            ></InventorySection>
            <InventorySection
                content={sections[2]}
                id={'inventory-section-3'}
            ></InventorySection>
        </div>
    );
}
