import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './pages/layout'
import FirstStep from './pages/FirstStep/page'

function App() {
  return (<BrowserRouter>
    <Routes>
      <Route path="/*" element={<Layout/>}>
        <Route index element={<FirstStep/>} />
      </Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App
