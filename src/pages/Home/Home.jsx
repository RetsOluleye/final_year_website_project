import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header' 

import AppDownload from '../../components/AppDownload/AppDownload'
import CustomerReviewCarousel from '../../components/CustomerReview/CustomerReviewCarousel'

const Home = () => {

  const [category,setCategory] = useState("All");

  return (
    <div>
        <Header/>

        <div className='top'>
          <p className='dishes'>Popular Dishes</p>
          <div className='popular'>
            <div className='content'>
          <img src="https://res.cloudinary.com/dwq6bgyul/image/upload/v1749042833/menu_1_bilng6.png" alt="" />
          <p className='paragraph'>Jollof Rice</p>
          </div>
          <div className='content'>
          <img src="https://res.cloudinary.com/dwq6bgyul/image/upload/v1749042849/menu_2_nosbbt.png" alt="" />
          <p className='paragraph'>Bread & Egg</p>
          </div>
          <div className='content'>
          <img src="https://res.cloudinary.com/dwq6bgyul/image/upload/v1749042867/menu_3_v9wi4b.png" alt="" />
          <p className='paragraph'>Porridge Beans</p>
          </div>
          <div className='content'>
          <img src="https://res.cloudinary.com/dwq6bgyul/image/upload/v1749042888/menu_5_vr4msy.png" alt="" />
          <p className='paragraph'>Noodles</p>
          </div>
          <div className='content'>
          <img src="https://res.cloudinary.com/dwq6bgyul/image/upload/v1749043205/menu_4_pepwzj.png" alt="" />
          <p className='paragraph'>Chicken & chips</p>
          </div>
          <div className='content'>
          <img src="https://res.cloudinary.com/dwq6bgyul/image/upload/v1749043205/menu_4_pepwzj.png" alt="" />
          <p className='paragraph'>Fried Rice</p>
          </div>
        </div>
        </div>
          <div>
            <p className='review'>Customer Reviews</p>
        <CustomerReviewCarousel/>
        </div>
        
        <AppDownload/>
    </div>
  )
}

export default Home