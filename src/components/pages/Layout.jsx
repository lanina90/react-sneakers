import React, {useEffect, useState} from 'react';
import Cart from "../Cart/Cart";
import Header from "../Header/Header";
import {Outlet} from "react-router-dom";



const Layout = ({
                  cartOpened, cartItems, setCartOpened, onRemoveItem
                }) => {

  return (
    <>
      {cartOpened && <Cart
        items={cartItems}
        onClose={() => setCartOpened(false)}
        onRemove={onRemoveItem}
      />}
      <Header onClickCart={() => setCartOpened(true)}/>
      <Outlet />
    </>
  );
};

export default Layout;