import "./sidebar.css"
import profileImg from "../../images/profilepic.jpg"

export default function Sidebar({ setSearchTerm }) {
      const categories = ["Life", "Music", "Style", "Cinema", "Tech", "Sports"];
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle"> ABOUT ME</span>
                <img className="proimg" src={profileImg} alt="profilepic" />
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae reiciendis at quis fuga saepe error eveniet est voluptates, eius ad tempora autem illo explicabo quaerat, beatae ipsum neque a cumque mollitia. Temporibus sed maxime quaerat itaque alias, rerum, nemo cumque, natus maiores tempora aspernatur dolore totam omnis in possimus vel.</p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList">
                    {categories.map((cat) => (
            <li
              key={cat}
              className="sidebarListItem"
              onClick={() => setSearchTerm(cat)}
              style={{ cursor: "pointer" }}
            >
              {cat}
            </li>
          ))}
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">FOLLOW US</span>
                <div className="sidebarSocial">

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
            </div>
        </div>
    )
}
