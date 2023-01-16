interface InventorySectionProps {
    title: string;
}

export default function InventorySection(props: InventorySectionProps) {
    return (
        <div className="inventory-section mw">
            <div className="inventory-section-title-group">
                <div className="inventory-section-title-texture"></div>
                <div className="inventory-section-title-text">{props.title}</div>
                <div className="inventory-section-title-texture"></div>
            </div>
        </div>
    );
}
