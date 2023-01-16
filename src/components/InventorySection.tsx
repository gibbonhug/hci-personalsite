interface InventorySectionProps {
    id: string;

    content: {
        title: string;
        body: JSX.Element;
    }
}

export default function InventorySection(props: InventorySectionProps) {
    return (
        <div className="inventory-section mw-section" id={props.id}>
            <div className="inventory-section-title-group">
                <div className="inventory-section-title-texture"></div>
                <h2 className="inventory-section-title-text">{props.content.title}</h2>
                <div className="inventory-section-title-texture"></div>
            </div>
            <div className='inventory-section-content'>
                {props.content.body}
            </div>
        </div>
    );
}
