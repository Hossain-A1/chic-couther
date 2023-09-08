import { NavLink } from "react-router-dom";

const Navber = () => {
  return (
    <header>
      <div className="wrapper flex justify-between ">
        <h2>store</h2>
        <ul className="flex gap-5">
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/">About</NavLink></li>
          <li><NavLink to="/products">Products</NavLink></li>
          <li><NavLink to="/">contact</NavLink></li>
          <li><NavLink to="/">Sign in</NavLink></li>
        </ul>
      </div>
    </header>
  )
}

export default Navber