import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-white text-black">
      <div className="logo">
        <Link to="/">
            <img src="/Images/ABIEno1.svg" alt="Abie logo" />
        </Link>
      </div>
      <div className="links space-x-4">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/about" className="hover:underline">About</Link>
        <Link to="/contact" className="hover:underline">Contact Us</Link>
      </div>
    
    </nav>
  );
}
