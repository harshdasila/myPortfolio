'use client'
import React, { useEffect, useState } from 'react'
import '../globals.css'
import Link from 'next/link'



const Navbar = () => {

  // const[activeSection,setActiveSection] = useState('');

  // const handleSectionClick = (s) => {
  //   const updatedState = s;
  //   setActiveSection(updatedState);
  //   console.log("clicked",s)
  //   console.log(activeSection);
    
  // }
  // <li>
  //               <Link href='/' onClick={() => handleSectionClick('home')}  className= {`text-xl p-4 font-sans ${activeSection==='home'? 'font-semibold' : ''}   hover:bg-[rgb(166,225,250)]`}> HOME </Link>
  //      </li>

  return (
    <div>
      <div className='p-7 flex mx-8 flex-row'>
        <div className='flex text-4xl text-center' style={{fontFamily:'Agustina Signature,Courier New'}}> 
            &lt;Harsh Dasila /&gt;
        </div>
        <ul className='flex text-center space-x-7 ml-30 absolute top-auto right-20'>
            <li>
                <Link href='/' className= {`text-xl p-4 font-sans    hover:bg-[rgb(166,225,250)]`}> HOME </Link>
            </li>
            <li >
                <Link href='education' className={`text-xl p-4 font-sans   hover:bg-[rgb(166,225,250)]`}>EDUCATION</Link>
            </li>
            <li>
                <Link href='/projects' className={`text-xl p-4 font-sans  hover:bg-[rgb(166,225,250)]`} >PROJECTS</Link>
            </li>
            {/* <li>
                <Link className='text-xl p-4 font-sans  hover:bg-[rgb(166,225,250)]' href='/exp'>EXPERIENCE</Link>
            </li> */}
        </ul>
        
      </div>
    </div>
  )
}

export default Navbar
