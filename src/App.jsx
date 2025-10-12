import './App.css'
import { useRef } from 'react'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import HowItWorks from './components/HowItWorks'
import Pricing from './components/Pricing'
import AboutUs from './components/AboutUs'
import UploadInterface from './components/UploadInterface'
import Footer from './components/Footer'

function App() {
  const uploadInterfaceRef = useRef(null)

  const scrollToUpload = () => {
    uploadInterfaceRef.current?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    })
  }

  return (
    <div className="App">
      <Header />
      <HeroSection onUploadClick={scrollToUpload} />
      <HowItWorks />
      <Pricing />
      <AboutUs />
      <UploadInterface ref={uploadInterfaceRef} />
      <Footer />
    </div>
  )
}

export default App
