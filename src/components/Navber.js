import { NavLink } from "react-router-dom";

const Navber = () => {
  return (
    <header className="bg-slate-300 ">
      <div className="wrapper flex h-20  justify-between items-center ">
        <NavLink to="/" className="text-xl font-semibold text-violet-700">Chic-coutuer</NavLink>
        <ul className="flex gap-5">
          <li><NavLink to="/" className="nav-item">Home</NavLink></li>
          <li><NavLink to="/about" className="nav-item">About</NavLink></li>
          <li><NavLink to="/products" className="nav-item">Products</NavLink></li>
          <li><NavLink to="/contact" className="nav-item">contact</NavLink></li>
          <li><NavLink to="/signin" className="nav-item">Sign-in</NavLink></li>
        </ul>
      </div>
    </header>
  )
}

export default Navber