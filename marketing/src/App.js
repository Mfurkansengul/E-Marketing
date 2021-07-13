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
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                  </svg>
                </button>
              </form>
                <div className="row">
                <div className="btn-group" role="group" aria-label="Button group with nested dropdown">
                  <div className="btn-group me-2" role="group">
                  <button type="button" className="btn btn-outline-danger" data-bs-placement="bottom" title="Sign In">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-door-open" viewBox="0 0 16 16">
                    <path d="M8.5 10c-.276 0-.5-.448-.5-1s.224-1 .5-1 .5.448.5 1-.224 1-.5 1z"/>
                    <path d="M10.828.122A.5.5 0 0 1 11 .5V1h.5A1.5 1.5 0 0 1 13 2.5V15h1.5a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1H3V1.5a.5.5 0 0 1 .43-.495l7-1a.5.5 0 0 1 .398.117zM11.5 2H11v13h1V2.5a.5.5 0 0 0-.5-.5zM4 1.934V15h6V1.077l-6 .857z"/>
                    </svg>
                  </button>
                  </div>
                  <div className="btn-group me-2" role="group">
                  <button id="btnGroupDrop1" type="button" className="btn btn-outline-warning dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" data-bs-placement="bottom" title="Notification">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-app-indicator" viewBox="0 0 16 16">
                      <path d="M5.5 2A3.5 3.5 0 0 0 2 5.5v5A3.5 3.5 0 0 0 5.5 14h5a3.5 3.5 0 0 0 3.5-3.5V8a.5.5 0 0 1 1 0v2.5a4.5 4.5 0 0 1-4.5 4.5h-5A4.5 4.5 0 0 1 1 10.5v-5A4.5 4.5 0 0 1 5.5 1H8a.5.5 0 0 1 0 1H5.5z"/>
                      <path d="M16 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                    </svg>
                  </button>
                  </div>
                  <div className="btn-group" role="group">
                    <button id="btnGroupDrop1" type="button" className="btn btn-outline-light dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Cart">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-basket" viewBox="0 0 16 16">
                        <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1v4.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 13.5V9a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h1.217L5.07 1.243a.5.5 0 0 1 .686-.172zM2 9v4.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V9H2zM1 7v1h14V7H1zm3 3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 4 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 6 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 8 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5z"/>
                      </svg>
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="btnGroupDrop1">
                      <li><a className="dropdown-item" href="#">Dropdown link</a></li>
                      <li><a className="dropdown-item" href="#">Dropdown link</a></li>
                    </ul>
                  </div>
                </div>
                </div>
              </div>
        </nav>
      </header>
      <section id="categories">
        <div id="categorie">Categories</div>
        <ul>
          <div className="btn-toolbar" role="toolbar">
            <div className="btn-group me-2">
              <button className="btn btn-outline-secondary me-2" type="button"><a href="#">Offers</a></button>
              <button className="btn btn-outline-secondary me-2" type="button"><a href="#">Top Sold</a></button>
              <button className="btn btn-outline-secondary me-2" type="button"><a href="#">Other Products</a></button>
              <button className="btn btn-outline-secondary me-2" type="button"><a href="#">Gift Ideas</a></button>
            </div>
          </div>
          <li><a href="">Language/Currency</a></li>
        </ul>
      </section>
      <section id="subcategories">
        <div>Sub Categories</div>
        <div id="carouselExampleIntervar" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="1000">
              <img src="" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item" data-bs-interval="200">
              <img src="..." className="d-block w-100" alt="..." />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>          
        </div>
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