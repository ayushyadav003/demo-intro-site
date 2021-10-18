import './App.css';
import React from 'react'
import Info from './components/Info/Info'
import Intro from './components/Intro/Intro'
import Services from './components/Services/Services'
import Team from './components/Team/Team';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';


export default function App() {
  return (
    <div>
        <div className='body'>
        <Navbar />
        <Intro/>
        <Info/>
        <Services/>
        <Team/>
        <Footer/>
      </div>
    </div>
  )
}



