'use server'

import { auth, clerkClient } from "@clerk/nextjs/server"

export const completeOnboarding = async () => {
  const { userId } = auth()

  if (!userId) {
    return { message: "No logged in user" }
  }

  try {
    await clerkClient.users.updateUser(userId, { publicMetadata: { onboardingComplete: true } })
    return { message: 'User updated' }
  } catch (e) {
    console.log('error', e)
    return { message: `Error updating user` }
  }
}
