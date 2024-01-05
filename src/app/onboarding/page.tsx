'use client'

import * as React from 'react'
import { useUser } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'
import { completeOnboarding } from './_actions'


export default function Onboarding() {
  const { user } = useUser()
  const router = useRouter()

  const handleSubmit = async () => {
    await completeOnboarding()
    await user?.reload()
    console.log('testing', user)
    router.push("/dashboard")
  }

  return (
    <>
      <form action={handleSubmit}>
        <button type="submit">Complete</button>
      </form>
    </>
  )
}
