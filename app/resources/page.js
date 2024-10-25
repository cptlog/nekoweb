import Link from "next/link"

export default function Home() {
    return (
        <main>
            <h3>this site was built using ...</h3>
            <ul className="list-disc list-inside py-2">
                <li>
                    <Link href="https://nextjs.org/">next.js</Link>
                </li>
                <li>
                    <Link href="https://tailwindcss.com/">tailwind css</Link>
                </li>
                <li>
                    <Link href="https://code.visualstudio.com/docs">visual studio code</Link>
                </li>
            </ul>
            <hr />
            <h3>other cool stuff</h3>
            <ul className="list-disc list-inside py-2">
                <li>
                    <Link href="https://github.com/JeffreyCA/lastfm-recently-played-readme">last.fm recently played</Link>
                </li>
                <li>
                    <Link href="https://fullstackopen.com/en/">full stack open</Link> - free course on modern javascript-based web development
                </li>
            </ul>
        </main>
    )
}