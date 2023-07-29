import { useState } from 'react'
import './App.css'
import Header from "./Component/Header.jsx"
import Nav from "./Component/Nav.jsx"
import Banner from "./Component/Banner.jsx"
import ListItem from './Component/ListItem'
import hotTrend from "./Component/data.js"


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Nav />
      <Banner />
      <ListItem data={hotTrend}/>
    </>
  );
}

export default App
