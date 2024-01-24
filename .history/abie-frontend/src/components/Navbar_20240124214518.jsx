
export default function Navbar() {
    return (
        <nav className="flex justify-between items-center p-4 bg-white text-black">
      <div className="logo">
            <img src="public\Images\ABIEno1.svg" alt="Abie logo" />
        </div>
        <div className="links space-x-4">
        <a href="/" className="hover:underline">Home</a>
        <a href="/about" className="hover:underline">About</a>
        <a href="/contact" className="hover:underline">Contact Us</a>
      </div>
      </nav>
    );
  }