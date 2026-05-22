import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  FaShoppingCart,
  FaHeart,
  FaUser,
  FaBars,
  FaTimes,
  FaSearch,
} from "react-icons/fa";
import useCart from "../hooks/usecart";
import logo from "../assets/logo/ezstore-logo.png";

function Navbar() {
  const navigate = useNavigate();
  const { totalItems } = useCart();
  const [mobileMenu, setMobileMenu] = useState(false);
  const [search, setSearch] = useState("");

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/pets", label: "Pets" },
    { to: "/brands", label: "Brands" },
    { to: "/best-sellers", label: "Best Sellers" },
    { to: "/blogs", label: "Blog" },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    if (search.trim()) {
      navigate(`/pets?search=${search.trim()}`);
      setSearch("");
      setMobileMenu(false);
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-[#0D2B5C]/90 backdrop-blur-md shadow-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-6 py-4 gap-4">
          <NavLink to="/" className="flex items-center gap-2 shrink-0">
            <img src={logo} alt="EZStore Logo" className="h-10 md:h-12 object-contain" />
          </NavLink>

          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `font-medium transition-all duration-300 px-3 py-2 rounded-lg whitespace-nowrap ${
                    isActive
                      ? "text-[#F53B3B] bg-white/10"
                      : "text-white hover:text-[#F53B3B] hover:bg-white/5"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <form
            onSubmit={handleSearch}
            className="hidden lg:flex items-center bg-white/10 border border-white/20 rounded-full px-4 py-2 gap-2 flex-1 max-w-sm"
          >
            <FaSearch className="text-white/60 text-sm" />
            <input
              type="text"
              placeholder="Search pets, brands..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="bg-transparent text-white placeholder-white/50 text-sm outline-none w-full"
            />
          </form>

          <div className="hidden md:flex items-center gap-5 text-white text-xl shrink-0">
            <Link to="/wishlist" className="hover:text-[#F53B3B] transition-all duration-300">
              <FaHeart />
            </Link>
            <Link to="/cart" className="relative hover:text-[#F53B3B] transition-all duration-300">
              <FaShoppingCart />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#F53B3B] text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-bold">
                  {totalItems}
                </span>
              )}
            </Link>
            <Link to="/login" className="hover:text-[#F53B3B] transition-all duration-300">
              <FaUser />
            </Link>
          </div>

          <button
            className="md:hidden text-white text-2xl"
            onClick={() => setMobileMenu(!mobileMenu)}
            aria-label="Toggle Menu"
          >
            {mobileMenu ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {mobileMenu && (
          <div className="md:hidden bg-[#0D2B5C] border-t border-white/10 px-4 py-4 flex flex-col gap-2 animate-in fade-in slide-in-from-top-2 duration-300">
            <div className="space-y-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={() => setMobileMenu(false)}
                  className={({ isActive }) =>
                    `block text-base font-medium transition-all duration-300 px-4 py-3 rounded-lg w-full text-left ${
                      isActive
                        ? "text-[#F53B3B] bg-white/10"
                        : "text-white hover:text-[#F53B3B] hover:bg-white/5"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </div>

            <div className="h-px bg-white/10 my-2"></div>

            <form onSubmit={handleSearch} className="flex items-center bg-white/10 border border-white/20 rounded-lg px-3 py-2 gap-2">
              <FaSearch className="text-white/60 text-sm" />
              <input
                type="text"
                placeholder="Search..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="bg-transparent text-white placeholder-white/50 text-sm outline-none w-full"
              />
            </form>

            <div className="h-px bg-white/10 my-2"></div>

            <div className="flex items-center justify-around text-white text-lg pt-2 pb-1">
              <Link
                to="/wishlist"
                onClick={() => setMobileMenu(false)}
                className="flex flex-col items-center gap-1 hover:text-[#F53B3B] transition-all duration-300"
              >
                <FaHeart className="text-xl" />
                <span className="text-xs">Wishlist</span>
              </Link>

              <Link
                to="/cart"
                onClick={() => setMobileMenu(false)}
                className="relative flex flex-col items-center gap-1 hover:text-[#F53B3B] transition-all duration-300"
              >
                <FaShoppingCart className="text-xl" />
                <span className="text-xs">Cart</span>
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-2 bg-[#F53B3B] text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-bold">
                    {totalItems}
                  </span>
                )}
              </Link>

              <Link
                to="/login"
                onClick={() => setMobileMenu(false)}
                className="flex flex-col items-center gap-1 hover:text-[#F53B3B] transition-all duration-300"
              >
                <FaUser className="text-xl" />
                <span className="text-xs">Account</span>
              </Link>
            </div>
          </div>
        )}
      </header>
      <div className="h-20 md:h-24" aria-hidden="true" />
    </>
  );
}

export default Navbar;