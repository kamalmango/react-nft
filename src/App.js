import './App.css';
import Header from './components/Header';
import { useState, useEffect } from 'react'
import axios from 'axios'
import Punklist from './components/Punklist';
import Main from './components/Main';

function App() {
  const [punkListData, setPunkListData] = useState([])
  const [selectedPunk, setSelectedPunk] = useState(0)

  useEffect(() => {
    const getMyNfts = async () => {
      const openseaData = await axios.get(
        'https://testnets-api.opensea.io/assets?asset_contract_address=0x1679e5ECB16B758C4A45F1F1b1092267d5374ceb&order_direction=asc'
      )
      const sortedData = [...openseaData.data.assets].sort((a, b) =>  a.token_id - b.token_id)
      setPunkListData(sortedData)
    }

    return getMyNfts()
  }, [])

  return (
    <div className='app'>
      <Header />
      {punkListData.length > 0 && (
        <>
          <Main 
            punkListData={punkListData} 
            selectedPunk={selectedPunk} 
          />
          <Punklist 
            punkListData={punkListData} 
            setSelectedPunk={setSelectedPunk} 
          />
        </>
      )}
    </div>
  );
}

export default App;
