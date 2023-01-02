import Link from "next/link";
import React from "react";
const Header = () => {

  return (
    <section>
      <div className="navbar bg-base-100">
        <div className="navbar-start">          
          <Link href="/">
            <span className="btn btn-ghost normal-case text-xl" id="link">
              VsTube
            </span>
          </Link>
        </div>
        <div className="navbar-end">
          
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="https://placeimg.com/80/80/people" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>     
    </section>
  );
};
export default Header;
