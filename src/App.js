import './App.css';
import {useEffect, useState} from "react";
import axios from "axios";
import {Route, Router, Routes} from "react-router-dom";
import Home from "./components/pages/Home";
import Layout from "./components/pages/Layout";
import Favorites from "./components/pages/Favorites";

function App() {
  const [cartOpened, setCartOpened] = useState(false)
  const [items, setItems] = useState([])
  const [cartItems, setCartItems] = useState([])
  const [searchVal, setSearchVal] = useState('')
  const [favorites, setFavorites] = useState([])

  useEffect(() => {
    axios('http://localhost:3001/products')
      .then(resp => setItems(resp.data))
    axios('http://localhost:3001/cart')
      .then(resp => setCartItems(resp.data))
    axios('http://localhost:3001/favorite')
      .then(resp => setFavorites(resp.data))
  }, [])

  const onAddToCart = (obj) => {
    axios.post('http://localhost:3001/cart', obj)
    setCartItems(prev => [...prev, obj])

  }
  const onAddToFavorite = async (obj) => {
    try {
      if (favorites.find((favObj) => Number(favObj.id) === Number(obj.id))){
        await axios.delete(`http://localhost:3001/favorite/${obj.id}`)
      } else{
        const {data} =  await axios.post('http://localhost:3001/favorite', obj)
        setFavorites(prev => [...prev, data])
      }
    } catch (error){
      alert('Не удалось добавить в закладки')
    }
  }

  const onRemoveItem = (id) => {
    axios.delete(`http://localhost:3001/cart/${id}`)
    setCartItems(prev => prev.filter(item => item.id !== id))
  }
  const onChangeSearchInput = (event) => {
    setSearchVal(event.target.value)
  }

  return (
    <div className='wrapper clear'>
      <Routes>
        <Route path="/" element={<Layout
          cartItems={cartItems}
          onRemoveItem={onRemoveItem}
          cartOpened={cartOpened}
          setCartOpened={setCartOpened}/>}>
          <Route index element={<Home
            items={items}
            onAddToCart={onAddToCart}
            onAddToFavorite={onAddToFavorite}
            onChangeSearchInput={onChangeSearchInput}
            searchVal={searchVal}
          />} />
          <Route path="favorites" element={<Favorites
            favorites={favorites}
          onAddToFavorite={onAddToFavorite}/>} />
        </Route>
      </Routes>

    </div>
  );
}

export default App;
