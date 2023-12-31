import { Link } from "react-router-dom";

const NavBer = () => {
  const navOption = (
    <>
      <li>
        <li><Link to="/">Home</Link></li>
      </li>
      <li>
        <li><Link to="/menu">Our Menu</Link></li>
      </li>
     
      <li>
        <Link to="/login">Login</Link>
      </li>
      <li>
        <Link to="/signup">Sign Up</Link>
      </li>
      {/* <li tabIndex={0}>
        <details>
          <summary>Parent</summary>
          <ul className="p-2">
            <li>
              <a>Submenu 1</a>
            </li>
            <li>
              <a>Submenu 2</a>
            </li>
          </ul>
        </details>
      </li> */}
      {/* <li>
        <a>Item 3</a>
      </li> */}
    </>
  );

  return (
    <>
      <div className="navbar fixed z-10 max-w-screen-xl   bg-black text-white bg-opacity-30">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navOption}
            </ul>
          </div>
          <a className="btn btn-ghost uppercase  text-xl">Restaurant</a>
        </div>
        <div className="navbar-center hidden lg:flex items-center">
          <ul className="menu menu-horizontal px-1">{navOption}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn text-white bg-red-600 border-none">Button</a>
        </div>
      </div>
    </> 
  );
};

export default NavBer;
