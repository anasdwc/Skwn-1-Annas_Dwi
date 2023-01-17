export default function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4 shadow-base">
      <div className="brand flex items-center gap-2">
        <img src="./images/logo.svg" alt="Dekoor Logo" />
        <h1 className="font-bold text-brown">Dekoor</h1>
      </div>
      <div className="burger">
        <button>
          <img src="./images/icon-burger.svg" alt="Dropdown menu" />
        </button>
      </div>
    </nav>
  );
}
