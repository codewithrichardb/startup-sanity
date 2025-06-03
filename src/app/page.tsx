import Link from 'next/link'
import React from 'react'

function Homepage() {
  return (
    <div>
      <h1>Startup sanity</h1>
      <p>Privately log toxic behaviors, detect patterns, and protect your mental clarity in dysfunctional work environments.</p>
      <Link href="/login">Get started</Link>
      </div>
  )
}

export default Homepage