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
                  Demos
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/demos-dynamic" className="nav-link">
                  Demos (Dynamic)
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
