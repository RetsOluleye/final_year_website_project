import React from 'react'
import './AppDownload.css'
import { assets } from '../../assets/assets'

const AppDownload = () => {
  return (
    <div className='down'>
    <div className='app-download' id='app-download'>
      <div>
      <img className='picture' src="https://res.cloudinary.com/dwq6bgyul/image/upload/v1748881887/iPhone_13_Pro_qzglkn.png" alt="" />
        </div>
        <div className='top'>
        <p>For Better Experience Download <br /> Retskitchen App</p>
        <div className="app-download-platforms">
            <img src={assets.play_store} alt="" />
            <img src={assets.app_store} alt="" />
        </div>
        </div>
        
    </div>
    <div>
          <img className='add' src="https://res.cloudinary.com/dwq6bgyul/image/upload/v1749045648/Ordering_APP_zfey9c.png" alt="" />
        </div>
        </div>
  )
}

export default AppDownload