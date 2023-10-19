import React from 'react'
import '../globals.css'
import { Link } from 'react-router-dom'
// import '../fonts/Agustina-Signature.otf'

const Navbar = () => {
  return (
    <div>
      <div className='p-7 flex mx-8 flex-row'>
        <div className='flex text-4xl text-center' style={{fontFamily:'Agustina Signature,Courier New'}}> 
            &lt;Harsh Dasila /&gt;
        </div>
        <ul className='flex text-center space-x-7 ml-30 absolute top-auto right-20'>
            <li>
                <a className='text-xl p-4 font-sans  hover:bg-[rgb(166,225,250)] ' href='/'>HOME</a>
            </li>
            <li >
                <a className='text-xl p-4 font-sans  hover:bg-[rgb(166,225,250)]' href='/education'>EDUCATION</a>
            </li>
            <li>
                <a className='text-xl p-4 font-sans  hover:bg-[rgb(166,225,250)]' href='/projects'>PROJECTS</a>
            </li>
            <li>
                <a className='text-xl p-4 font-sans  hover:bg-[rgb(166,225,250)]' href='/exp'>EXPERIENCE</a>
            </li>
        </ul>
        
      </div>
    </div>
  )
}

export default Navbar
