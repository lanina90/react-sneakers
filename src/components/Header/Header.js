import React, {useState} from 'react';
import {Link, Route} from "react-router-dom";

const Header = (props) => {


  return (
    <header className='d-flex justify-between align-center p-40'>

        <Link to="/">
          <div className='d-flex align-center'>
          <img
            width={40}
            height={40}
            src="/images/logo.png"
            alt="logo"/>
            <div>
              <h3 className='text-uppercase'>React Sneakers</h3>
              <p className='opacity-5'>Магазин лучших кроссовок</p>
            </div>
          </div>
        </Link>

      <ul className='d-flex'>
        <li
          className='mr-20 cu-p'
          onClick={props.onClickCart}>
          <img
            width={20}
            height={20}
            src="/images/cart.svg"
            alt="cart"/>
          <span>5 000 грн.</span></li>
        <li className='mr-20 cu-p'>
          <Link to="/favorites">
            <img
              width={20}
              height={20}
              src="/images/heart.svg"
              alt="bookmark"/>
          </Link>
        </li>
        <li className='mr-20 cu-p'>
          <img
            width={20}
            height={20}
            src="/images/user.svg"
            alt="user"/>
        </li>
      </ul>
    </header>
  );
};

export default Header;