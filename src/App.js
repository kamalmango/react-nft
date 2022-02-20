import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import CollectionCard from './components/CollectionCard';
import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {
  const [punkListData, setPunkListData] = useState([])

  useEffect(() => {
    const getMyNfts = async () => {
      const openseaData = await axios.get(
        'https://testnets-api.opensea.io/assets?asset_contract_address=0x1679e5ECB16B758C4A45F1F1b1092267d5374ceb&order_direction=asc'
      )
      console.log(openseaData.data.assets)
      setPunkListData(openseaData.data.assets)
    }

    return getMyNfts()
  }, [])

  return (
    <div className='app'>
      <Header />
      <CollectionCard 
        id={0} 
        name={'Bandana Punk'} 
        traits={[{'value': 7}]} 
        image='https://ipfs.thirdweb.com/ipfs/QmZ5fD3UTRh8ALZCpMdypHkhMQSXyi4yyCz3Ea19kPmtXg/0.jpg' 
      />
    </div>
  );
}

export default App;
