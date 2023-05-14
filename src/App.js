import './App.css';

function App() {
  return (
    <div className='wrapper clear'>
      <header className='d-flex justify-between align-center p-40'>
        <div className='d-flex align-center'>
          <img width={40} height={40} src="/images/logo.png" alt=""/>
          <div>
            <h3 className='text-uppercase'>React Sneakers</h3>
            <p className='opacity-5'>Магазин лучших кроссовок</p>
          </div>
        </div>
        <ul className='d-flex'>
          <li className='mr-30'>
            <img width={20} height={20} src="/images/cart.svg" alt=""/>
            <span>5000 грн.</span></li>
          <li>
            <img width={20} height={20} src="/images/user.svg" alt=""/>
          </li>
        </ul>
      </header>
      <div className='content p-40'>
        <h1 className='mb-40'>Все кроссовки</h1>
        <div className='d-flex'>
          <div className='card'>
            <img width={133} height={112} src="/images/sneakers/1.jpg" alt=""/>
            <h5>Мужские кроссовки Nike Blazer Mid Suede</h5>
            <div className='d-flex justify-between align-center'>
              <div className='d-flex flex-column '>
                <span>Цена</span>
                <b>6000 грн.</b>
              </div>
              <button className='button'>
                <img width={11} height={11} src="/images/plus.svg" alt=""/>
              </button>
            </div>
          </div>

          <div className='card'>
            <img width={133} height={112} src="/images/sneakers/2.jpg" alt=""/>
            <h5>Мужские кроссовки Nike Blazer Mid Suede</h5>
            <div className='d-flex justify-between align-center'>
              <div className='d-flex flex-column '>
                <span>Цена</span>
                <b>6500 грн.</b>
              </div>
              <button className='button'>
                <img width={11} height={11} src="/images/plus.svg" alt=""/>
              </button>
            </div>
          </div>

          <div className='card'>
            <img width={133} height={112} src="/images/sneakers/3.jpg" alt=""/>
            <h5>Мужские кроссовки Nike Blazer Mid Suede</h5>
            <div className='d-flex justify-between align-center'>
              <div className='d-flex flex-column '>
                <span>Цена</span>
                <b>6800 грн.</b>
              </div>
              <button className='button'>
                <img width={11} height={11} src="/images/plus.svg" alt=""/>
              </button>
            </div>
          </div>

          <div className='card'>
            <img width={133} height={112} src="/images/sneakers/4.jpg" alt=""/>
            <h5>Мужские кроссовки Nike Blazer Mid Suede</h5>
            <div className='d-flex justify-between align-center'>
              <div className='d-flex flex-column '>
                <span>Цена</span>
                <b>5500 грн.</b>
              </div>
              <button className='button'>
                <img width={11} height={11} src="/images/plus.svg" alt=""/>
              </button>
            </div>
          </div>
        </div>
        <div className='card'>
          <img width={133} height={112} src="/images/sneakers/5.jpg" alt=""/>
          <h5>Мужские кроссовки Nike Blazer Mid Suede</h5>
          <div className='d-flex justify-between align-center'>
            <div className='d-flex flex-column '>
              <span>Цена</span>
              <b>6900 грн.</b>
            </div>
            <button className='button'>
              <img width={11} height={11} src="/images/plus.svg" alt=""/>
            </button>
          </div>
        </div>

        <div className='card'>
          <img width={133} height={112} src="/images/sneakers/6.jpg" alt=""/>
          <h5>Мужские кроссовки Nike Blazer Mid Suede</h5>
          <div className='d-flex justify-between align-center'>
            <div className='d-flex flex-column '>
              <span>Цена</span>
              <b>3500 грн.</b>
            </div>
            <button className='button'>
              <img width={11} height={11} src="/images/plus.svg" alt=""/>
            </button>
          </div>
        </div>

        <div className='card'>
          <img width={133} height={112} src="/images/sneakers/7.jpg" alt=""/>
          <h5>Мужские кроссовки Nike Blazer Mid Suede</h5>
          <div className='d-flex justify-between align-center'>
            <div className='d-flex flex-column '>
              <span>Цена</span>
              <b>6500 грн.</b>
            </div>
            <button className='button'>
              <img width={11} height={11} src="/images/plus.svg" alt=""/>
            </button>
          </div>
        </div>
      </div>


    </div>
  );
}

export default App;
