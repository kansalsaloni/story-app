import React, { useState,useContext } from "react";
import '../Style/Header.css'
import '../Style/App.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { PopupContext } from '../util/PopupContext';
import { useLocation, useNavigate } from "react-router-dom";

function Header({ isAuthenticated, userName, avatarUrl }) {
  const { isRegisterPopupOpen, isLoginPopupOpen,toggleRegisterPopup, toggleLoginPopup,toggleCreateStoryPopup,isCreateStoryPopupOpen } = useContext(PopupContext);

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const navigate=useNavigate();
    const location=useLocation();
    const toggleMobileMenu = () => {
      setMobileMenuOpen(!isMobileMenuOpen);
    };

    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };

    const capitalizeUserName = (name) => {
        return name
          .split(' ')
          .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
          .join(' ');
      };
    const handleBookmarks=()=>{
      navigate('/bookmarks');
    }
    const handleYourStory=()=>{
      navigate('/your-story');
    }
    const isBookmarksPage = location.pathname === '/bookmarks';
    const isYourStoryPage = location.pathname === '/your-story';

  return (  
    <header className="header">    
      <div className="heading">
        SwipeTory
      </div> 
      <div className="header-right">
        {!isAuthenticated ? (
          <>
            <button className={`btn signup-btn ${isRegisterPopupOpen ? 'btn-active' : ''}`}
           
             onClick={()=>toggleRegisterPopup()} disabled={isRegisterPopupOpen}  style={{ pointerEvents: isRegisterPopupOpen ? 'none' : 'auto' }}>Register Now</button>
            <button className={`btn signin-btn ${isLoginPopupOpen ? 'btn-active' : ''}`}
             onClick={()=>toggleLoginPopup()} disabled={isLoginPopupOpen}  style={{ pointerEvents: isLoginPopupOpen ? 'none' : 'auto' }}>Sign In</button>
            <div className="mobile-hamburger" onClick={toggleMobileMenu}  disabled={isMobileMenuOpen}  style={{ pointerEvents: isMobileMenuOpen ? 'none' : 'auto' }}>
              &#9776;
            </div>
            {isMobileMenuOpen && (
              <div className="mobile-dropdown-menu">
                <div className="close-mobile-dropdown-menu">
                <p  onClick={toggleMobileMenu}>X</p>
                </div>
                <div className="mobile-dropdown-menu-buttons">
            <button className={`btn  ${isLoginPopupOpen ? 'btn-active' : ''}`} onClick={()=>toggleLoginPopup()} disabled={isLoginPopupOpen}  style={{ pointerEvents: isLoginPopupOpen ? 'none' : 'auto' }}>Login</button>
              <button className={`btn ${isRegisterPopupOpen ? 'btn-active' : ''}`} onClick={()=>toggleRegisterPopup()} disabled={isRegisterPopupOpen}  style={{ pointerEvents: isLoginPopupOpen ? 'none' : 'auto' }}>Register</button>
              </div>
              
              </div>
            )}
          </>
        ) : (
          <>
      
              <div className="auth-header-user-info">
            <button className={`btn bookmark-btn ${isBookmarksPage ? 'btn-active' : ''}`}
             onClick={handleBookmarks}>
            <FontAwesomeIcon icon={faBookmark} className="icon" />
                Bookmarks
                </button>
            <button className={`btn add-story-btn  ${ isCreateStoryPopupOpen? 'btn-active' : ''}`}
             onClick={toggleCreateStoryPopup}>Add Story</button>
            <div className="user-info">
              <img className="avatar" src={avatarUrl} alt="User Avatar" />
            </div>          
            </div>
          
             <div className="hamburger" onClick={toggleMenu}>
              &#9776;
            </div>

            {isMenuOpen   && (
              <div className="dropdown-menu">
                <div className="dropdown-menu-user-info">
                
                <div className="user-info">
              <img className="avatar" src={avatarUrl} alt="User Avatar" />
            </div> 
              
                <p className="username">{capitalizeUserName(userName)}</p>
               <p  className='mobile-menu-close-button' onClick={toggleMenu}>X</p>
                </div>
                <button className={`btn add-story-btns  ${ isCreateStoryPopupOpen? 'btn-active' : ''}`}
                 onClick={toggleCreateStoryPopup}>Add Story</button>
                <button className={` btn your-story-btns ${isYourStoryPage ? 'btn-active' : ''}`}
                
                onClick={handleYourStory}>Your Story</button>
                <button className={`btn bookmark-btns ${isBookmarksPage ? 'btn-active' : ''}`} onClick={handleBookmarks}>
            <FontAwesomeIcon icon={faBookmark} className="icon" />
                Bookmarks
                </button>

                <button className="btn logout-btn">Logout</button>
              </div>
            )}
          </>
        )}
      </div>
    </header>
      
  )
}

export default Header
