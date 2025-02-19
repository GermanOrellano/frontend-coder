import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios("http://localhost:8080/api/products")
      .then((res) => {
        console.log(res);
        setProducts(res.data.response.docs);
        setPrev(res.data.response.prevPage);
        setNext(res.data.response.nextPage);
      })
      .catch((error) => console.log(error));
  }, []);

  const [prev, setPrev] = useState(null);
  const [next, setNext] = useState(null);

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary navbar-back">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            E-Commerce
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/product/form" id="form-button">
                  New Product
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/orders" id="order-button">
                  Orders
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="/auth/register"
                  id="register-button"
                >
                  Register
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/auth/login" id="login-button">
                  Login
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="/auth/signout"
                  id="signout-button"
                >
                  Sign Out
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <main className="flex-grow-1 w-100 d-flex flex-column">
        <h1>Welcome</h1>
        <h2>Products</h2>
        <h3 className="subtitle mt-4 mb-2 text-center">Our product</h3>
        <span className="m-auto d-flex justify-content-between align-items-center">
          <input
            id="text"
            type="text"
            /* style={"width: 360px"} */
            className="p-2 text-center"
            placeholder="search..."
          />
          <img
            id="search"
            /* style="width: 44px; padding: 2px" */
            type="button"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAABFdJREFUaEPtmWnIlUUUx38m2qYlGJmYJZWlRBJI+CEiTM0PttCOJFGpUaiIgiSZUmqmImUoRqCmFdkepKUGrpQSBX6JJG1R6YOgpeWCii3zl5kYnubeZ859vHRfeA9cXl7umf+Z/8yZs90OtHHp0Mb3TzuB//sGq9zAecCdwL1AP+AS/xGng/6zE/gQ+BQ40QyyjRDoAcwGHgbOz9zUceANYAZwIHNNlpqVwExgCqDTb0RE5EV/AI2s/8+aXALdgbXOFW46K1ZhE3AP8HtVvBwC/f3mr0wYOwR8ArwH/AT84nUuB64B7gfuBrol1u4GhgL7qpAoI9AL+ArQ31h+9q7wOnC6ZAPnAqPdI54K9C7oisQgQAfRkNQjcJE7oS9cFLmhgPw+MAo4ZbR4AfAucEdh3XZgMHDSiHdGvR6BxS5ijCuAzgeebsRQtOZV4MkCxvPu/+cawa1FoI875R+AjhGo4rl8uqqcA3wGDI+AjgFXAL9ZwWsReBsYGYH96B+lFb+WvtxTmEp+QV4GJlsNpAgoOR0GOkdg9wEfWcFL9J8ClkQ6yt6XAn9b7KQIPOgfW8D5DrjeAmrQVVaOb+EWHziyIVIE3vJlQgCZ5UuAbFCD4jKXBx6P9M1BIkXgG2BgBHozsM2wKYvqAz4JhjV63CMsACkCyoxxwlFE2msBNeje6DL1jkj/20TeqQuXIqAE1SladSGgIqwZohIjzsJ/ABdbDKUIHAG6RCBdgaMWUIOu7MheEB2UDixbUgRUn6gQC9LXJ7VsUIPitS7ffB/py1XlstmSIrAVUDgLMgTYmI1oUxwGfB4tUQAxlewpAq8BT0Sg5tBm4PCS6wkmRfpLgbGG9cliTtXi6ghELqWrboaoLI9dRrWWaq5sSd2ASghFBpW/QRSvP8hGzVN8BFgZqeoxX2aNeLWKueUu9j8WgavbujpvX1laOhxVuz0j7Xm+6ckCCEq1CKgl1KbjfKBGRnVSVZFNtaFxY/MXoJY1tKTZNuo1NAudK00sIGmcMj0bPa24yM2Mxhe+mgNMawS3HgElmS9dGT2gALyi4F65duU2q4C7CgsqVbtlTb0e1deAXCoW+e8L7l286W7kzxIGaurH+Fa02NRrqer/R/3gK/cw/tUrIyBFjQ3X+5avaOBX4GMfofZ4HxamNqoMHsYq6sDKRGW1phwmySEgQDUda/wIxGSghrKy7+2J78wkcgkEW2punq3AQJO4Cd71bnMly4YElmZICuNZYiUgUA255vrZUJYR38C/4hOXSuYgmkysq0KiEQLBnspexfKH3AO8CtD8VK6mR73fv4fN3vVUpNWSYukS9FQTqTaqK1UIlGFbvldo1dQjnkNlRadWISCyiljvWEm0EgGR0I8mmooU5TpgV+pKW41AIKEEGfamH1QW1PLHViSgvSofaGakX3OeqfeYWpWA9nyrG7tvKYsErUygbO9nvm8nkHVMTVRqv4EmHm4WdJu/gX8AUZOmMeH+ThoAAAAASUVORK5CYII="
            alt=""
          />
        </span>
        <div className="d-flex justify-content-center">
          {products.map((each) => (
            <div className="card" /* style="width: 18rem;" */>
              <img src={each.photo} className="card-img-top" alt=""></img>
              <div className="card-body">
                <h4>{each.title}</h4>
                <p className="card-text">Price: ${each.price}</p>
                <p className="card-text">Stock: {each.stock} Un.</p>
                <a href="#" className="btn btn-primary">
                  Buy
                </a>
              </div>
            </div>
          ))}
        </div>
        <div>
          {prev && (
            <a
              class="btn btn-danger fs-5 m-4 mt-0"
              href="/?title={{filter}}&page={{prev}}"
            >
              PREV
            </a>
          )}
          {next && (
            <a
              class="btn btn-danger fs-5 m-4 mt-0"
              href="/?title={{filter}}&page={{next}}"
            >
              NEXT
            </a>
          )}
        </div>
      </main>
      <footer>
        <address className="footer">Proyecto Backend - Coder</address>
      </footer>
    </>
  );
}

export default App;
