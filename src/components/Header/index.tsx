import './header.css';
import logoFull from '../../images/snubes-logo_full.svg'
import logoMobile from '../../images/snubes-logo_mobile.svg'
import HeaderNavigation from './HeaderNavigation';
import { useEffect, useState } from 'react';

export default function Header() {
  const [isScrolling, setIsScrolling] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setIsScrolling(window.scrollY > 10);
    });

    return () => window.removeEventListener("scroll", () => {
      setIsScrolling(false);
    })
  }, []);
  return (
    <header className={`header ${isScrolling && 'header__fixed'}`}>
      <div className="container">
        <div className="header__container">
          <a
            href="/"
            className="header__logo_link"
          >
            <img
              src={logoFull}
              alt="company logo full screen"
              className="header__logo logo_full"
              width="162"
              height="36"
            />
            <img
              src={logoMobile}
              alt="company logo mobile"
              className="header__logo logo_mobile"
              width="103"
              height="25"
            />
          </a>
          <HeaderNavigation />
        </div>
      </div>
    </header>
  )
}
