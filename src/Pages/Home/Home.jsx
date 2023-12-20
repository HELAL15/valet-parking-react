import React from 'react'
import Header from '../../Components/Header/Header'
import Download from '../../Sections/Download/Download'
import About from '../../Sections/About/About'
import Use from '../../Sections/Use/Use'
import Vip from '../../Sections/Vip/Vip'
import Services from '../../Sections/Services/Services'
import Intro from '../../Sections/Intro/Intro'
import Features from '../../Sections/Features/Features'
import Packages from '../../Sections/Packages/Packages'
import DownloadSection from '../../Sections/Download-section/DownloadSection'

export default function Home() {
  return (
    <div>
      <Header/>
      <Download/>
      <About/>
      <Vip/>
      <Use/>
      <Services/>
      <Intro/>
      <Features/>
      <Packages/>
      <DownloadSection/>
    </div>
  )
}
