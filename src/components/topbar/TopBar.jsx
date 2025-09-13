import "./topbar.css"
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";

export default function TopBar({ user, setUser, setSearchTerm }) {
  const [showSearch, setShowSearch] = useState(false);
  const [query, setQuery] = useState("");

    useEffect(() => {
    if (query.trim() === "") {
      setSearchTerm(""); 
    } else {
      setSearchTerm(query.trim());
    }
  }, [query, setSearchTerm])

  const handleSearch = (e) => {
    e.preventDefault();
    
    
    if (query.trim() === "") {
      setSearchTerm("");
    } else {
      setSearchTerm(query.trim());}
  };
  return (
    <div className='top'>
      <div className="topLeft">
  <a href="https://facebook.com/YourPage" target="_blank" rel="noopener noreferrer">
    <i className="topIcon fa-brands fa-square-facebook"></i>
  </a>
  <a href="https://twitter.com/YourPage" target="_blank" rel="noopener noreferrer">
    <i className="topIcon fa-brands fa-square-twitter"></i>
  </a>
  <a href="https://pinterest.com/YourPage" target="_blank" rel="noopener noreferrer">
    <i className="topIcon fa-brands fa-square-pinterest"></i>
  </a>
  <a href="https://instagram.com/YourPage" target="_blank" rel="noopener noreferrer">
    <i className="topIcon fa-brands fa-square-instagram"></i>
  </a>
</div>

      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">HOME</Link>
          </li>
          <li className="topListItem">
            <Link  className="link" to="/about">ABOUT</Link>
          </li>
          <li className="topListItem">
            <Link  className="link" to="/contact">CONTACT</Link>
          </li>
          <li className="topListItem">
            <Link  className="link" to="/write">WRITE</Link>
          </li>
          <li className="topListItem"  onClick={() => setUser(false)}>
            <Link  className="link" to="/login">{user && "LOGOUT"}</Link>
          </li>
        </ul>
      </div>
      <div className="topRight">
        {
          user ? (
            <Link  className="link" to="/settings">
              <img className="topImg" src="https://images.pexels.com/photos/33272752/pexels-photo-33272752.jpeg" alt="topimg" />
            </Link>

          ):(
            <>
              <Link  className="link" to="/login">LOGIN&nbsp;&nbsp;</Link>
               {"  | "}
              <Link  className="link" to="/register">&nbsp;&nbsp;REGISTER</Link>
              </>
          )
        }
        {/* 🔍 Search toggle */}
        <i 
          className="topSearchIcon fa-solid fa-magnifying-glass" 
          onClick={() => setShowSearch(!showSearch)} 
          style={{ cursor: "pointer", marginLeft: "10px" }}
        ></i>

        {showSearch && (
          <form onSubmit={handleSearch} className="searchForm">
            <input
              type="text"
              placeholder="Search category..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="searchInput"
            />
          </form>
        )}

      </div>
    </div>
  )
}
