

import { readContract } from '@wagmi/core'

import { abi } from './abi'
import { config } from './config'
import { polygonMumbai, polygon } from 'wagmi/chains'
import { useEffect, useState } from 'react'

function ReadContract() {
    const [data, setData] = useState([]);
    const label = ["playerOne address", "playerTwo address", "playerOneScore uint256", "playerTwoScore uint256", "betAmount uint256", "winner address", "pot uint256", "closed bool", "gameId uint256"]
    const getData = async () => {
        // const result = await readContract(config, {
        //     abi,
        //     address: '0x6F3D64e226570fE58D257b085eb5E43B351109DD',
        //     functionName: 'allowance',
        //     args: ["0x8852e829F3f883d6D7Cf1aEF2574e6B538de80d0", "0x8011B8498D5A2E2062f21C81d252C4f623435fBe"],
        //     chainId: 137,
        // })
        const result = await readContract(config, {
            abi,
            address: '0xeE066b1C958642c55Aa64D355FDE20331E8C44D6',
            functionName: 'games',
            args: [1],
            chainId: polygonMumbai.id,
        })
        console.log(result, "res");
        setData(result)
        // return result;

    }
    return (
        <div className='Jsdkuahduh'>
            <p onClick={() => getData()}>Read</p>
            {data && data.length > 0 && data.map((e, i) => {
                return <p>{label[i] + " : " + e}</p>
            })}
        </div>
    );
}

export default ReadContract;