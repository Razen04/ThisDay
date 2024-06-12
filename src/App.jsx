import { useEffect, useState } from 'react'
import './App.css'
import Time from './Components/Date/date'
import Facts from './Components/Facts/Facts'
import 'animate.css'

function App() {

  const [date, setDate] = useState(null)

  const [information, setInformation] = useState([])

  const [backToTop, setBackToTop] = useState(false)

  let today = new Date();
  let year = today.getFullYear();
  let month = String(today.getMonth() + 1).padStart(2, '0');
  let day = String(today.getDate()).padStart(2, '0');

  async function getData() {
    let url = `https://api.wikimedia.org/feed/v1/wikipedia/en/featured/${year}/${month}/${day}`;
    await fetch(url)
      .then(response => response.json())
      .then(data => {
        setInformation(data.onthisday)
        localStorage.setItem('information', JSON.stringify(data.onthisday));
      })
  }

  useEffect(() => {
    const storedInformation = localStorage.getItem('information');
    if (storedInformation) {
      setInformation(JSON.parse(storedInformation))

    } else {
      getData();
    }
    setDate(`${day}/${month}`)

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  window.onscroll = function () { scrollFunction() }

  function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      setBackToTop(true)
    } else {
      setBackToTop(false)
    }
  }

  function handleScroll() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }




  return (
    <div className="app">
      <Time information={information} date={date} />
      <Facts information={information} />
      <div className="back-to-top" onClick={handleScroll}>
        {backToTop && <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#FFFFFF"><path d="M446.67-160v-513l-240 240L160-480l320-320 320 320-46.67 47-240-240v513h-66.66Z" /></svg>}
      </div>
    </div>
  )
}

export default App
