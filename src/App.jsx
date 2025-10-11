import './App.css'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import HowItWorks from './components/HowItWorks'
import Pricing from './components/Pricing'
import AboutUs from './components/AboutUs'
import UploadInterface from './components/UploadInterface'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <HowItWorks />
      <Pricing />
      <AboutUs />
      <UploadInterface />
      <Footer />
    </div>
  )
}

export default App
