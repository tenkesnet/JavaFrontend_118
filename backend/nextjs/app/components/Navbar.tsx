import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="flex justify-between items-center py-4">
            <p className="text-2xl font-bold text-grey-800">My App</p>
            <div className="flex">
                <Link href="/">
                    <div className="mr-4 text-grey-500 hover:text-grey-700">
                        Home
                    </div>
                </Link>
                <Link href="/about">
                    <div className="mr-4 text-grey-500 hover:text-grey-700">
                        About
                    </div>
                </Link>
                <Link href="/contact">
                    <div className="mr-4 text-grey-500 hover:text-grey-700">
                        Contact
                    </div>
                </Link>
            </div>
        </nav>
    );
}
