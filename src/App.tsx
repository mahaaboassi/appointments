import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './pages/layout'
import FirstStep from './pages/FirstStep/page'
import Confirmation from './pages/confirmation/page'
import DetailsStep from './pages/detailsStep/page'

function App() {
  return (<BrowserRouter>
    <Routes>
      <Route path="/*" element={<Layout/>}>
        <Route index element={<FirstStep/>} />
        <Route path='details' element={<DetailsStep/>}/>
        <Route path='confirmation' element={<Confirmation />}  />
      </Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App
