import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TelegramLoginButton from './TelegramLoginButton'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<TelegramLoginButton />
    </>
  )
}

export default App
