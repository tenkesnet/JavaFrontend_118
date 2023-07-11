import Link from "next/link";

export default function Home() {
    return (
        <main className="flex, pt-4, text-center">
            <Link href={"Home"}>
                <p>Home</p>
            </Link>
        </main>
    );
}
