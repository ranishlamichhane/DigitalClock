import { useState, useEffect } from 'react'
import bg from './assets/dark.png'

function App() {
  const [time, setTime] = useState(new Date())
  useEffect(() => {
    const Timer = setInterval(() => {
      setTime(new Date())
    }, 1000);
    return () => {
      clearInterval(Timer)
    }

  }, []);


  function getTime() {
    let hours = time.getHours()
    let minutes = time.getMinutes()
    let seconds = time.getSeconds()
    let meridium = hours >= 12 ? "PM" : "AM"
    hours = hours % 12 || 12
    minutes = String(minutes).padStart(2, "0")
    seconds = String(seconds).padStart(2, "0")
    return `${hours}:${minutes}:${seconds} ${meridium}`
  }

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${bg})`,
          height: '100vh',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',

        }}
      >
        <div
          className="
    bg-[url('/src/assets/pic.jpg')]
    bg-cover
    bg-clip-text
    text-transparent
    font-bold
    font-serif
    backdrop-blur-lg
    p-2
        text-4xl        
    sm:text-5xl
    md:text-7xl
    lg:text-9xl
  "
        >
          {getTime()}
        </div>
      </div>

    </>
  )
}

export default App
