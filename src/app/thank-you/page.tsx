import { Suspense } from 'react'
import ThankYou from './ThankYou'
import { CaseColor } from '@prisma/client'

const Page = () => {
  return (
    <Suspense>
      <ThankYou />
    </Suspense>
  )
}

export default Page
