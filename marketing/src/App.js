import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header id="header">
        <nav className="navbar navbar-dark bg-dark">
          <div className="container-fluid">
            <a href="#" className="navbar-brand">Logo</a>
              <form className="d-flex w-50">
                <input type="search" className="form-control me-1" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Search">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                  </svg>
                </button>
              </form>
                <div className="row">
                <div class="btn-group" role="group" aria-label="Button group with nested dropdown">
                  <div class="btn-group me-2" role="group">
                  <button type="button" class="btn btn-outline-danger" data-bs-placement="bottom" title="Sign In">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-door-open" viewBox="0 0 16 16">
                    <path d="M8.5 10c-.276 0-.5-.448-.5-1s.224-1 .5-1 .5.448.5 1-.224 1-.5 1z"/>
                    <path d="M10.828.122A.5.5 0 0 1 11 .5V1h.5A1.5 1.5 0 0 1 13 2.5V15h1.5a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1H3V1.5a.5.5 0 0 1 .43-.495l7-1a.5.5 0 0 1 .398.117zM11.5 2H11v13h1V2.5a.5.5 0 0 0-.5-.5zM4 1.934V15h6V1.077l-6 .857z"/>
                    </svg>
                  </button>
                  </div>
                  <div class="btn-group me-2" role="group">
                  <button id="btnGroupDrop1" type="button" class="btn btn-outline-warning dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" data-bs-placement="bottom" title="Notification">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-app-indicator" viewBox="0 0 16 16">
                      <path d="M5.5 2A3.5 3.5 0 0 0 2 5.5v5A3.5 3.5 0 0 0 5.5 14h5a3.5 3.5 0 0 0 3.5-3.5V8a.5.5 0 0 1 1 0v2.5a4.5 4.5 0 0 1-4.5 4.5h-5A4.5 4.5 0 0 1 1 10.5v-5A4.5 4.5 0 0 1 5.5 1H8a.5.5 0 0 1 0 1H5.5z"/>
                      <path d="M16 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                    </svg>
                  </button>
                  </div>
                  <div class="btn-group" role="group">
                    <button id="btnGroupDrop1" type="button" class="btn btn-outline-light dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Cart">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-basket" viewBox="0 0 16 16">
                        <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1v4.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 13.5V9a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h1.217L5.07 1.243a.5.5 0 0 1 .686-.172zM2 9v4.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V9H2zM1 7v1h14V7H1zm3 3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 4 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 6 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 8 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5z"/>
                      </svg>
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="btnGroupDrop1">
                      <li><a class="dropdown-item" href="#">Dropdown link</a></li>
                      <li><a class="dropdown-item" href="#">Dropdown link</a></li>
                    </ul>
                  </div>
                </div>
                </div>
              </div>
        </nav>
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