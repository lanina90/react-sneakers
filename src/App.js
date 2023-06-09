import React from 'react';
import {Route, Routes} from 'react-router-dom';
import axios from 'axios';
import AppContext from './context';

import Favorites from "./components/pages/Favorites";
import Orders from "./components/pages/Orders";
import Home from "./components/pages/Home";
import Cart from "./components/Cart/Cart";
import Header from "./components/Header/Header";

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [cartOpened, setCartOpened] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    async function fetchData() {
      try {
        const [
          cartResponse,
          favoritesResponse,
          itemsResponse] = await Promise.all([
          axios.get('http://localhost:3001/cart'),
          axios.get('http://localhost:3001/favorite'),
          axios.get('http://localhost:3001/products'),
        ]);

        setIsLoading(false);
        setCartItems(cartResponse.data);
        setFavorites(favoritesResponse.data);
        setItems(itemsResponse.data);
      } catch (error) {
        alert('Ошибка при запросе данных fetchData;(');
        console.error(error);
      }
    }

    fetchData();
  }, []);

  const onAddToCart = async (obj) => {

    try {
      const findItem = cartItems.find((item) => Number(item.parentId) === Number(obj.id));
      if (findItem) {
        setCartItems((prev) => prev.filter((item) => Number(item.parentId) !== Number(obj.id)));
        await axios.delete(`http://localhost:3001/cart/${findItem.id}`);
      } else {
        setCartItems((prev) => [...prev, obj]);
        const {data} = await axios.post('http://localhost:3001/cart', obj);
        setCartItems((prev) =>
          prev.map((item) => {
            if (item.parentId === data.parentId) {
              return {
                ...item,
                id: data.id,
              };
            }
            return item;
          }),
        );
      }
    } catch (error) {
      alert('Ошибка при добавлении в корзину');
      console.error(error);
    }
  };

  const onRemoveItem = (id) => {
    try {
      axios.delete(`http://localhost:3001/cart/${id}`);
      setCartItems((prev) => prev.filter((item) => Number(item.id) !== Number(id)));
    } catch (error) {
      alert('Ошибка при удалении из корзины');
      console.error(error);
    }
  };

  const onAddToFavorite = async (obj) => {
    try {
      if (favorites.find((favObj) => Number(favObj.id) === Number(obj.id))) {
        axios.delete(`http://localhost:3001/favorite/${obj.id}`);
        setFavorites((prev) => prev.filter((item) => Number(item.id) !== Number(obj.id)));
      } else {
        const {data} = await axios.post(
          'http://localhost:3001/favorite',
          obj,
        );
        setFavorites((prev) => [...prev, data]);
      }
    } catch (error) {
      alert('Не удалось добавить в фавориты');
      console.error(error);
    }
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  const isItemAdded = (id) => {
    return cartItems.some((obj) => Number(obj.parentId) === Number(id));
  };

  return (
    <AppContext.Provider
      value={{
        items,
        cartItems,
        favorites,
        isItemAdded,
        onAddToFavorite,
        onAddToCart,
        onClickCart: setCartOpened,
        setCartItems,
      }}>
      <div className="wrapper clear">
        {cartOpened && <Cart
          items={cartItems}
          onClose={() => setCartOpened(false)}
          onRemove={onRemoveItem}
        />}


        <Routes>
          <Route path="/" element={
            <Header onClickCart={() => setCartOpened(true)}/>}>
          <Route index element={<Home
            items={items}
            cartItems={cartItems}
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            onChangeSearchInput={onChangeSearchInput}
            onAddToFavorite={onAddToFavorite}
            onAddToCart={onAddToCart}
            isLoading={isLoading}
          />}/>
            <Route path="favorites" element={<Favorites/>}/>
            <Route path="orders" element={<Orders/>}/>
          </Route>
        </Routes>

      </div>
    </AppContext.Provider>
  );
}

export default App;