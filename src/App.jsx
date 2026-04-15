import Navbar from './components/Navbar/Navbar.jsx'
import Hero from './components/Hero/Hero.jsx'
import WhatWeAreBuilding from './components/WhatWeAreBuilding/WhatWeAreBuilding.jsx'
import WhatWeNeed from './components/WhatWeNeed/WhatWeNeed.jsx'
import WhatTeamBrings from './components/WhatTeamBrings/WhatTeamBrings.jsx'
import Timeline from './components/Timeline/Timeline.jsx'
import Contact from './components/Contact/Contact.jsx'
import Footer from './components/Footer/Footer.jsx'

export default function App() {
  return (
    <>
      <a href="#main-content" className="skip-to-content">Skip to main content</a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <WhatWeAreBuilding />
        <WhatWeNeed />
        <WhatTeamBrings />
        <Timeline />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
