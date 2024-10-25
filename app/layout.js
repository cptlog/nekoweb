import localFont from "next/font/local";
import Link from "next/link";
import Image from "next/image";
import "./globals.css";

const airstrip = localFont({
  src: "./fonts/Airstrip.ttf",
  variable: "--font-airstrip"
})

const sofachrome = localFont({
  src: "./fonts/Sofachrome.otf",
  variable: "--font-sofachrome"
})

const ubuntu = localFont({
  src: "./fonts/Ubuntu.ttf",
  variable: "--font-ubuntu"
})


export const metadata = {
  title: "DIVISION",
  description: "personal blog",
}

const links = [
  {
    name: 'index',
    url: '/',
    id: 1
  },
  {
    name: 'about',
    url: '/about',
    id: 2
  },
  {
    name: 'blog',
    url: '/blog',
    id: 3
  },
  {
    name: 'gallery',
    url: '/gallery',
    id: 4
  },
  {
    name: 'resources',
    url: '/resources',
    id: 5
  }
]

export default function RootLayout({ children }) {

  let header = (
    <header>
      <h1>DIVISION</h1>
    </header>
  )

  let footer = (
    <footer>
      <p>hosted on <a href="https://nekoweb.org/">nekoweb</a></p>
    </footer>
  )

  return (
    <html lang="en">
      <body>
        <div className="flex justify-center h-dvh">
          <div className="w-full xl:w-3/4 max-w-[1200px] px-6 grid grid-cols-1 lg:grid-cols-[300px_auto] auto-rows-auto lg:grid-rows-[150px_30px_auto_50px]">
            <div className="col-span-2 text-center h-[100px] lg:h-full content-center border-4 border-t-0 border-accent -z-20 rounded-b">
              <h1 className="font-sofachrome text-accent italic tracking-widest">
                DIVISION
              </h1>
            </div>

            <div className="col-span-2 text-center font-airstrip text-lg -mt-4">
              {links.map(link =>
                <Link key={link.name} href={link.url} className="relative p-[2px] bg-background hover:bg-accent mx-4 hover:text-background before:content-['\00A0'] before:absolute before:-z-10 before:w-pad before:-translate-x-pad before:px-2 before:-skew-x-12 before:rounded-md before:hover:border-4 before:hover:border-background before:hover:-mt-1 before:hover:bg-accent">{link.name}</Link>
              )}
            </div>

            <div className="col-span-2 lg:col-span-1 order-2 lg:order-none flex lg:block h-[340px] lg:h-auto gap-6 lg:gap-0">
              <div className="border-4 border-accent rounded min-h-[334px] text-center w-1/2 lg:w-full">
                <h4 className="font-sofachrome text-accent italic tracking-widest my-2">LAST.FM</h4>
                <a href="https://www.last.fm/user/divisionair"><img src="https://lastfm-recently-played.vercel.app/api?user=divisionair&count=4&width=300&header_style=none&footer_style=normal&bg_color=00000000" /></a>
              </div>

              <div className="border-4 border-accent rounded lg:h-fit text-center lg:mt-7 w-1/2 lg:w-full">
                <h4 className="font-sofachrome text-accent italic tracking-widest my-2">UPDATES</h4>
                <p>map updates from markdown</p>
                <p>its broken rn lol</p>
              </div>
            </div>

            <div className="lg:overflow-y-auto m-4 lg:ml-6 lg:wrap">{children}</div>

            <div className="col-span-2 text-center text-sm order-3 lg:order-none">hosted on <a href="https://nekoweb.org/">nekoweb</a></div>
          </div>
        </div>
      </body>
    </html>
  );
}
