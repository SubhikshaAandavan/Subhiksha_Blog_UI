// Post.jsx
import "./post.css"
import { Link } from "react-router-dom";

export default function POST({ post }) {
    console.log("Img",post.img);
    
  return (
    <div className="post">
      <img className="postImg" src={post.img} alt="" />
      <div className="postInfo">
        <div className="postCats">
          {post.categories.map((c, i) => (
            <span className="postCat" key={i}>{c}</span>
          ))}
        </div>
        <Link to={`/post/${post.id}`} className="link">
          <span className="postTitle">{post.title}</span>
        </Link>
        <hr />
        <span className="postDate">{post.date}</span>
      </div>
      <p className="postDesc">{post.desc.substring(0, 150)}...</p>
    </div>
  )
}
