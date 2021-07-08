import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header id="header">
        <a href="#">
          <img src="" alt="logo" id="logo" />
        </a>
        <input id="searcBar"></input>
        <ul>
          <li><a href="" id="singin">Sing İn</a></li>
          <li><a href="" id="notification">Notification</a></li>
          <li><a href="" id="cart">Cart</a></li>
        </ul>
      </header>
      <section id="categories">
        <div id="categorie">Categories</div>
        <ul>
          <li><a href="">Offers</a></li>
          <li><a href="">Top Soid</a></li>
          <li><a href="">Other Products</a></li>
          <li><a href="">Gift Ideas</a></li>
          <li><a href="">Language/Currency</a></li>
        </ul>
      </section>
      <section id="subcategories">
        <div>Sub Categories</div>
        <div>Offers/Adds</div>
      </section>
      <section id="clearence">
        <div>Clearence</div>
        <div>Recenlty Viewed</div>
        <div>Buy Again</div>
        <div>Best Seller</div>
      </section>
      <footer id="footer">
        Telif Hakkları Korunmaktadır.
      </footer>
    </div>
  );
} 

export default App;