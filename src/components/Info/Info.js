import React from 'react'
import './info.css'
import { LoremIpsum } from 'react-lorem-ipsum';
import info1 from './info1.jpg'
import info2 from './info2.jpg'
import info3 from './info3.jpg'



export default function Info() {
     return (
               <div className='allspace' >
                    <div className='spacing'>
                         <div className='common'>
                              <h1>who are we?</h1>
                              <LoremIpsum p={1}/>
                         </div>
                         <div className='common'>
                              <h1>The Company</h1>
                              <LoremIpsum p={1}/>  
                         </div>
                         <div className='common'>
                              <h1>Our Strength</h1>
                              <LoremIpsum p={1} />
                         </div>
                    </div>
                    <div className='picbox'>
                         <img className='img' src={info1} alt="" />
                         <img className='img' src={info2} alt="" />
                         <img className='img' src={info3} alt="" width='600px' />
                    </div>     
               </div>             
     )    
}
