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
            <h4>dev courses</h4>
            <ul className="list-disc list-inside py-2">
                <li>
                    <Link href="https://fullstackopen.com/en/">full stack open</Link> - javascript, react
                </li>
                <li>
                    <Link href="https://www.htmldog.com/">htmldog</Link> - html, css, javascript
                </li>
            </ul>
            <h4>image processing</h4>
            <ul className="list-disc list-inside py-2">
                <li>
                    <Link href="https://imagecompressor.com/">optimizilla</Link>
                </li>
                <li>
                    <Link href="https://microstudio.io/gilles/pixelify/">pixelify</Link>
                </li>
                <li>
                    <Link href="https://doodad.dev/dither-me-this/">dither me this</Link>
                </li>
            </ul>
            <h4>miscellaneous</h4>
            <ul className="list-disc list-inside py-2">
                <li>
                    <Link href="https://github.com/JeffreyCA/lastfm-recently-played-readme">last.fm recently played</Link>
                </li>
            </ul>
        </main>
    )
}