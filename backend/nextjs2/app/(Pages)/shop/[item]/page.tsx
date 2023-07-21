export default function ShopItem({ params }: { params: { item: string } }) {
    return (
        <div>
            <h2>Item: {params.item}</h2>
        </div>
    );
}
