import Link from 'next/link'

const Navbar = () => {
  return (
    <nav>
        <h1>Dojo HelpDesk</h1>
        <Link href="/">DashBoard</Link>
        <Link href="/tickets">Tickets</Link>
    </nav>
  )
}

export default Navbar