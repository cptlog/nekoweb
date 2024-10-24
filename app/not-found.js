import Link from 'next/link'
 
export default function NotFound() {
  return (
    <Link className="container" href="/">
      <h2>NOT FOUND</h2>
      <p>could not find requested resource</p>
    </Link>
  )
}