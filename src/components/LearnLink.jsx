import Link from 'next/link'
import React from 'react'

const LearnLink = () => {
  const id=2;
  return (
    <>
      <button className="m-3 p-2  " >
        <Link href="/admin/dashboard"> Go to Admin Dashboard</Link><br/>
        <Link href={`/profile/user/${id}`}> Go to User Profile</Link>
      </button>
      </>
  )
}

export default LearnLink