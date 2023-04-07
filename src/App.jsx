import { useState } from 'react'
import './App.css'
import CardList from './components/CardList'
import Search from './components/Search'
function App() {

  const [clear, setClear] = useState(true)
  const [refresh, setRefresh] = useState(true)
  return (
    <div className="App font-FontMontserrat">
      <div className="wave"></div>
      <div className="wave"></div>
      <div className="wave"></div>
      <Search setRefresh={setRefresh} refresh={refresh} setClear={setClear} clear={clear} />
      {clear && <CardList refresh={refresh}/>}
    </div>
  )
}

export default App
