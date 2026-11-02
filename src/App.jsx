import { Suspense } from 'react'
import Hero from './components/Hero.jsx'
import LoadingScreen from './components/LoadingScreen.jsx'

export default function App() {
  return (
    <main className="relative w-full min-h-screen bg-cyber-dark">
      <Suspense fallback={<LoadingScreen />}>
        <Hero />
      </Suspense>
    </main>
  )
}
