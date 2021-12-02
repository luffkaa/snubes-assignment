import './footer.css';
import bestOf from '../../images/bestOf_Internet_Service_2018.png';
import facebook from '../../images/icons/facebook-f-brands.svg';
import twitter from '../../images/icons/twitter-brands.svg';
import linkedIn from '../../images/icons/linkedin-in-brands.svg';

export default function Footer() {
  return (
    <footer
      className="footer"
    >
      <div className="container">
        <div className="footer__container">
          <img
            src={bestOf}
            alt="best of internet service 2018"
            className="footer__image"
            width="85" height="85"
          />
          <ul className="footer__info">
            <li>
              <a href="/">
                About us
              </a>
            </li>
            <li>
              <a href="/">
                Become a Partner
              </a>
            </li>
            <li>
              <a href="/">
                FAQ
              </a>
            </li>
          </ul>
          <ul className="footer__legal">
            <li>
              <a href="/">
                Imprint
              </a>
            </li>
            <li>
              <a href="/">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="/">
                Privacy Policy
              </a>
            </li>
          </ul>
          <ul className="footer__contact">
            <li>
              <a
                href="mailto:support@sbubes.com"
                target="_blank"
                rel="noreferrer"
              >
                support@sbubes.com
              </a>
            </li>
            <li>
              <a
                href="tel:+493055645327"
                target="_blank"
                rel="noreferrer"
              >
                +49 (0) 305 5645327
              </a>
            </li>
            <li>
              <ul className="social_links">
                <li>
                  <a href="/">
                    <img
                      src={facebook}
                      alt="facebook icon"
                      className="social_icon"
                      width="7" height="14"
                    />
                  </a>
                </li>
                <li>
                  <a href="/">
                    <img 
                      src={twitter}
                      alt="twitter icon"
                      className="social_icon"
                      width="14" height="11"
                    />
                  </a>
                </li>
                <li>
                  <a href="/">
                    <img 
                      src={linkedIn} 
                      alt="linkedIn icon"
                      className="social_icon"
                      width="15" height="14"
                    />
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
