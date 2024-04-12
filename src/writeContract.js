

import { simulateContract, writeContract } from '@wagmi/core'
import { abi } from './abi'
import { config } from './config'
import { useEffect } from 'react'
import { useAccount, useConnect, useDisconnect } from 'wagmi'
import { polygonMumbai, polygon } from 'wagmi/chains'

const WriteContract = () => {
    const { isConnected } = useConnect()
    const account = useAccount()

    const write = async () => {
        try {
            if (account.status === "connected") {
                console.log("ji d");
                // const request = await writeContract(config, {
                //     abi,
                //     address: '0x6F3D64e226570fE58D257b085eb5E43B351109DD',
                //     functionName: 'approve',
                //     args: ["0x8011B8498D5A2E2062f21C81d252C4f623435fBe", 1e19],
                // })
                const request = await writeContract(config, {
                    abi,
                    address: '0xeE066b1C958642c55Aa64D355FDE20331E8C44D6',
                    functionName: 'games',
                    args: [1],
                    chainId: polygonMumbai.id,
                })
                console.log(request, "req");
            } else {
                console.log("not connected");
            }
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div onClick={() => write()}>Write</div>
    )
}

export default WriteContract;
