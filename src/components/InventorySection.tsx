interface InventorySectionProps {
    title: string;
}

export default function InventorySection(props: InventorySectionProps) {
    return (
        <div className='inventory-item mw'>{props.title}</div>
    )
}