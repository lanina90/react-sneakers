import React from 'react';
import Card from "../Card/Card";


const Home = ({items =[], searchVal, onChangeSearchInput, onAddToFavorite, onAddToCart }) => {
  return (

    <div className='content p-40'>

      <div className='d-flex align-center justify-between mb-40'>
        <h1>{searchVal ? `Поиск по запросу ${searchVal}` : 'Все кроссовки'}</h1>
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
            .map((val, index) => (
              <Card
                key={index}
                onFavorite={(obj) => onAddToFavorite(obj)}
                onPlus={(obj) => onAddToCart(obj)}
                {...val}
              />
            ))
        }
      </div>
    </div>
  );
};

export default Home;