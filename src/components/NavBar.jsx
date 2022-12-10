import React from 'react';

export default function NavBar({ name }) {
  return (
    <nav className="navbar navbar-expand-lg bg-light">

      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          {' '}
          Hello!
          {' '}

          { name}

        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">

          <ul className="navbar-nav">
            {name
              ? (
                <>
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/">Home</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/addapartment">Add Apartment</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/apartments">Apartments</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/registration/logout">Logout</a>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <a className="nav-link" href="/reg">SignUp</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/avt">SignIn</a>
                  </li>
                </>
              )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

