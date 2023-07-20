import Link from "next/link";

export default function Home() {
    return (
        <main className="mt-5">
            <Link href={"ceg"}>
                <p>Cég oldal</p>
            </Link>
        </main>
    );
}
