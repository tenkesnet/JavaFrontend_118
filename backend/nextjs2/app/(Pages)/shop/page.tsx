import Link from "next/link";

export default function Shop() {
    return (
        <div>
            <h2>
                <Link href={"/shop/desktop"}>Desktop</Link>
            </h2>
            <h2>
                <Link href={"/shop/Alma"}>Alma</Link>
            </h2>
            <h2>
                <Link href={"/shop/Laptop"}>Laptop</Link>
            </h2>
            <h2>
                <Link href={"/shop/Monitor"}>Monitor</Link>
            </h2>
            <h2>
                <Link href={"/shop/SSD"}>SSD</Link>
            </h2>
        </div>
    );
}
