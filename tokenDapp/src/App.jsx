import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useContractRead } from 'wagmi';
import myTokenAbi from "../utils/abi.json";


function App() {

  const { data, isError, isLoading } = useContractRead({
    address: '0x279BD4f42D00490C6cB39b034668492cB6C88474',
    abi: myTokenAbi,
    functionName: 'symbol',
  })

  return (
    <>
      <ConnectButton />
      <div>Token: {data || 'nil'}</div>
    </>
  )
}

export default App
