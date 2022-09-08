import { Link } from "react-router-dom";

export default function Links() {
  return (
    <div className="links flex items-center">
        <Link to="/about" className="text-white text-xl font-bold ease-in duration-100 hover:text-zinc-300 mr-5">
            About
        </Link>
    </div>
  )
}
