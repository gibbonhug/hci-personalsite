interface InventorySectionProps {
    id: string;

    content: {
        title: string;
        body: JSX.Element;
    }
}

export default function InventorySection(props: InventorySectionProps) {
    return (
        <div className="inventory-section mw" id={props.id}>
            <div className="inventory-section-title-group">
                <div className="inventory-section-title-texture"></div>
                <div className="inventory-section-title-text">{props.content.title}</div>
                <div className="inventory-section-title-texture"></div>
            </div>
            <div className='inventory-section-content mw'>
                {props.content.body}
            </div>
        </div>
    );
}
