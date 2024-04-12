
import { SendTransaction } from './SendTransaction';
import ReadContract from './readContract';
import WriteContract from './writeContract';
import { useAccount, useConnect, useDisconnect } from 'wagmi'


function App() {
  const account = useAccount()
  const { connectors, connect, status, error, isConnected } = useConnect()
  const { disconnect } = useDisconnect()
  return (
    <>
      <div>
        <h2>Account</h2>

        <div>
          status: {account.status}
          <br />
          addresses: {JSON.stringify(account.addresses)}
          <br />
          chainId: {account.chainId}
        </div>

        {account.status === 'connected' && (
          <button type="button" onClick={() => disconnect()}>
            Disconnect
          </button>
        )}
      </div>

      <div>
        <h2>Connect</h2>
        {connectors && connectors.length > 0 && connectors.map((connector) => (
          <button
            key={connector.uid}
            onClick={() => connect({ connector })}
            type="button"
          >
            {connector.name}
          </button>
        ))}
        {console.log(isConnected, connectors, account.status)}
        <div>{status}</div>
        <div>{error}</div>
      </div>
      <SendTransaction />
      <ReadContract />
      <WriteContract />
    </>

  )
}

export default App