import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

export default function NavbarWithLayout() {
  return (
    <>
      <div className="row">
        <div className="col">
          <nav className="navbar navbar-expand-lg bg-light">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink to="/" className="nav-link">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/demos" className="nav-link">
                  Demos (dynamic)
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/demos-components" className="nav-link">
                  Demos (using components)
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/labs" className="nav-link">
                  Labs
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <Outlet />
    </>
  );
}
