import React, { useState } from "react";
import PropTypes from "prop-types";
import {Link } from 'react-router-dom';

export default function Navbar(props) {

const [Active,setActive] = useState(null);

const markActive=(id)=>{
  setActive(id);
}

  return (
    <div>
      <nav className={`navbar navbar-expand-lg bg-body-tertiary bg-${props.mode}`} data-bs-theme={props.mode}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            {props.title}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link  className={`nav-link ${Active==='Home'?'active':''}`} onClick={()=>markActive('Home')} aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link  className={`nav-link ${Active==='About'?'active':''}`} onClick={()=>markActive('About')} to="/about">
                  {props.aboutUs}
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${Active==='Contact'?'active':''}`} onClick={()=>markActive('Contact')} to="/">
                  Contact
                </Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              {/* <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              /> */}
              {/* <button className="btn btn-outline-success" type="submit">
                Search
              </button> */}
              <div className="form-check form-switch">
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="isDark"
                  onClick={props.toggleMode}
                />
                <label className={`form-check-label text-${props.mode==='dark'?'light':'dark'}`} id="lblmode" htmlFor="switchCheckDefault">
                  {props.labelText}
                </label>
              </div>

              {/* <div className="form-check form-switch">
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="isDanger"
                  onClick={() => props.toggleMode('danger')}
                />
                <label className={`form-check-label`} style={{ color:props.mode==='black'?'white':'black'}} id="lblmode2" htmlForfor="switchCheckDefault">
                  Red Mode
                </label>
              </div> */}
              
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

Navbar.propTypes = {
  title: PropTypes.string,
  aboutUs: PropTypes.string,
};
