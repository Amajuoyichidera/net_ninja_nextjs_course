import Link from "next/link"

function NotFound() {
  return (
    <main className="text-center">
        <h2 className="text-3xl">There Was a problem.</h2>
        <p>Page Not Found</p>
        <p>Go Back <Link href='/'>Home</Link></p>
    </main>
  )
}

export default NotFound