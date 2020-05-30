import { Link } from "gatsby";
import PropTypes from "prop-types";
import React, { useState } from 'react';
import Backdrop from './BackdropSection';

const Header = ({ siteTitle }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  let navClasses = 'nav-links';
  let navItemClasses = 'nav-link-item';
  let burgerClass = "burger";
  let backdropClass = "backdrop";
  if (isOpen) {
    navClasses = 'nav-links nav-active';
    navItemClasses = 'nav-link-item-active';
    burgerClass = "burger toggle";
    backdropClass = "backdrop backdrop-active";

  }

  return (
    <header>
      <Backdrop activeClass={backdropClass} click={toggle} />
      <nav className="navbar">
        <div className="nav-belt">
          <div>
            <h4>
              <Link className="logo" to="/" >
                <div className="logo-image"></div>     
                {siteTitle}
              </Link>
            </h4>
          </div>
          <ul className={navClasses}>
            <li className={navItemClasses}><a href="#">About</a></li>
            <li className={navItemClasses}><a href="#">Pricing</a></li>
            <li className={navItemClasses}><a href="#">Login</a></li>
            <li className={`${navItemClasses} nav-item-bold`} ><a href="#">Sign Up</a></li>
          </ul>
          <div className={burgerClass} onClick={toggle}>
            <div className="burger-line-1"></div>
            <div className="burger-line-2"></div>
            <div className="burger-line-3"></div>
          </div>
        </div>
      </nav>
    </header>
  )
};

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header;
