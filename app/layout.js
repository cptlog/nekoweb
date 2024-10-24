import localFont from "next/font/local";
import Link from "next/link";
import "./globals.css";
import getPostMetadata from "@/utils/getPostMetadata";
import UpdateCard from "@/components/UpdateCard";

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
  }
]

const Updates = () => {
  const postMetadata = getPostMetadata('updates')
  return (
        <div className="text-xs text-accent border-4 border-accent rounded">
        <div className="font-sofachrome text-sm tracking-widest bg-accent border-b-4 border-accent text-background p-1 pl-2">updates</div>
        <div className="overflow-y-auto max-h-96">
          {postMetadata.map((post, postIndex) => {
            return (
              <UpdateCard key={postIndex} post={post} />
            )
          })}
        </div>
      </div>
  );
}

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
        <div className="flex justify-center">
            <div className="w-full md:w-3/4 max-w-[1080px] px-6 grid grid-cols-[180px_auto] grid-rows-[180px_30px_auto_50px]">
                <div className="col-span-2 text-center h-full content-center border-4 border-t-0 border-accent -z-20 rounded-b">
                    <h1 className="font-sofachrome text-accent italic tracking-widest">
                      DIVISION
                    </h1>
                </div>

                <div className="col-span-2 text-center font-airstrip text-lg -mt-4">
                  {links.map(link =>
                      <Link key={link.name} href={link.url} className="relative p-[2px] bg-background hover:bg-accent mx-4 hover:text-background before:content-['\00A0'] before:absolute before:-z-10 before:w-[150%] before:translate-x-[-15%] before:-skew-x-12 before:rounded-md before:hover:border-4 before:hover:border-background before:hover:-mt-1 before:hover:bg-accent">{link.name}</Link>
                    )}
                </div>

                <div>
                  <Updates />
                </div>

                <div className="overflow-y-auto ml-4 wrap">{children}</div>

                <div className="col-span-2 text-center text-sm">hosted on <a href="https://nekoweb.org/">nekoweb</a></div>
            </div>
        </div>
      </body>
    </html>
  );
}
