import React from "react";
import { Link } from "react-router-dom";
import FavoriteIcon from "./header-logos/heart.svg";

function Header() {

  return (
    <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark py-3">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand text-success " href="#" >Kind Movies</Link>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/FavoritePage" className="nav-link">Favorite <img src={FavoriteIcon} /></Link>
            </li>
            <li className="nav-item">
              <Link to="/Movies" className="nav-link">Movies </Link>
            </li>
            <li className="nav-item">
              <Link to="/Series" className="nav-link">Series TV </Link>
            </li>
            <li className="nav-item">
              <Link to="/Search" className="nav-link">Search</Link>
            </li>
          </ul>
          <div class="col-md-3 text-end">
            <button type="button" class="btn btn-outline-success me-2">Login</button>
            <button type="button" class="btn btn-success">Sign-up</button>
          </div>
        </div>

      </div>
    </nav>
  );
};

export default Header;