import './App.css';
import Card from "./components/Card/Card";
import Header from "./components/Header/Header";
import Cart from "./components/Cart/Cart";
import {useEffect, useState} from "react";
import axios from "axios";

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
  }, [])

  const onAddToCart = (obj) => {
    axios.post('http://localhost:3001/cart', obj)
    setCartItems(prev => [...prev, obj])

  }
 const onAddToFavorite = (obj) => {
   axios.post('http://localhost:3001/favorites', obj)
   setFavorites(prev => [...prev, obj])
 }

  const onRemoveItem = (id) => {
    axios.delete(`http://localhost:3001/cart/${id}`)
    setCartItems(prev => prev.filter(item => item.id !== id) )
  }
  const onChangeSearchInput = (event) => {
    setSearchVal(event.target.value)
  }

  return (
    <div className='wrapper clear'>
      {cartOpened && <Cart
        items={cartItems}
        onClose={() => setCartOpened(false)}
        onRemove={onRemoveItem}
      />}

      <Header
        onClickCart={() => setCartOpened(true)}/>

      <div className='content p-40'>
        <div className='d-flex align-center justify-between mb-40'>
          <h1>{searchVal ? `Поиск по завпросу ${searchVal}` : 'Все кроссовки'}</h1>
          <div className='search-block d-flex'>
            <img src="/images/search.svg" alt="Search"/>
            <input
              type="text"
              value={searchVal}
              onChange={onChangeSearchInput}
              placeholder='Search...'/>
          </div>
        </div>
        <div className='d-flex flex-wrap'>
          {
            items
              .filter((item) => item.name.toLowerCase().includes(searchVal.toLowerCase()))
              .map((val) => (
                <Card
                  key={val.img}
                  name={val.name}
                  price={val.price}
                  img={val.img}
                  onFavorite={(obj) => onAddToFavorite(obj)}
                  onPlus={(obj) => onAddToCart(obj)}
                />
              ))
          }

        </div>
      </div>
    </div>
  );
}

export default App;
