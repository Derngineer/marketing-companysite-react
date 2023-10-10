import { useState } from 'react'
import reactLogo from './assets/react.svg'
import MainBanner from './components/MainBanner'
import TopNav from './components/TopNav'
import PartnersCarousel from './components/PatnersCarousel'
import DescriptionMain from './components/DescriptionMain'
import DivisionSection from './components/DivisionSection'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
import Video from './components/Video'




function App() {


  return (
  <div>
    <TopNav></TopNav>
    <MainBanner></MainBanner>
    <PartnersCarousel></PartnersCarousel>
    <DescriptionMain />      
    <Video />
    <DivisionSection></DivisionSection>
    <Testimonials></Testimonials>
    <Footer></Footer>
  </div>
)
}

export default App



{/* <div className="App">
<div>
  <a href="https://vitejs.dev" target="_blank">
    <img src="/vite.svg" className="logo" alt="Vite logo" />
  </a>
  <a href="https://reactjs.org" target="_blank">
    <img src={reactLogo} className="logo react" alt="React logo" />
  </a>
</div>
<h1>Vite + React</h1>
<div className="card">
  <button onClick={() => setCount((count) => count + 1)}>
    count is {count}
  </button>
  <p>
    Edit <code>src/App.tsx</code> and save to test HMR
  </p>
</div>
<p className="read-the-docs">
  Click on the Vite and React logos to learn more
</p>
</div> */}