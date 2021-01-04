import React from 'react'
import Link from 'next/link'
import { useAtom } from 'jotai'

import { Card } from 'lib/components/Card'
import { Collapse } from 'lib/components/Collapse'
import { DepositUI } from 'lib/components/DepositUI'
import { PrizeCard } from 'lib/components/PrizeCard'
import { WithdrawUI } from 'lib/components/WithdrawUI'
import { DepositorOddsCards } from 'lib/components/DepositorOddsCards'
import { networkAtom } from 'lib/hooks/useNetwork'
import { poolAddressesAtom } from 'lib/hooks/usePoolAddresses'

export const DepositorUI = (props) => {
  const [network] = useAtom(networkAtom)
  const [poolAddresses] = useAtom(poolAddressesAtom)

  return (
    <>
      <PrizeCard className='mb-4' />
      <DepositorOddsCards />
      <Card>
        <Collapse title='Deposit to win' openOnMount>
          <DepositUI />
        </Collapse>
      </Card>
      <Card>
        <Collapse title='Withdraw'>
          <WithdrawUI />
        </Collapse>
      </Card>
      <Link
        href='/pools/[networkName]/[prizePoolAddress]/manage'
        as={`/pools/${network.name}/${poolAddresses.prizePool}/manage`}
      >
        <a
          className={
            'text-base sm:text-xl underline font-bold text-accent-1 trans hover:opacity-50 text-center mx-auto'
          }
        >
          View Pool Details
        </a>
      </Link>
    </>
  )
}
