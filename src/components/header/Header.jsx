import "./header.css"
// import headerPhoto from "../images/headerphoto.jpg"
export default function Header() {
  return (
    <div className='header'>
      <div className="headerTitles">
        <span className="headerTitleSm">React & Node</span>
        <span className="headerTitleLg">Blog</span>
      </div>

      <img className="headerImg" src="https://images.pexels.com/photos/33686039/pexels-photo-33686039.jpeg"  alt="HEADERIMG" />
    </div>
  )
}
