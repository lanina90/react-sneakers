import React, {useState} from 'react';
import style from './Card.module.scss'

const Card = ({img, name, price, onPlus, onFavorite }) => {

  const [isAdded, setIsAdded] = useState(false)
  const [isFavorite, setIsFavorite] = useState(false)

  const onClickPlus = () => {
    onPlus({img, name, price})
    setIsAdded(!isAdded)
  }

  const onClickFavorite = () => {
    setIsFavorite(!isFavorite)
  }

  return (
    <div className={style.card}>
      <div className={style.favorite} onClick={onClickFavorite} >
        <img src={isFavorite ? '/images/liked.svg' : '/images/heart.svg'} alt='like'
        />
      </div>
      <img width={133} height={112} src={img} alt=""/>
      <h5>{name}</h5>
      <div className='d-flex justify-between align-center'>
        <div className='d-flex flex-column '>
          <span>Price</span>
          <b>{price} UAH</b>
        </div>
        <img
          onClick={onClickPlus}
          className={style.plus}
          src={isAdded ?  "/images/btn-checked.svg" : "/images/btn-plus.svg"  }
          alt=""/>
      </div>
</div>
)
};

export default Card;