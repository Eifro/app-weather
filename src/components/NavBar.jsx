import Links from "./Links";
import SearchBar from "./SearchBar";

export default function NavBar() {
  return (
    <div className="navbar bg-sky-600 py-5 lg:px-10 lg:flex lg:justify-between">
      <SearchBar />
      <Links />
    </div>
  )
}
