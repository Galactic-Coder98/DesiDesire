import { Link } from "@nextui-org/link";

export default function Footer() {
    return (
        <footer className="flex justify-center items-center py-6 w-full">
            <Link
                className="flex gap-1 items-center text-current"
                href="/"
                title="DESIDESIRE Homepage"
            >
                <span className="text-default-600">&copy; {new Date().getFullYear()}</span>
                <p className="italic text-primary">DESIDESIRE. All rights reserved.</p>
            </Link>
        </footer>
    )
}