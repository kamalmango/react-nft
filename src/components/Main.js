import React from 'react'
import instagramLogo from '../assets/owner/instagram.png'
import twitterLogo from '../assets/owner/twitter.png'
import moreIcon from '../assets/owner/more.png'
import './Main.css'

const Main = () => {
  return (
    <div className='main'>
      <div className='mainContent'>
        <div className='punkHighlight'>
          <div className='punkContainer'>
            <img className='selectedPunk' src={'https://ipfs.thirdweb.com/ipfs/QmZ5fD3UTRh8ALZCpMdypHkhMQSXyi4yyCz3Ea19kPmtXg/0.jpg'} alt='' />
          </div>
        </div>
        <div className='punkDetails' style={{color: '#fff'}}>
          <div className='title'>Bandana Punk</div>
          <span className='itemNumber'>#3</span>
        </div>
        <div className='owner'>
          <div className='ownerImageContainer'>
            <img src={'https://ipfs.thirdweb.com/ipfs/QmZ5fD3UTRh8ALZCpMdypHkhMQSXyi4yyCz3Ea19kPmtXg/0.jpg'} alt='' />
          </div>
          <div className='ownerDetails'>
            <div className='ownerNameAndHandle'>
              <div>owner address</div>
              <div className='ownerHandle'>@cleverprogrammer</div>
            </div>
            <div className='ownerLink'>
              <img src={instagramLogo} alt='' />
            </div>
            <div className='ownerLink'>
              <img src={twitterLogo} alt='' />
            </div>
            <div className='ownerLink'>
              <img src={moreIcon} alt='' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main