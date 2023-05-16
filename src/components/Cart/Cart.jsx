import React from 'react';
import style from './drawer.module.scss'

const Cart = ({onClose, items = [], onRemove}) => {
  return (
    <div className={style.overlay}>
      <div className={style.drawer}>
        <h2 className='d-flex justify-between mb-30 '>
          Корзина
          <img
            onClick={onClose}
            className='removeBtn cu-p'
            src="/images/btn-remove.svg" alt="Remove"/></h2>

        {items.length > 0 ? (
          <>
            <div className={style.items}>
              {
                items.map((item) => (
                    <div className='cartItem d-flex align-center mb-20'>
                      <div
                        style={{backgroundImage: `url(${item.img})`}}
                        className='cartItemImg'>
                      </div>
                      <div className='mr-20 flex'>
                        <p className='mb-5'>{item.name}</p>
                        <b>{item.price} UAH</b>
                      </div>
                      <img
                        onClick={() => onRemove(item.id)}
                        className='removeBtn'
                        src="/images/btn-remove.svg" alt="Remove"/>
                    </div>
                  )
                )
              }
            </div>
            <div className='cartTotalBlock'>
              <ul>
                <li>
                  <span>Sum</span>
                  <div></div>
                  <b>12 500 грн.</b>
                </li>
                <li>
                  <span>VAT 5%</span>
                  <div></div>
                  <b>200 грн.</b>
                </li>
              </ul>
              <button
                className='greenButton'>Order <img src="/images/arrow.svg" alt="Arrow"/></button>
            </div>
          </>
        ) : (
          <div className='cartEmpty d-flex align-center justify-center flex-column flex'>
            <img className='mb-20' width={120} height={120} src="/images/empty-cart.jpg" alt="Empty cart"/>
            <h2>Корзина пуста</h2>
            <p className='opacity-6'>Выберите как минимум один товар для оформления заказа</p>
            <button
              className='greenButton'
              onClick={onClose}
            >
              <img src="/images/arrow.svg" alt="Arrow"/>
              Вернуться назад
            </button>
          </div>
        )
        }

      </div>
    </div>
  );
};

export default Cart;