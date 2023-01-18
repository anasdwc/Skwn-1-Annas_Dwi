import clsx from "clsx";
import { useState } from "react";

export default function Navbar() {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const handleNav = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <nav className="relative grid grid-cols-2 items-center justify-between gap-y-4 p-4 shadow-base">
      <div className="brand flex items-center gap-2">
        <img src="./images/logo.svg" alt="Dekoor Logo" />
        <h1 className="font-bold text-brown">Dekoor</h1>
      </div>
      <div
        className={clsx(
          "nav-list inset-0 top-16 col-span-full row-span-2 row-start-2 row-end-3 flex flex-col items-center gap-y-2 text-sm transition-transform duration-500",
          isCollapsed && "hidden"
        )}
      >
        <ul className="flex gap-4">
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Furniture</a>
          </li>
          <li>
            <a href="#">Partnership</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
        <ul className="flex items-center gap-4">
          <li>
            <a
              href="#"
              className="rounded-lg bg-light-green py-3 px-4 text-very-black-brown"
            >
              Sign Up
            </a>
          </li>
          <li className="rounded-lg bg-black-brown p-2">
            <a href="#">
              <img src="/images/icon-cart.svg" alt="" />
            </a>
          </li>
        </ul>
      </div>
      <div className="burger relative z-10 col-start-2 col-end-3 flex items-center justify-end md:hidden">
        <button onClick={handleNav}>
          <img src="./images/icon-burger.svg" alt="Dropdown menu" />
        </button>
      </div>
    </nav>
  );
}
