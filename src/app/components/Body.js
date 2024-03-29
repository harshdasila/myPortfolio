
import React from 'react';
import Image from 'next/image' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCss3, faFirefoxBrowser, faGitAlt, faGithub, faHtml5, faInstagram, faLinkedin, faLinkedinIn, faNode, faNodeJs, faNpm, faReact, faSquareJs } from '@fortawesome/free-brands-svg-icons';
import {
  faSearch,
  faAmbulance,
  faAnchor,
  faMailBulk,
  faTerminal,
  faC,
  faDatabase,
} from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import toolsIMG from '../images/ToolsImg.png'
import FrontIMG from '../images/frontendIMG.png'
import FrontmainIMG from '../images/front.svg'

const Body = () => {
    
  return (
    <>
    <div className='p-8 grid grid-cols-2'>
        <div className='mt-14 m-14'>
            <div className='text-6xl font-semibold font-mono antialiased text-blue-950'>Harsh Dasila</div>
            <div className='text-gray-400 text-4xl py-10 leading-normal'>
            A passionate computer science student who loves technology and wants to work in cutting edge technologies. I am passionate about building end-to-end products. I&apos;m a ideas guy and a people&apos;s person which helps me to think out of the box and able to make things done.
            </div>
            <div className='space-x-6 flex'>
              
            <a href='https://www.linkedin.com/in/harsh-vardhan-dasila-0941801b5/' target='_blank'> 
              <FontAwesomeIcon
              icon={faLinkedin}
                style={{ fontSize: 40, color: "black" }}
              />
            </a>
            
            <a href='https://github.com/harshdasila/' target='_blank'>
            <FontAwesomeIcon
              icon={faGithub}
              style={{ fontSize: 40, color: "black" }}
            />
            </a>
            <a href='https://www.instagram.com/harsh_dasila/' target='_blank'>
            <FontAwesomeIcon
              icon={faInstagram}
              style={{ fontSize: 40, color: "black" }}
            />
            </a>
            <a href='mailto:harshdasila5555@gmail.com' target='_blank'>
            <FontAwesomeIcon
              icon={faEnvelope}
              style={{ fontSize: 40, color: "black" }}
            />
            </a>
            <a href='https://leetcode.com/harsh_dasila/' target='_blank'>
            <FontAwesomeIcon
              icon={faTerminal}
              style={{ fontSize: 40, color: "black" }}
            />
            </a>
            <div className='flex ml-7 h-auto
             w-50 justify-center bg-blue-900 p-2 rounded-lg group hover:bg-slate-50 border-solid border-2 border-black hover:transform hover:scale-105 transition-transform' >

            <a href='https://drive.google.com/file/d/1772A3PhIV5IFGPgEgeGxS1t_Tzmo9hun/view?usp=sharing' target='_blank' className='text-2xl font-sans text-white group-hover:text-blue-900'>
             SEE MY RESUME
              </a>
             </div>
           
            
            </div>
        </div>

        <div className='max-w-full max-h-full'>
        <Image src={FrontmainIMG} width={1000} height={1000} alt='image'/>
        </div>

    </div>
    {/* new container */}
    <div className='p-5'>
      <div className='text-7xl font-semibold text-center font-sans'>What I DO?</div>
      <div className='p-5 mt-14 grid grid-cols-2 space-x-5'>

        <div>
          <Image className='p-3 items-center justify-center text-center ' src={FrontIMG} width={600} height={500}   alt='image'/>
        </div>

        <div>
          <div className='text-6xl'>Full Stack Development </div>
          <div className='space-x-6 p-4 space-y-2'>
          
            
          <FontAwesomeIcon
              icon={faReact}
              style={{ fontSize: 60, color: "#1477c2" }}
              spin
            />

          <FontAwesomeIcon
              icon={faNodeJs}
              style={{ fontSize: 60, color: "#1477c2" }}
            />
            
            <FontAwesomeIcon
              icon={faHtml5}
              style={{ fontSize: 60, color: "#dc4a25" }}
              
            />

            <FontAwesomeIcon
              icon={faSquareJs}
              style={{ fontSize: 60, color: "#1477c2" }}
  
            />

            <FontAwesomeIcon
              icon={faCss3}
              style={{ fontSize: 60, color: "#0f5ee6" }}
              
            />
            <FontAwesomeIcon
              icon={faNpm}
              style={{ fontSize: 60, color: "#d53434" }}
            />
          </div>
          <ul className=''>
            <li className='p-3 text-gray-500 font-sans text-xl'>⚡ Designing single-page applications for fluid user navigation.</li>
            <li className='p-3 text-gray-500 font-sans text-xl'>⚡ Knowledge in creating application backend in NodeJS using Express

</li>
            <li className='p-3 text-gray-500 font-sans text-xl'>⚡ Implementing modular UI components for code reusability.</li>
            <li className='p-3 text-gray-500 font-sans text-xl'>⚡ Integrating with backend APIs for real-time data synchronization</li>
            <li className='p-3 text-gray-500 font-sans text-xl'>⚡ Improving website performance through code splitting and lazy loading.</li>
          </ul>
        </div>
      </div>
      <div className='p-5 mt-10 grid grid-cols-2 space-x-5'>
        <div>
          {/* <Image className='p-3 items-center justify-center text-center bg-inherit' src='https://miro.medium.com/v2/resize:fit:1400/format:webp/1*H0q1TszJ42P4-wv6pdmPTw.png' width={500} height={500}/> */}
          <Image className='p-3 items-center justify-center text-center bg-inherit' src={toolsIMG} width={650} height={200} alt='img'/>
        </div>
        <div>
          <div className='text-6xl'>Tools & Technologies</div>
          <div className='space-x-6 p-4 space-y-2 '>
          <FontAwesomeIcon
              icon={faGitAlt}
              style={{ fontSize: 55, color: "#d53434" }}
            />
            <FontAwesomeIcon
              icon={faC}
              style={{ fontSize: 55, color: "purple" }}
            />
            <FontAwesomeIcon
              icon={faDatabase}
              style={{ fontSize: 55, color: "#6c9aea" }}
            />
            <FontAwesomeIcon
              icon={faFirefoxBrowser}
              style={{ fontSize: 55, color: "#6c9aea" }}
            />
             <FontAwesomeIcon
              icon={faSquareJs}
              style={{ fontSize: 60, color: "#1477c2" }}
  
            />
          </div>
          <ul className=''>
            <li className='p-3 text-gray-500 font-sans text-xl'>⚡ Languages :  C++, JavaScript, C, Python, HTML5, CSS3</li>
            <li className='p-3 text-gray-500 font-sans text-xl'>⚡ Git, Github</li>
            <li className='p-3 text-gray-500 font-sans text-xl'>⚡ MySQL, MongoDB</li>
            <li className='p-3 text-gray-500 font-sans text-xl'>⚡ Notebooks ( Google colabs, jupyter )</li>
            <li className='p-3 text-gray-500 font-sans text-xl'>⚡ Visual studio, Anaconda</li>
          </ul>
        </div>
      </div>
    </div>
    <div className='py-10 text-2xl font-sans text-center p-3 text-gray-500'>Made with ❤️ by Harsh Dasila</div>
    </>
  )
}

export default Body
