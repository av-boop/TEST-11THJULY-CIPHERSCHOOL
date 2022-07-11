import React from 'react'




export default function Divs({text1,text2,text3}) {
  return (
    
    
    <div className='container'>
     <div className='img-holder'>
        <img src='img1.jpg'></img>
     </div>
     <div className='title-holder'>
        {text1}
     </div>
     <div className='ratings-holder'>
        {text2}
     </div>
     <div className='price-holder'>
        {text3}
     </div>
     <div className='buttons-holder'>
        <button className='btn'>Add To Cart</button>
        <button className='btn'>Make Offer</button>
     </div>



    </div>
  )
}
