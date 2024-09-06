import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
    title: "Users",
    alternates: {
        canonical: `${process.env.PUBLIC_URL}/users`
    },
}

const UserPage = () => {
  return (
    <div>UserPage</div>
  )
}

export default UserPage;