import * as React from 'react'
import { useSendTransaction } from 'wagmi'
import { parseEther } from 'viem'

export function SendTransaction() {
    const { data: hash, sendTransaction } = useSendTransaction()

    async function submit(e) {
        e.preventDefault()
        const formData = new FormData(e.target)
        const to = formData.get('address')
        const value = formData.get('value')
        sendTransaction({ to, value: parseEther(value) })
    }

    return (
        <form onSubmit={submit}>
            <input name="address" placeholder="0xA0Cf…251e" required />
            <input name="value" placeholder="0.05" required />
            <button type="submit">Send</button>
            {hash && <div>Transaction Hash: {hash}</div>}
        </form>
    )
}