import { Link } from "react-router-dom";

const PageNavigation  = ({product}) => {
  return (
 <div>
     <Link to="/" className="text-green-900">Home  </Link>
    <span className="text-slate-700">/ {(product.title)}..</span>
 </div>
  )
}

export default PageNavigation 