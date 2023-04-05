import './index.css'
import {Link} from 'react-router-dom'

import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'

import Popup from 'reactjs-popup'

const overlayStyles = {
  backgroundColor: '#ffff',
}

const Header = () => (
  <div className="header-con">
    <Link to="/" className="links">
      <button type="button" className="web-home">
        <img
          src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
          alt="website logo"
          className="website-logo"
        />
      </button>
    </Link>
    <Popup
      modal
      trigger={
        <button
          type="button"
          className="hamburger-btn"
          data-testid="hamburgerIconButton"
        >
          <GiHamburgerMenu className="hamburger-icon" />
        </button>
      }
      className="popup-content"
      overlayStyle={overlayStyles}
    >
      {close => (
        <div className="overlay-con">
          <button
            className="close-btn"
            type="button"
            onClick={() => close()}
            data-testid="closeButton"
          >
            <IoMdClose className="close-icon" />
          </button>
          <ul className="icons-con">
            <Link to="/" className="links">
              <li className="icon-link">
                <AiFillHome className="home-icon" />
                <p className="home-n">Home</p>
              </li>
            </Link>
            <Link to="/about" className="links">
              <li className="icon-link">
                <BsInfoCircleFill className="about-icon" />
                <p className="home-n">About</p>
              </li>
            </Link>
          </ul>
        </div>
      )}
    </Popup>
  </div>
)

export default Header
