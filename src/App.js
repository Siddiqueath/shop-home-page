import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import prodImg from './logo.svg';
import { useState } from 'react';

export default function App() {

  const products = [
    {
      title: 'Fancy Product',
      range: '$40.00 - $80.00'
    },
    {
      title: 'Special Item',
      rating: '⭐⭐⭐⭐⭐',
      drop: '$20.00 $18.00',
      sale: 'yes'
    },
    {
      title: 'Sale Item',
      drop: '$50.00 $25.00', 
      sale: 'yes' 
    },
    {
      title: 'Popular Item',
      rating: '⭐⭐⭐⭐⭐',
      drop: '$20.00 $18.00',
      price: '$40.00'
    },
    {title: 'Sale Item', drop: '$50.00 $25.00', sale: 'yes'},
    {title: 'Fancy Product', range: '$40.00 - $80.00'},
    {title: 'Special Item', rating: '⭐⭐⭐⭐⭐', drop: '$20.00 $18.00', sale: 'yes'},
    {title: 'Popular Item', rating: '⭐⭐⭐⭐⭐', drop: '$20.00 $18.00', price: '$40.00'}
  ];
  const [cart, setCart] = useState(0);
  return (
    <div className='app'>
      <Navbar cart={cart} />

      <div className='banner py-5 bg-dark'>
        <h3 className='display-3 fw-bold text-white text-center'>Shop in style </h3>
        <h4 className='fs-5 text-white-50 text-white text-center mb-5'>With this shop hompeage template</h4>
      </div>

      <div className='container'>
        <div className='row my-5 my-lg-5 my-md-5'>
          {
            products.map(item => <Card product={item} cart={cart} setCart={setCart}/>)
          }
        </div>
      </div>

      <footer class="py-5 bg-dark">
            <div class="container"><p class="m-0 text-center text-white">Copyright © Your Website 2022</p></div>
        </footer>
    </div>
  );
}

function Card({product, cart, setCart}) {
  const badge = {
    top: '0.5rem', 
    right: '0.5rem'
  };
  const hide = {display: 'none'}; 
    return (
      <div className='col-6 col-lg-3 col-md-4 mb-5'>
        <div className='card mx-lg-3 mx-sm-3 h-100'>
          <div className="badge bg-dark text-white position-absolute" style={product.sale === 'yes' ? badge : hide}>Sale</div>
          <img className='card-img-top bg-dark mb-3' src={prodImg} alt='react image' />
          <div className='card-body py-0 p-4 text-center'>
            <h5 className='card-text'>{product.title}</h5>
            <p className='card-text'>{product.range}</p>
            <p className='card-text'>{product.rating}</p>
            <p className='card-text'>{product.drop}</p>
            <p className='card-text'>{product.price}</p>
          </div>

          <div class="card-footer bg-transparent text-center">
            <a class="btn btn-outline-dark mt-auto" href="#" onClick={()=>setCart(++cart)}>Add to cart</a>
          </div>
        </div>
      </div>
  );
}

function Navbar({cart}) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container">
      <a className="navbar-brand" href="#">Start Bootstrap</a>
      
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <div className="navbar-nav me-auto mb-2 mb-lg-0">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
          <a className="nav-link" href="#">About</a>

          <div className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown">
              Shop
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">All Products</a></li>
              <li><hr className="dropdown-divider"></hr></li>
              <li><a className="dropdown-item" href="#">Popular Items</a></li>
              <li><a className="dropdown-item" href="#">New Arrivals</a></li>
            </ul>
          </div>
        </div>
        <button type='button' className='btn btn-outline-dark'>
            <i class="fa-solid fa-cart-shopping"></i> Cart <span class="badge rounded-pill bg-dark">{cart}</span>
         </button>
      </div>
    </div>
  </nav>
  );
}
