
export default function Navbar() {
    return (
        <nav className="flex justify-between items-center p-4 bg-white text-black">
      <div className="logo">
            <img src="abie-frontend\public\vite.svg" alt="Abie logo" />
        </div>
        <div className="links">
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/contact">Contact Us</a>
        </div>
      </nav>
    );
  }