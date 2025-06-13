import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-white/90 backdrop-blur shadow-sm flex gap-6 px-6 py-3">
      <Link to="/" className="font-bold">DentaShop</Link>
      <Link to="/"          >Accueil</Link>
      <a   href="#contact"  >Contact</a>
      <Link to="/boutique"  className="font-semibold">Boutique</Link>
    </nav>
  );
}
