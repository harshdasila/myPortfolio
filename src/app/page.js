import Image from 'next/image'
import Navbar from './components/Navbar'
import Body from './components/Body'

import "@fortawesome/fontawesome-svg-core/styles.css"; 
import { config } from "@fortawesome/fontawesome-svg-core";
import Education from './projects/page';

config.autoAddCss = false

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Body/>
    </div>
  )
}
