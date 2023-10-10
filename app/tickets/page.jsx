import { Suspense } from 'react'
import TicketList from './TicketList'
import Loading from '../loading'
import Link from 'next/link'

const Tickets = () => {
  return (
    <main>
      <nav>
        <div>
          <h2>Tickets</h2>
          <p><small>Currently Open Tickets.</small></p>
        </div>
        <Link href='/create'>
        <button className="btn-primary">Add</button>
        </Link>
      </nav>
      
      <Suspense fallback={<Loading />}>
        <TicketList />
      </Suspense> 
    </main>
  )
}

export default Tickets