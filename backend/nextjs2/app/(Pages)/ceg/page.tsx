import Link from "next/link";

export default function Home() {
    return (
        <main className="flex, pt-4, text-center">
            <Link href={"/"}>
                <h1>Hello World</h1>
            </Link>
        </main>
    );
}
