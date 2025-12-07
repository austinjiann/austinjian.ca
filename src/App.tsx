import { Hero } from './components/section/Hero'
import { Projects } from './components/section/Projects'
import { Header } from './components/layout/Header'
import { WebringBadge } from './components/ui/WebringBadge'

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Projects />
      <WebringBadge siteUrl="austinjian.ca" />
    </>
  )
}

export default App
