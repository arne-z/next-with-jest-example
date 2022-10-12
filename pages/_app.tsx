import '@/styles/global.css'
import type { AppProps } from 'next/app'
import { init } from '@web3-onboard/react'
import injectedModule from '@web3-onboard/injected-wallets'

const injected = injectedModule()

const rpcApiKey = '<ALCHEMY_KEY>' || '<INFURA_KEY>'
const rpcUrl = `https://eth-mainnet.g.alchemy.com/v2/${rpcApiKey}` || `https://mainnet.infura.io/v3/${rpcApiKey}`

// initialize Onboard
init({
  wallets: [injected],
  chains: [
    {
      id: '0x1',
      token: 'ETH',
      label: 'Ethereum Mainnet',
      rpcUrl
    }
  ]
})

export default function MyApp({ Component, pageProps }: AppProps) {

  return <Component {...pageProps} />
}
