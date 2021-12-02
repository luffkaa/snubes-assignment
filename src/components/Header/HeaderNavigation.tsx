import { useState } from "react";

export default function HeaderNavigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleBurgerClick = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  return (
    <nav>
      <div
        className="header_navigation navigation_burger"
        onClick={handleBurgerClick}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul
        className={`header_navigation header_navigation__list ${isMenuOpen && 'mobile_navigation'}`}
      >
        <li>
          <a href="/">About Us</a>
        </li>
        <li>
          <a href="/">How it works</a>
        </li>
        <li>
          <a href="/">Become a Partner</a>
        </li>
        <li>
          <select id="currency" defaultValue="EUR">
            <option value="EUR">EUR</option>
            <option value="USD">USD</option>
          </select>
        </li>
        <li>
          <select id="language" defaultValue="EN">
            <option value="EN">EN</option>
            <option value="DE">DE</option>
            <option value="FR">FR</option>
          </select>
        </li>
        <li>
          <a href="/">Sign In</a>
        </li>
        <li>
          <a href="/">Get Access</a>
        </li>
      </ul>
    </nav>
  )
}
