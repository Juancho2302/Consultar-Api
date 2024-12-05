import { useEffect, useState } from 'react'
import './App.css'
import CmpInput from './CmpInput/CmpInput'
import CmpData from './CmpData/CmpData'

function App() {
  const [apiData, setApiData ] = useState({})
  const [input, setInput] = useState('')
  const [search, setSearch] = useState(false)

  const fetchData = async () => {
    try {
      const response = await fetch(`https://dragonball-api.com/api/characters?name=${input}`)
      const data = await response.json()
      setApiData(data[0])
      setSearch(false)
    } catch (error) {
      console.error('Error fetching data: ', error )
    }
  }

  useEffect(() => {
    fetchData();
  }, [search])

  return (
    <>
    <div className='container'>
      {
        apiData && (
          <div className='imgContainer'>
            <img src={apiData.image} alt="Imagen" />
          </div>
        )
      }
      <div className='inputContainer'>
        <CmpInput input={input} setInput={setInput} />
        <button onClick={() => setSearch(true)} className='button' >&#128269;</button>
      </div>

      {
        apiData && (
          <CmpData data={apiData} />
        )
      }
    </div>
    </>
  )
}

export default App
