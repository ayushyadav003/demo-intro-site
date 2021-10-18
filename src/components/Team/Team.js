import React from 'react'
import './Team.css'

import ETHAN from './ETHAN.jpg'
import HARRY from './HARRY.jpg'
import JJ from './JJ.JPG'
import Miniminter from './Miniminter.jpg'
import josh from './josh.jpg'
import vikram from './vikram.png'
import tobi from './tobi.jpg'

export default function Team() {
     return (
          <div className='space mt7 tc'>
               <h1 className='bg-white ba br4 pv1 mb4'>Our Team</h1>

               <div className='grow card'>
                    <img className='teamImage' src={JJ} alt='P' />    
                    <a className="white no-underline" href='0'>
                          <h3 >KSI</ h3>
                    </a>
               </div>

               <div className='card grow '>
               <img className='teamImage' src={HARRY} alt='P' />
               <a href='0'  className="white no-underline"><h3>Harry</h3></a></div>

               <div className='card grow'>
               <img className='teamImage' src={ETHAN} alt=' h3' />
               <a href='0'  className="white no-underline"> <h3>Ethan</ h3></a></div>

               <div className='card grow'>
               <img className='teamImage' src={Miniminter} alt='P' />
               <a href='0'  className="white no-underline"> <h3>Miniminter</ h3></a></div>

               <div className='card grow'>
               <img className='teamImage' src={josh} alt='P'/>
               <a href='0'  className="white no-underline"> <h3>josh</ h3></a></div>

               <div className='card grow'>
               <img className='teamImage' src={tobi} alt='P' />
               <a href='0'  className="white no-underline"> <h3 >Tobi</ h3></a></div>

               <div className='card grow'>
               <img className='teamImage' src={vikram} alt='P'/>
               <a href='0'  className="white no-underline"> <h3>VIKKSTAR</ h3></a></div>
          </div>
     )
}
