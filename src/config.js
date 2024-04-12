import { http, createConfig } from 'wagmi'
import { mainnet, sepolia, polygonMumbai, polygon } from 'wagmi/chains'
// import { metaMask } from 'wagmi/connectors'

// import { jsonRpcProvider } from 'wagmi/providers/jsonRpc';
export const config = createConfig({
    chains: [mainnet, sepolia, polygonMumbai, polygon],
    // connectors: [metaMask()
    // ],
    transports: {

        [mainnet.id]: http(),
        [polygonMumbai.id]: http(),
        [polygon.id]: http(),
        [sepolia.id]: http(),
    },
})